"use client";

import { Card as ShadcnCard } from "@/components/ui/card";

export const Card = ({ children, className }: CardProps) => (
  <ShadcnCard className={`bg-dark-2 border-neutral-700/25 p-4 rounded-sm ${className}`}>
    {children}
  </ShadcnCard>
);
