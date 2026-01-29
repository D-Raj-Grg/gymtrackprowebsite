"use client";

import { cn } from "@/lib/utils";

interface PhoneMockupProps {
  children: React.ReactNode;
  className?: string;
}

export function PhoneMockup({ children, className }: PhoneMockupProps) {
  return (
    <div
      className={cn(
        "relative mx-auto w-[280px] h-[580px] rounded-[3rem] border-[8px] border-neutral-800 bg-neutral-900 shadow-2xl shadow-black/50",
        className
      )}
    >
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[28px] bg-neutral-800 rounded-b-2xl z-10" />
      {/* Screen */}
      <div className="relative w-full h-full rounded-[2.2rem] overflow-hidden bg-black">
        {children}
      </div>
    </div>
  );
}
