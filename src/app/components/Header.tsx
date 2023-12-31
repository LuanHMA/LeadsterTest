import Image from "next/image";
import Logo from "../assets/logo.png";

export function Header() {
  return (
    <header className="py-7 flex items-center justify-center bg-white">
      <Image alt="Leadster" src={Logo} width={170} height={36} />
    </header>
  );
}
