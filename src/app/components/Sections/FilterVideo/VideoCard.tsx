import { IDataVideo } from "@/app/types/dataVideos";
import Image from "next/image";
import Thumbnail from "../../../assets/thumbnail.png";

export function VideoCard({ title, videoDescription }: IDataVideo) {
  return (
    <div className="flex flex-col shadow-lg rounded-xl overflow-hidden max-w-sm">
      <Image
        src={Thumbnail}
        alt={`Thumbnail do video sobre ${title}`}
        className="w-full"
      />
      <h2 className="py-4 px-6 text-default-color text-md text-left font-semibold sm:text-lg">
        {title}
      </h2>
    </div>
  );
}
