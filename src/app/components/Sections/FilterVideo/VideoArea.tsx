"use client";

import { useState } from "react";
import data from "../../../data/videos.json";
import { VideoCard } from "./VideoCard";
import { Pagination } from "./Pagination";
import { Line } from "../../Line";

interface VideoAreaProps {
  selectedCategory: number;
}

export function VideoArea({ selectedCategory }: VideoAreaProps) {
  const [currentPage, setCurrentPage] = useState(0);

  const { videos } = data;

  //Pegando os videos da categoria selecionada
  const filteredVideos = videos.filter((video) => {
    return video.type === selectedCategory;
  });

  const maxVideosPerPage = 9;
  const pages = filteredVideos.length / maxVideosPerPage;
  const startIndex = currentPage * maxVideosPerPage;
  const endIndex = startIndex + maxVideosPerPage;
  const currentVideos = filteredVideos.slice(startIndex, endIndex);

  return (
    <>
      <div className="grid grid-cols-1 gap-8 w-full mt-4 pb-12 sm:grid-cols-2 lg:grid-cols-3">
        {currentVideos.map((data, index) => {
          if (selectedCategory === data.type) {
            return (
              <VideoCard
                id={index}
                title={data.title}
                videoDescription={data.videoDescription}
              />
            );
          }
        })}
      </div>

      <Line space />

      <Pagination
        pageNumber={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
}
