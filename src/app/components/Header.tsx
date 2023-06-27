import Image from "next/image";
import Logo from "../assets/logo.png";

export function Header() {
  return (
    <header>
      <Image alt="Leadster" src={Logo} width={140} height={140} />
    </header>
  );
}
