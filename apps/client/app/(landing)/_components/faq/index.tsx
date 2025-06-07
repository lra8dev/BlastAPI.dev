"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ACCORDION } from "@/constants";
import { useState } from "react";

export const FAQs = () => {
  const [expanded, setExpanded] = useState<string>("");

  return (
    <div className="grid w-full justify-between gap-5 border-t border-gray-900 bg-neutral-950/80 p-8 md:px-28 md:py-16 lg:flex lg:pt-24 lg:pb-28">
      <div className="md:xl flex flex-col text-lg font-semibold md:w-1/2 lg:text-2xl">
        <h1 className="text-muted-foreground">Frequently Asked</h1>
        <h1 className="text-gray-200">Questions</h1>
      </div>

      <Accordion type="multiple" className="w-full">
        {ACCORDION.map(({ id, question, ans }) => (
          <AccordionItem
            key={id}
            value={id}
            className="border-gray-700"
            onClick={() => setExpanded(expanded === id ? "" : id)}
          >
            <AccordionTrigger
              className={`w-full text-base leading-6 font-semibold text-white/60 transition-all duration-300 ease-in-out hover:cursor-pointer hover:text-white/90 hover:no-underline lg:text-lg ${
                expanded === id && "text-white/90"
              }`}
            >
              {question}
            </AccordionTrigger>
            <AccordionContent className="text-sm font-medium text-gray-400 md:leading-8 lg:text-base">
              {ans}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
