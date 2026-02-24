import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionHeading({ children, className = "" }: SectionHeadingProps) {
  return (
    <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight capitalize text-white mb-10 sm:mb-12 text-center ${className}`.trim()}>
      {children}
    </h2>
  );
}
