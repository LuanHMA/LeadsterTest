import { Section } from "../../Section";
import { Filter } from "./Filter";

export function FilterVideos() {
  return (
    <Section backgroundColor="primary">
      <div className="w-full max-w-6xl flex flex-col justify-center items-center">
        <Filter />
      </div>
    </Section>
  );
}
