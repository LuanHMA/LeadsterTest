"use client";

import { Tab } from "@headlessui/react";
import { useState } from "react";
import { VideoArea } from "./VideoArea";

const textButton = [
  { title: "Agências", id: 0 },
  { title: "Chatbot", id: 1 },
  { title: "Marketing Digital", id: 2 },
  { title: "Geração de Leads", id: 3 },
  { title: "Mída paga", id: 4 },
];

export function Filter() {
  const [selected, setSelected] = useState(0);

  return (
    <Tab.Group>
      <Tab.List>
        <Tab>Agências</Tab>
        <Tab>Chatbot</Tab>
        <Tab>Marketing Digital</Tab>
        <Tab>Geração de Leads</Tab>
        <Tab>Mídia Paga</Tab>
      </Tab.List>

      <Tab.Panels>
        <Tab.Panel>
          <VideoArea selectedContent={0} />
        </Tab.Panel>
        <Tab.Panel>
          <VideoArea selectedContent={1} />
        </Tab.Panel>
        <Tab.Panel>
          <VideoArea selectedContent={2} />
        </Tab.Panel>
        <Tab.Panel>
          <VideoArea selectedContent={3} />
        </Tab.Panel>
        <Tab.Panel>
          <VideoArea selectedContent={4} />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}
