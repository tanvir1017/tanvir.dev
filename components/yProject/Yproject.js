import Image from "next/image";
import React from "react";

function Yproject({ project }) {
  return (
    <div className="bg-white text-black rounded-lg p-3 grid place-items-center">
      <Image
        src={`/projects/${project.id}.webp`}
        width={300}
        height={100}
        alt={project.title}
      />
      <div>
        <h4>{project.title}</h4>
      </div>
    </div>
  );
}

export default Yproject;
