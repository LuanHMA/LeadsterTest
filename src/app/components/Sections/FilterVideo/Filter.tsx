"use client";

import { Tab } from "@headlessui/react";
import { useState } from "react";
import { Line } from "../../Line";
import { VideoArea } from "./VideoArea";

export function Filter() {
  const [selected, setSelected] = useState(0);

  return (
    <Tab.Group>
      <Tab.List className="flex items-center justify-between flex-wrap gap-3 w-full">
        <div className="flex items-center gap-3 flex-wrap">
          <Tab className="text-sm text-default-color font-semibold py-2 px-6 rounded-3xl border border-default-color hover:border-blue-border hover:text-blue-border">
            Agências
          </Tab>
          <Tab className="text-sm text-default-color font-semibold py-2 px-6 rounded-3xl border border-default-color hover:border-blue-border hover:text-blue-border">
            Chatbot
          </Tab>
          <Tab className="text-sm text-default-color font-semibold py-2 px-6 rounded-3xl border border-default-color hover:border-blue-border hover:text-blue-border">
            Marketing Digital
          </Tab>
          <Tab className="text-sm text-default-color font-semibold py-2 px-6 rounded-3xl border border-default-color hover:border-blue-border hover:text-blue-border">
            Geração de Leads
          </Tab>
          <Tab className="text-sm text-default-color font-semibold py-2 px-6 rounded-3xl border border-default-color hover:border-blue-border hover:text-blue-border">
            Mídia Paga
          </Tab>
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

      <Tab.Panels>
        <Tab.Panel>
          <VideoArea selectedCategory="agencia" />
        </Tab.Panel>
        <Tab.Panel>
          <VideoArea selectedCategory="chatbot" />
        </Tab.Panel>
        <Tab.Panel>
          <VideoArea selectedCategory="marketing" />
        </Tab.Panel>
        <Tab.Panel>
          <VideoArea selectedCategory="geracaoDeLeads" />
        </Tab.Panel>
        <Tab.Panel>
          <VideoArea selectedCategory="midiaPaga" />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}
