import Style from "@/styles/Home.module.css";
function SunRise() {
  return (
    <div className={`${Style.boxWrapper} p-5`}>
      <div className={`${Style.box}`}></div>
      <div className={`${Style.boxOverly}`}></div>
    </div>
  );
}

export default SunRise;
