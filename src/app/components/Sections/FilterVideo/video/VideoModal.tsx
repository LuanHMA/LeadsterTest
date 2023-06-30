import { DialogContainer } from "@/app/components/HeadlessUi/DialogContainer";
import { Line } from "@/app/components/Line";
import { IDataVideo } from "@/app/types/dataVideos";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { SlCloudDownload } from "react-icons/sl";
import { GrClose } from "react-icons/gr";

interface VideoModalProps extends IDataVideo {
  isOpen: boolean;
  closeModal: () => void;
}

export function VideoModal({
  closeModal,
  isOpen,
  videoDescription,
  title,
}: VideoModalProps) {
  const downloadsLink = [
    {
      filename: "Spreadsheet.xls",
      cloudBg: "#9FEFDF",
      bgColor: "#C2F4EA",
      textColor: "#00AE7F",
    },
    {
      filename: "Document.doc",
      cloudBg: "#A1D9FF",
      bgColor: "#C2E6FF",
      textColor: "#008EF0",
    },
    {
      filename: "Presentation.ppt",
      cloudBg: "#FFF1A0",
      bgColor: "#FFF8D0",
      textColor: "#B09C53",
    },
  ];

  return (
    <DialogContainer closeModal={closeModal} isOpen={isOpen}>
      <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all relative">
        <button className="absolute top-4 right-4" onClick={closeModal}>
          <GrClose size={14} />
        </button>
        <Dialog.Title
          as="h2"
          className="text-lg text-center font-medium leading-6 text-gray-900 p-8"
        >
          <span className="text-blue font-bold">Webinar:</span>
          {title}
        </Dialog.Title>

        <iframe
          src="https://www.youtube-nocookie.com/embed/Xfpr9JYX78A"
          title="YouTube video player"
          height={300}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full"
        ></iframe>

        <div className="space-y-4 p-6 pt-4">
          <div className="space-y-2">
            <h2 className="text-default-color font-semibold text-md">
              Descrição
            </h2>
            <Line />
            <p className="text-sm font-base text-default-color sm:text-md">
              {videoDescription}
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-default-color font-semibold text-md">
              Downloads
            </h2>
            <Line />
            <div className="flex items-center gap-2 flex-wrap">
              {downloadsLink.map(
                ({ bgColor, cloudBg, filename, textColor }) => {
                  return (
                    <button
                      className={`rounded-lg text-sm font-semibold flex items-center gap-x-2 pr-2`}
                      style={{
                        color: textColor,
                        backgroundColor: bgColor,
                      }}
                    >
                      <span
                        className={`rounded-l-lg rounded-r-none text-xl p-2`}
                        style={{
                          backgroundColor: cloudBg,
                          color: textColor,
                        }}
                      >
                        <SlCloudDownload />
                      </span>
                      {filename}
                    </button>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </DialogContainer>
  );
}
