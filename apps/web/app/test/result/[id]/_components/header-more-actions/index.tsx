"use client";

import { Ellipsis, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";
import { CustPopover } from "@/components/popover";
import { ErrorToast, SuccessToast } from "@/components/toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { fetchApi } from "@/lib/api";
import { copyToClipboard } from "@/lib/copy-to-clipboard";
import { cn } from "@/lib/utils";
import { RESULT_HEADER_MORE_ACTIONS } from "../../_constants";

interface HeaderMoreActionsProps {
  testRunId: string;
  testName?: string;
}

export const HeaderMoreActions = ({ testRunId, testName }: HeaderMoreActionsProps) => {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  const handleCopyTestId = async () => {
    try {
      const copied = await copyToClipboard(testRunId);
      if (copied) {
        SuccessToast({ title: "Copied ID to clipboard" });
      } else {
        ErrorToast({ title: "Failed to copy ID" });
      }
    } catch {
      ErrorToast({ title: "Failed to copy ID" });
    }
  };

  const handleDownloadJsonReport = () => {
    // WIP: Implement JSON report download
    ErrorToast({ title: "Download feature coming soon" });
  };

  const handleDeleteTest = async () => {
    setIsDeleting(true);

    try {
      const { message, error } = await fetchApi(`/api/delete-test/${testRunId}`, {
        method: "DELETE",
      });

      if (error) {
        ErrorToast({ title: message || error.message });
      } else {
        SuccessToast({ title: message });
        setShowDeleteDialog(false);
        router.push("/dashboard");
      }
    } catch {
      ErrorToast({ title: "Failed to delete test" });
    } finally {
      setIsDeleting(false);
    }
  };

  const handleAction = (actionName: string) => {
    switch (actionName) {
      case "Copy Test ID":
        handleCopyTestId();
        break;
      case "Download JSON Report":
        handleDownloadJsonReport();
        break;
      case "Delete Test":
        setShowDeleteDialog(true);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <CustPopover
        trigger={
          <Button
            size="sm"
            variant="primary"
            className="bg-neutral-100 border-neutral-200 hover:bg-muted/50 dark:bg-white/8 dark:text-neutral-300/80 dark:border-neutral-700/40 dark:hover:bg-white/10 dark:hover:brightness-110"
          >
            <Ellipsis aria-hidden="true" />
          </Button>
        }
        align="end"
      >
        {RESULT_HEADER_MORE_ACTIONS.map(action => (
          <Fragment key={action.name}>
            {action.isSeparator && <Separator className="dark:bg-neutral-700/40" />}
            <span
              role="listitem"
              className={cn(
                "flex items-center gap-2 text-neutral-500 dark:text-neutral-400 rounded transition-colors cursor-pointer px-2 py-1.5 item-hover",
                // FIXME: danger color is not applying
                action.isSeparator &&
                  "text-red-400 dark:text-red-400/80 dark:hover:bg-red-900/45 dark:hover:text-red-200 hover:bg-red-300/90 hover:text-red-500",
              )}
              onClick={() => handleAction(action.name)}
            >
              <action.icon className="size-[.8125rem]" />
              {action.name}
            </span>
          </Fragment>
        ))}
      </CustPopover>

      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Test</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you would like to delete{" "}
              <span className="font-semibold text-neutral-700 dark:text-neutral-200">
                &ldquo;{testName || testRunId}&rdquo;
              </span>
              ?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isDeleting}>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteTest} disabled={isDeleting}>
              {isDeleting && <Loader2 className="animate-spin" />}
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
