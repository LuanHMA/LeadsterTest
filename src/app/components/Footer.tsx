import Image from "next/image";
import LogoGif from "../assets/footer-gif.gif";
import { Line } from "./Line";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const footerLinks = [
  {
    title: "Links Principais",
    links: ["Home", "Ferramenta", "Preços", "Contato"],
  },
  {
    title: "Cases",
    links: [
      "Geração de Leads B2B",
      "Geração de Leads em Software",
      "Geração de Leads em Imobiliária",
      "Cases de Sucesso",
    ],
  },
  {
    title: "Materiais",
    links: [
      "Blog",
      "Parceria com Agências",
      "Guia Definitivo do Marketing",
      "Materias Gratuitos",
    ],
  },
];

export function Footer() {
  return (
    <footer
      className={`w-full flex flex-col justify-center items-center px-4 py-10
     bg-white sm:px-14 sm:py-14`}
    >
      <div className="w-full max-w-7xl space-y-12">
        {/* Logo */}
        <div className="flex flex-col items-center">
          <Image src={LogoGif} alt="Leadster Logo" />
          <span className="text-sm text-slate-400 font-base mt-1">
            Tranformando visitantes em clientes
          </span>
        </div>

        {/* Links */}
        <div className="flex flex-col justify-between gap-14 flex-wrap sm:flex-row">
          {footerLinks.map(({ links, title }) => {
            return (
              <div className="space-y-6">
                <h2 className="text-sm font-bold text-default-color">
                  {title}
                </h2>

                <div className="flex flex-col gap-y-5">
                  {links.map((text) => {
                    return (
                      <a
                        href={"#"}
                        className="text-sm text-slate-400 hover:scale-105 transition-all"
                      >
                        {text}
                      </a>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {/* Contact */}
          <div className="space-y-4">
            <h2 className="text-sm font-bold text-default-color pb-2">
              Siga a Leadster
            </h2>

            <div className="flex items-center gap-x-4">
              <a
                href="#"
                className="rounded-full bg-neutral-200 p-3 hover:bg-blue group transition-all hover:scale-125"
              >
                <FaLinkedinIn
                  size={16}
                  className="text-[#92a1ab] group-hover:text-white"
                />
              </a>
              <a
                href="#"
                className="rounded-full bg-neutral-200 p-3 hover:bg-blue group transition-all hover:scale-125"
              >
                <FaFacebookF
                  size={16}
                  className="text-[#92a1ab] group-hover:text-white"
                />
              </a>
              <a
                href="#"
                className="rounded-full bg-neutral-200 p-3 hover:bg-blue group transition-all hover:scale-125"
              >
                <FaInstagram
                  size={16}
                  className="text-[#92a1ab] group-hover:text-white"
                />
              </a>
            </div>

            <div className="space-y-4">
              <div className="text-sm ">
                Email
                <span className="text-slate-400 ml-1">
                  contato@leadster.com.br
                </span>
              </div>
              <div className="text-sm ">
                Telefone
                <span className="text-slate-400 ml-1">(42)98928-9851</span>
              </div>
            </div>
          </div>
        </div>

        <Line />

        {/* Copyright */}
        <div className="flex items-center justify-between w-full flex-wrap gap-4">
          <span className="text-sm text-slate-400">
            Copyright &copy; 2015 - 2022 Todos os direitos reservados {" | "}
            <a
              href="https://leadster.com.br/"
              className="text-blue-border font-medium"
            >
              Leadster
            </a>
          </span>

          <span className="text-sm text-slate-400">
            Rua José Loureiro, 464 - Curitiba PR - CEP: 80010-000 {" | "} Termos
            de uso
          </span>
        </div>
      </div>
    </footer>
  );
}
