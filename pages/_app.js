import { AnimatePresence } from "framer-motion";
import Navbar from "../components/nav/navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }) {
  let calcScrollValue = () => {
    let progress = document.getElementById("progress");
    let pos = document.documentElement.scrollTop;

    let calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
      progress.style.bottom = "30px";
    } else {
      progress.style.bottom = "-80px";
      progress.style.transition = "0.6s";
    }

    progress.style.backgroundImage = `conic-gradient(#2dff546c ${scrollValue}%, #ff0e0e7e ${scrollValue}%)`;
  };

  if (typeof window !== "undefined") {
    window.onscroll = calcScrollValue;
    window.onload = calcScrollValue;
  }

  const customInlineCss = {
    height: "calc(100% - 15px)",
    width: "calc(100% - 15px)",
  };
  return (
    <main className={``}>
      <div className="lg:block hidden">
        <div
          onClick={() => (document.documentElement.scrollTop = 0)}
          id="progress"
          className={` rounded-full backdrop-blur-0 bg-white/5  active:-translate-y-2 cursor-pointer fixed grid right-5 place-items-center z-[2] h-[70px] w-[70px]`}
        >
          <span
            id="progress-value"
            style={customInlineCss}
            className="text-3xl bg-white rounded-full grid place-items-center text-[#ee5252]"
          >
            &#x1F815;
          </span>
        </div>
      </div>
      <div className="pt-3 lg:block hidden">
        <Navbar />
      </div>
      <AnimatePresence initial={false}>
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
    </main>
  );
}

export default MyApp;
