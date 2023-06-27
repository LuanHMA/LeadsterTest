import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJukartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Leadster test",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={plusJukartaSans.className}>{children}</body>
    </html>
  );
}
