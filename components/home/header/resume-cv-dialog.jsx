import { Dialog, Transition } from "@headlessui/react";
import { Rocket } from "lucide-react";
import { Fragment, useState } from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import { RxCrossCircled } from "react-icons/rx";

export default function ResumeOrCv({ closeModal, openModal, isOpen }) {
  return (
    <>
      <div
        className="flex items-center md:justify-center cursor-pointer"
        onClick={openModal}
      >
        <button className="border bg-black dark:bg-slate-50 dark:hover:bg-slate-200 rounded-md md:py-2.5 py-2 md:px-5 px-2 dark:text-black text-white  uppercase tracking-wider z-30 relative text-sm md:text-base">
          Get my resume
          {/* <a
            href="https://drive.google.com/file/d/1kFNHhnbpWtBVQTTyCuSiqJhygGNBgBGH/view?usp=share_link"
            target="_blank"
            rel="noopener noreferrer"
          ></a> */}
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg medium leading-6 text-gray-900 flex items-center justify-between"
                  >
                    Let's work together 🙆‍♂️{" "}
                    <button
                      onClick={closeModal}
                      className="py-1.5 px-3 bg-red-100 text-red-800 rounded-md "
                    >
                      <RxCrossCircled />{" "}
                    </button>
                  </Dialog.Title>
                  <div>helo</div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
