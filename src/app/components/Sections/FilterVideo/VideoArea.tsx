"use client";

import { useState } from "react";
import data from "../../../data/videos.json";
import { VideoCard } from "./VideoCard";

interface VideoAreaProps {
  selectedCategory: number;
  // selectedCategory:
  //   | "agencia"
  //   | "chatbot"
  //   | "marketing"
  //   | "geracaoDeLeads"
  //   | "midiaPaga";
}

export function VideoArea({ selectedCategory }: VideoAreaProps) {
  const { videos } = data;
  const [videosPerPage, setVidesPerPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(selectedCategory);

  const pages = videos.length / videosPerPage;
  const startIndex = currentPage * videosPerPage;
  const endIndex = startIndex + videosPerPage;
  const currentVideos = videos.slice(startIndex, endIndex);
  console.log(currentVideos);

  return (
    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
      {currentVideos.map(({ title, videoDescription, category, type }) => {
        if (selectedCategory === type) {
          return (
            <VideoCard title={title} videoDescription={videoDescription} />
          );
        }
      })}
    </div>
  );
}
