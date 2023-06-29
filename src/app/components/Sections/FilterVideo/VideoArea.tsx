import data from "../../../data/videos.json";
import { VideoCard } from "./VideoCard";

interface VideoAreaProps {
  selectedCategory:
    | "agencia"
    | "chatbot"
    | "marketing"
    | "geracaoDeLeads"
    | "midiaPaga";
}

export function VideoArea({ selectedCategory }: VideoAreaProps) {
  const { videos } = data;

  return (
    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
      {videos.map(({ title, videoDescription, category }) => {
        if (selectedCategory === category) {
          return (
            <VideoCard title={title} videoDescription={videoDescription} />
          );
        }
      })}
    </div>
  );
}
