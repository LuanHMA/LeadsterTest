import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  backgroundColor: "primary" | "secundary";
}

export function Section({ children, backgroundColor }: SectionProps) {
  return (
    <section
      className={`w-full flex justify-center items-center px-4 py-20 ${
        backgroundColor === "primary" ? "bg-white" : "bg-blue-light"
      } sm:py-32`}
    >
      {children}
    </section>
  );
}
