"use client";

import { CircleChevronRight } from "lucide-react";
import { useState } from "react";
import { LoadDataConfigChart } from "@/components/charts/load-data-config";
import { JsonEditor } from "@/components/json-editor";
import { JSONTable } from "@/components/json-table";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Slider } from "@/components/ui/slider";
import { LOAD_CONFIG, REQ_CONFIG_TABS, REQUEST_METHODS } from "@/constants";
import { useTestForm } from "@/hooks/forms/apiTest";
import { SecondaryBtn } from "../buttons/secondary";
import { Card } from "../card";
import { GenerateForm } from "./formGenerator";

export const CreateTestForm = () => {
  const [active, setActive] = useState<string>(REQ_CONFIG_TABS[0].id);
  const { form, handleSubmit, control, onSubmit, errors, setValue, getValues } = useTestForm();

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-3 md:gap-6 h-full pb-16 px-3 sm:px-4 md:px-8"
      >
        <Card className="w-full lg:w-1/3 flex flex-col gap-4">
          <>
            {/* WIP: add test location field */}
            <h3 className="font-medium text-sm text-muted-foreground uppercase md:font-semibold">
              Test Name
            </h3>
            <GenerateForm
              items={{
                name: "name",
                type: "text",
                placeholder: "Enter test name",
              }}
              formProps={{ control, errors }}
            />
          </>
        </Card>
        <Card className="w-full gap-4">
          <h3 className="font-medium text-xs md:text-sm text-muted-foreground uppercase md:font-semibold">
            Load Configuration
          </h3>
          <section className="flex flex-col w-full gap-8 lg:gap-20 md:flex-row">
            <div className="flex flex-col w-full gap-6 md:w-1/2">
              {LOAD_CONFIG.map(({ label, props }) => (
                <div key={label} className="flex flex-col gap-0">
                  <h3 className="font-medium text-gray-300/75 text-xs md:text-sm">{label}</h3>
                  <div className="flex items-center gap-4">
                    <Slider
                      min={1}
                      max={100}
                      step={1}
                      value={[getValues(props.name as SliderNames)]}
                      onValueChange={value =>
                        setValue(props.name as SliderNames, value[0], {
                          shouldValidate: true,
                          shouldDirty: true,
                        })
                      }
                      className="flex-1 cursor-pointer"
                    />
                    <div>
                      <GenerateForm
                        items={props}
                        formProps={{ control, errors }}
                        className="w-full max-w-20 text-xs md:text-sm"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full p-2">
              <LoadDataConfigChart
                totalRequests={getValues("totalRequests")}
                duration={getValues("duration")}
                concurrency={getValues("concurrency")}
                requestRate={getValues("requestRate")}
              />
            </div>
          </section>
        </Card>
        <Card className="w-full gap-4 pb-7">
          <>
            <h3 className="font-medium text-sm text-muted-foreground uppercase md:font-semibold">
              Request Configuration
            </h3>
            <div className="w-full flex items-center border-neutral-700/50 rounded-md">
              <GenerateForm
                items={{
                  name: "method",
                  type: "select",
                  options: REQUEST_METHODS,
                }}
                formProps={{ control, errors }}
                className="text-gray-300/90 min-w-28 font-medium text-sm py-5 border-r-0 rounded-r-none"
              />
              <div className="relative mx-auto flex place-items-center bg-dark-3 border-y border-neutral-700/50">
                <div className="absolute w-[1px] h-4 bg-gray-300/20" />
              </div>
              <GenerateForm
                items={{
                  name: "url",
                  type: "url",
                  placeholder: "Enter URL: e.g., https://api.example.com",
                }}
                formProps={{ control, errors }}
                className="w-full py-5 border-l-0 rounded-l-none placeholder:text-sm placeholder:font-normal"
              />
            </div>
            <div className="flex flex-col gap-4 lg:mt-1">
              <div className="flex items-center gap-8 text-sm font-medium text-gray-300/70">
                {REQ_CONFIG_TABS.map(item => (
                  <h3
                    key={item.id}
                    className={`hover:text-gray-300 cursor-pointer font-medium p-2 ${active === item.id && "text-gray-300 border-b-1 border-fiery-orange"}`}
                    onClick={() => setActive(item.id)}
                  >
                    {item.name}
                  </h3>
                ))}
              </div>
              <div>
                {active === REQ_CONFIG_TABS[0].id ? (
                  <JSONTable setValue={setValue} />
                ) : (
                  <JsonEditor setValue={setValue} />
                )}
              </div>
            </div>
          </>
        </Card>

        <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
          <SecondaryBtn
            type="submit"
            title="Execute Test"
            className="group font-medium text-gray-200/90 md:text-base p-3 md:p-5 lg:p-6 lg:text-lg bg-electric-blue/90 hover:bg-electric-blue/75 text-shadow-sm text-shadow-neutral-700 shadow-sm shadow-electric-blue hover:shadow-none"
          >
            <CircleChevronRight
              className="transition-all delay-75 ease-in group-hover:translate-x-1.5 text-gray-200"
              aria-hidden="true"
            />
          </SecondaryBtn>

          <span className="font-medium text-gray-200 text-sm md:text-base">Or</span>
          <Button
            variant="primary"
            className="font-normal p-3 md:p-4 lg:p-5 text-xs md:text-sm text-gray-200/85 bg-white/5 rounded border border-neutral-700/30 text-shadow-xs text-shadow-neutral-700 hover:bg-electric-blue"
          >
            Save Draft
          </Button>
        </div>
      </form>
    </Form>
  );
};
