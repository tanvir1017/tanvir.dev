import { motion as m } from "framer-motion";
import Image from "next/image";

export default function ProjectItem({ project: p, expander }) {
  return (
    <li className={`card cursor-pointer`}>
      <div className="card-content-container">
        <m.div
          className="card-content"
          layoutId={`${p.id}`}
          onClick={() => expander(p.id)}
        >
          <m.div
            className="card-image-container"
            layoutId={`card-image-container-${p.id}`}
          >
            <Image
              className="card-image max-w-full"
              src={`/projects/${p.id}.webp`}
              width={800}
              height={100}
              alt={p.title}
            />
          </m.div>
          <m.div
            className="title-container"
            layoutId={`title-container-${p.id}`}
          >
            <h4>{p.title}</h4>
          </m.div>
        </m.div>
      </div>
    </li>
  );
}
