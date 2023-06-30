"use client";

import { IDataVideo } from "@/app/types/dataVideos";
import Image from "next/image";
import Thumbnail from "../../../assets/thumbnail.png";
import { FaPlay } from "react-icons/fa";

export function VideoCard({ title, videoDescription, id }: IDataVideo) {
  return (
    <div className="flex flex-col shadow-lg rounded-xl overflow-hidden max-w-sm cursor-pointer group">
      <div className="relative">
        <Image
          src={Thumbnail}
          alt={`Thumbnail do video sobre ${title}`}
          className="w-full z-10"
        />
        <div className=" bg-blue opacity-0 group-hover:opacity-40 absolute h-full inset-0 z-20 transition-all"></div>
        <FaPlay className="opacity-0 group-hover:opacity-100 text-white text-7xl absolute right-1/2 top-1/2 translate-x-1/2 -translate-y-1/2 z-30 transition-all" />
      </div>

      <h2 className="py-4 px-6 text-default-color text-md text-left font-semibold transition-all  group-hover:text-blue group-hover:font-bold sm:text-lg">
        {title}
      </h2>
    </div>
  );
}
