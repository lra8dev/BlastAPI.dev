"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ACCORDION } from "@/constants";

export const FAQs = () => {
  const [expanded, setExpanded] = useState<string>("");

  return (
    <section className="grid grid-cols-1 w-full justify-between gap-5 border-t border-gray-900 bg-neutral-950/80 p-8 md:px-16 lg:px-34 md:py-16 lg:flex lg:pt-24 lg:pb-28">
      <div className="flex flex-col font-semibold text-2xl lg:w-1/2">
        <h1 className="text-muted-foreground">Frequently Asked</h1>
        <h1 className="text-gray-200/90">Questions</h1>
      </div>

      <Accordion type="multiple" className="w-full">
        {ACCORDION.map(({ id, question, ans }) => (
          <AccordionItem
            key={id}
            value={id}
            className="border-gray-700"
            onClick={() => setExpanded(expanded !== id ? id : "")}
          >
            <AccordionTrigger
              className={`w-full text-base leading-6 font-semibold text-white/60 transition-all duration-300 ease-in-out hover:cursor-pointer hover:text-white/90 hover:no-underline lg:text-lg ${expanded === id && "text-white/90"}`}
            >
              {question}
            </AccordionTrigger>
            <AccordionContent className="text-sm font-medium text-gray-400 md:leading-8 lg:text-base">
              {ans}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
