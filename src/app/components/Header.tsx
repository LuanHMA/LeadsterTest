import Image from "next/image";
import Logo from "../assets/logo.png";

export function Header() {
  return (
    <header className="py-8 flex items-center justify-center bg-slate-100">
      <Image alt="Leadster" src={Logo} width={150} height={150} />
    </header>
  );
}
