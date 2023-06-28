import { Section } from "../../Section";
import { Filter } from "./Filter";
import { VideoArea } from "./VideoArea";

export function FilterVideos() {
  return (
    <Section backgroundColor="primary">
      <div className="w-full max-w-7xl flex flex-col justify-center items-center">
        <Filter />
        <VideoArea />
      </div>
    </Section>
  );
}
