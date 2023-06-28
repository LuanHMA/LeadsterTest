import Image from "next/image";
import data from "../../../data/videos.json";

interface VideoAreaProps {
  selectedContent: number;
}

export function VideoArea({ selectedContent }: VideoAreaProps) {
  const { videos } = data;

  return (
    <div>
      <h1>Video area</h1>
      {videos.map(({ id, thumbnail, title }) => {
        if (selectedContent === id) {
          return (
            <div>
              <Image src={thumbnail} alt="test" width={40} height={40} />
              {title}
            </div>
          );
        }
      })}
    </div>
  );
}
