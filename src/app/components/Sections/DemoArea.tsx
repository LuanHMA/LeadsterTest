import Image from "next/image";
//Components
import { Section } from "../Section";
import { Line } from "../Line";
//Images
import Comparative from "../../assets/comparativo_img.png";
import SeloRD from "../../assets/selo_RD.png";
import NoCardDark from "../../assets/no-card-dark.webp";
import Rating from "../../assets/rating.webp";

export function DemoArea() {
  return (
    <Section backgroundColor="secundary">
      <div className="w-full max-w-7xl flex flex-col items-center justify-center sm:flex-row sm:gap-x-14 sm:flex-wrap">
        <div className="max-w-xl" data-aos="zoom-in-right" data-aos-delay="150">
          <Image
            src={Comparative}
            alt="Comparação da Leadster com outras ferramentas"
          />
        </div>

        <div
          className="flex flex-col items-start justify-start gap-y-4"
          data-aos="zoom-in-left"
          data-aos-delay="300"
        >
          <h2 className="text-default-color font-semibold text-2xl text-left sm:text-4xl">
            Pronto para triplicar sua <br /> <b>Geração de Leads?</b>
          </h2>
          <h3 className="text-default-color font-medium text-xl">
            Criação é ativação em <b>4 minutos.</b>
          </h3>
          <Line />

          <div className="flex items-center gap-x-4 flex-wrap gap-y-2">
            <a
              href="#"
              className="text-sm uppercase text-white font-bold bg-blue-button border border-blue-border py-4 px-8 rounded-3xl transition-all duration-500 hover:bg-blue-light hover:text-blue sm:text-md"
            >
              VER DEMONSTRAÇÃO
            </a>
            <Image
              src={SeloRD}
              alt="Selo - Top 10 Apps mais usados RD Station"
              width={150}
              height={53}
            />
          </div>

          <div className="flex items-center gap-x-1 flex-wrap gap-y-2">
            <Image
              src={NoCardDark}
              alt="Ícone não necessário cartão"
              width={16}
              height={16}
            />
            <p className="text-sm font-medium text-default-color sm:text-md">
              <b>Não</b> é necessário Cartão de Crédito |
            </p>
            <Image src={Rating} alt="Avaliação" />
            <p className="text-sm font-medium text-default-color sm:text-md">
              <b>4.9</b>/5 média de satisfação
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
