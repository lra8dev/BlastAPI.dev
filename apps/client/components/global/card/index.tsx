"use client";

import { Card as ShadcnCard } from "@/components/ui/card";

export const Card = ({ children, className }: CardProps) => (
  <ShadcnCard className={`bg-dark-gray-2 border-neutral-700/45 p-4 ${className}`}>
    {children}
  </ShadcnCard>
);
