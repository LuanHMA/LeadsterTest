import { Line } from "@/app/components/Line";
import { IDataVideo } from "@/app/types/dataVideos";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { SlCloudDownload } from "react-icons/sl";

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
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-90" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
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
                    <div className="flex items-center gap-x-2">
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
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
