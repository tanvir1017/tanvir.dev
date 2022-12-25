import { motion as m } from "framer-motion";
import { TiLocationArrowOutline } from "react-icons/ti";

function Toptop() {
  let calcScrollValue = () => {
    let progress = document.getElementById("progress");

    let pos = document.documentElement.scrollTop || 0;

    let calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    let scrollValue = Math.round((pos * 100) / calcHeight);

    if (pos > 100) {
      progress.style.bottom = "30px";
    } else if (!pos) {
      progress.style.bottom = "-180px";
      progress.style.transition = "0.6s";
    }
    progress.style.backgroundImage = `conic-gradient(#ff008c ${scrollValue}%, #d5067891 ${scrollValue}%)`;
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
    <m.div
      initial="initial"
      animate="visible"
      variants={{
        initial: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 }, delay: 5 },
      }}
      onClick={() => (document.documentElement.scrollTop = 0)}
      id="progress"
      className={` rounded-full backdrop-blur-0 bg-white/5  active:-translate-y-2 cursor-pointer right-5 fixed grid place-items-center z-[2] h-[70px] w-[70px]`}
    >
      <m.span
        id="progress-value"
        style={customInlineCss}
        className="text-3xl -rotate-45 bg-white/5 backdrop:filter[15px] rounded-full grid place-items-center text-[#fff]"
      >
        <TiLocationArrowOutline />
      </m.span>
    </m.div>
  );
}

export default Toptop;