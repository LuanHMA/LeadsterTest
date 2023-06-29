"use client";

import { useState } from "react";
import data from "../../../data/videos.json";
import { VideoCard } from "./VideoCard";
import { Pagination } from "./Pagination";

interface VideoAreaProps {
  selectedCategory: number;
}

export function VideoArea({ selectedCategory }: VideoAreaProps) {
  const [videosPerPage, setVideosPerPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(0);

  const { videos } = data;

  const filteredVideos = videos.filter((video) => {
    return video.type === selectedCategory;
  });

  const pages = filteredVideos.length / videosPerPage;
  const startIndex = currentPage * videosPerPage;
  const endIndex = startIndex + videosPerPage;
  const currentVideos = filteredVideos.slice(startIndex, endIndex);

  return (
    <div>
      <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
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

      <Pagination pageNumber={pages} setCurrentPage={setCurrentPage} />
    </div>
  );
}
