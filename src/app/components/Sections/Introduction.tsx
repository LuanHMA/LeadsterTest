import { Line } from "../Line";
import { Section } from "../Section";
import Image from "next/image";
import TitleImage from "../../assets/h1-image.webp";

export function Introduction() {
  return (
    <Section backgroundColor="secundary">
      <div className="w-full max-w-2xl flex flex-col justify-center items-start gap-y-5 sm:items-center">
        <h1 className="text-sm text-blue font-bold uppercase border-2 border-blue-border w-max py-1 px-3 rounded-2xl rounded-bl-none">
          WEBMINARS EXCLUSIVOS
        </h1>

        <h2 className="text-left space-y-2 sm:text-center">
          <span className="text-default-color font-semibold text-2xl sm:text-4xl">
            Menos Conversinha,
          </span>
          <br />
          <span className="text-blue font-bold text-4xl tracking-wide sm:text-7xl relative">
            <Image
              src={TitleImage}
              alt="Detalhe do título"
              width={30}
              height={32}
              className="absolute -right-3 top-0 sm:w-[46px] animate-bounce"
            />
            Mais Conversão
          </span>
        </h2>

        <Line />

        <p className="text-sm font-medium text-default-color sm:text-md">
          Conheça as estratégias que <b>mudaram o jogo</b> e como aplicá-las no
          seu negócio
        </p>
      </div>
    </Section>
  );
}
