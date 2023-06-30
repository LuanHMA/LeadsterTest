"use client";

import { Tab } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Line } from "../../Line";
import { VideoArea } from "./video/VideoArea";

export function Filter() {
  const [selected, setSelected] = useState(true);
  const [category, setCategory] = useState([
    "Agências",
    "Chatbox",
    "Marketing Digital",
    "Geração de Leads",
    "Mídia Paga",
  ]);

  return (
    <Tab.Group>
      <Tab.List className="flex items-center justify-between flex-wrap gap-3 w-full ">
        <div className="flex items-center gap-3 flex-wrap">
          {category.map((title, index) => {
            return (
              <Tab
                className="text-sm text-default-color font-semibold py-2 px-6 rounded-3xl border border-default-color hover:border-blue-border hover:text-blue-border ui-selected:bg-blue-button ui-selected:text-white ui-selected:border-blue-border"
                key={index}
                data-headlessui-state={selected}
                onClick={() => setSelected(true)}
              >
                {title}
              </Tab>
            );
          })}
        </div>

        <div className="flex items-center gap-x-2">
          <span className="text-sm font-semibold text-default-color">
            Ordenar por
          </span>
          <select className="text-sm text-default-color font-medium border border-default-color  rounded-xl p-2 bg-transparent">
            <option>Data de Publicação</option>
            <option>Ordem alfabética A-Z</option>
            <option>Mais recente</option>
          </select>
        </div>
      </Tab.List>

      <Line space />

      <Tab.Panels className="w-full">
        <Tab.Panel>
          <VideoArea selectedCategory={0} />
        </Tab.Panel>
        <Tab.Panel>
          <VideoArea selectedCategory={1} />
        </Tab.Panel>
        <Tab.Panel>
          <VideoArea selectedCategory={2} />
        </Tab.Panel>
        <Tab.Panel>
          <VideoArea selectedCategory={3} />
        </Tab.Panel>
        <Tab.Panel>
          <VideoArea selectedCategory={4} />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}
