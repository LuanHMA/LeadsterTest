import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  backgroundColor: "primary" | "secundary";
}

export function Section({ children, backgroundColor }: SectionProps) {
  return (
    <section
      className={`w-full flex justify-center items-center px-4 py-10 ${
        backgroundColor === "primary"
          ? "bg-white dark:bg-slate-950"
          : "bg-blue-light dark:bg-slate-900"
      } sm:py-36 sm:px-0`}
    >
      {children}
    </section>
  );
}
