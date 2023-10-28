const ProjectHeading = () => {
  return (
    <section className="md:container relative md:h-screen flex px-3 mt-10">
      <div className="m-auto">
        <h2 className="stroke-text-light dark:stroke-text-dark  md:text-9xl text-5xl uppercase font-HubotSansBlack tracking-wider opacity-10 text-[#0605051a]">
          Among my
        </h2>
        <h2 className="text-center stroke-text-light dark:stroke-text-dark  md:text-9xl text-5xl uppercase font-HubotSansBlack tracking-wider text-[#0605051a]">
          <span className="stroke-text-light-gradient opacity-100">
            creations
          </span>
          <br className="md:hidden block" />

          <span className="opacity-10 md:inline-block hidden">are</span>
          <span className="opacity-10 md:hidden block">are the</span>
        </h2>
        <h2 className="grid justify-items-end  stroke-text-light dark:stroke-text-dark  md:text-9xl text-5xl uppercase font-HubotSansBlack tracking-wider opacity-10 text-[#0605051a]">
          <span className="md:inline-flex hidden">
            the <span className="ml-7"> following</span>
          </span>
          <span className="md:hidden inline-flex"> following</span>
        </h2>
      </div>
    </section>
  );
};

export default ProjectHeading;
