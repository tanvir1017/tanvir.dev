import { Dialog, Transition } from "@headlessui/react";
import { Rocket } from "lucide-react";
import { Fragment, useState } from "react";
import toast from "react-hot-toast";
import { RiSendPlaneFill } from "react-icons/ri";
import { RxCrossCircled } from "react-icons/rx";
import useSWR from "swr";

export default function SayHelloDialog({ closeModal, openModal, isOpen }) {
  const { mutate: revalidate } = useSWR("/api/email");
  const { mutate } = useSWR("/api/email/send-to-me.js");
  const [data, setData] = useState({});

  const updateData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleGetFormValue = async (e) => {
    e.preventDefault();
    await mutate(async () => {
      const res = await fetch("/api/email/send-to-me", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok && !res?.status === 200)
        return toast.error("something went wrong when email sending to author");
      if (res.ok && res?.status === 200) {
        toast.success("Just receive your mail 👀");
      }
    });

    await revalidate(async () => {
      const res = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok && !res?.status === 200)
        return toast.error("something went wrong");
      if (res.ok && res?.status === 200) {
        toast.success("Now! Check your mail 📩");
        closeModal();
      }
    });
  };
  return (
    <>
      <div
        className="flex items-center md:justify-center border dark:border-gray-600 border-slate-300 p-5 rounded-md hover:bg-slate-50 dark:hover:bg-[#d1c9c908] cursor-pointer"
        onClick={openModal}
      >
        <span className="bg-gradient-to-tl to-[#08AEEA] from-[#2AF598] text-white  p-2 rounded-md box-shadows">
          <Rocket />
        </span>
        <h6 className="text-xl poppinsBold dark:text-white text-gray-700 ml-8">
          Directly Connect me
        </h6>
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
                  <div className="mt-2">
                    <form onSubmit={handleGetFormValue}>
                      <label className="block">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm medium text-slate-700">
                          Your name
                        </span>
                        <input
                          onChange={updateData}
                          name="name"
                          type="text"
                          required
                          placeholder="your awesome name"
                          className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-[#08AEEA] focus:ring-[#08AEEA] focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 text-black"
                        />
                      </label>
                      <label className="block my-2">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm medium text-slate-700">
                          Subject
                        </span>
                        <input
                          onChange={updateData}
                          name="subject"
                          type="text"
                          required
                          placeholder="Available for work?"
                          className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-[#08AEEA] focus:ring-[#08AEEA] focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 text-black"
                        />
                      </label>
                      <label className="block my-3">
                        <span className="block text-sm medium text-slate-700 after:content-['*'] after:text-red-500 after:ml-1">
                          Email
                        </span>
                        <input
                          onChange={updateData}
                          name="email"
                          type="email"
                          className="peer mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#2AF598] focus:ring-[#2AF598] block w-full rounded-md sm:text-sm focus:ring-1 text-black"
                          placeholder="developer.tanvirhossain@gmail.com"
                        />
                        <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                          Please provide a valid email address.
                        </p>
                      </label>{" "}
                      <label className="block">
                        <span className="block text-sm medium text-slate-700 after:content-['*'] after:text-red-500 after:ml-1">
                          Your Message
                        </span>
                        <textarea
                          onChange={updateData}
                          name="message"
                          type="text"
                          required
                          placeholder="Are you available right now?..."
                          className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#2AF598] focus:ring-[#2AF598] block w-full rounded-md sm:text-sm focus:ring-1 text-black"
                        />
                      </label>
                      <div className="mt-4 text-end">
                        <button
                          type="submit"
                          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        >
                          Send me <RiSendPlaneFill />
                        </button>
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
