const ProjectHeading = () => {
  return (
    <section className="container relative h-screen flex">
      <div className="m-auto">
        <h2 className="stroke-text-light dark:stroke-text-dark  md:text-9xl text-2xl uppercase font-poppinsBlackItalic tracking-wider opacity-10 text-[#0605051a]">
          Among my
        </h2>
        <h2 className="text-center stroke-text-light dark:stroke-text-dark  md:text-9xl text-2xl uppercase font-poppinsBlackItalic tracking-wider text-[#0605051a]">
          <span className="stroke-text-light-gradient opacity-100">
            creations
          </span>
          <span className="opacity-10">are</span>
        </h2>
        <h2 className="grid justify-items-end  stroke-text-light dark:stroke-text-dark  md:text-9xl text-2xl uppercase font-poppinsBlackItalic tracking-wider opacity-10 text-[#0605051a]">
          the following
        </h2>
      </div>
    </section>
  );
};

export default ProjectHeading;
