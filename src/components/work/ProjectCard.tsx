import { Link } from "react-router-dom";

type ProjectCardProps = {
  title: string;
  specialTitleClass?: string;
  specialDescriptionClass?: string;
  description: string;
  link?: string;
  img?: string;
};

function ProjectCard({
  title,
  description,
  img,
  specialTitleClass,
  link,
}: ProjectCardProps) {
  return (
    <section className="flex flex-col gap-10 justify-between items-center border-4 p-4 bg-blue/10 min-w-[20vw] max-w-[25vw]">
      {img && <img src={img} alt={title} className="w-[20vw]" />}
      {!img && <h3 className={`${specialTitleClass}`}>{title}</h3>}
      <p className="header-thin text-center">{description}</p>
      {link && (
        <a href={`${link}`} className="border-4 px-4 py-2">
          See More
        </a>
      )}
      {!link && (
        <button disabled className="border-4 px-4 py-2">
          Coming Soon
        </button>
      )}
    </section>
  );
}

export default ProjectCard;
