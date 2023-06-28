import { Line } from "../Line";
import { Section } from "../Section";

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
          <span className="text-blue font-bold text-4xl tracking-wide sm:text-7xl">
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
