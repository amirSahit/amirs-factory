import { GoTab, GoBug } from "react-icons/go";
import { clsx } from "clsx";

type ProjectCardProps = {
  title: string;
  description: string;
  reversed?: boolean;
  github?: string;
  link?: string;
  img?: string;
};

function ProjectCard({
  title,
  description,
  img,
  link,
  github,
  reversed,
}: ProjectCardProps) {
  return (
    // <section className="flex flex-col gap-10 justify-between items-center border-4 p-4 bg-blue/10 w-[300px]">
    //   {img && <img src={img} alt={title} className="w-[20vw]" />}
    //   {!img && <h3 className={`${specialTitleClass}`}>{title}</h3>}
    //   <p className="header-thin text-center">{description}</p>
    //   {link && (
    //     <a href={`${link}`} className="border-4 px-4 py-2">
    //       See More
    //     </a>
    //   )}
    //   {!link && (
    //     <button disabled className="border-4 px-4 py-2">
    //       Coming Soon
    //     </button>
    //   )}
    // </section>
    <section
      className={clsx(
        "flex gap-5 max-w-[800px] p-4",
        reversed ? "lg:flex-row-reversed redShadow" : "lg:flex-row blueShadow"
      )}
    >
      <div
        className={clsx(
          "overflow-hidden h-[40vh] w-[500px] border-4",
          reversed ? "border-red" : " border-blue"
        )}
      >
        <img
          src={img}
          alt={title}
          className="transform hover:translate-y-[-65%] ease-out duration-[10000ms] w-[500px] object-fit p-2"
        />
      </div>
      <div className="flex flex-col gap-5 max-w-[300px] justify-between">
        <h3 className="normalText text-center">{title}</h3>
        <p className="smallText">{description}</p>
        <div className="flex flex-row gap-4 justify-between">
          <a
            href={`${github}`}
            className="px-4 py-2 flex flex-row items-center gap-2 smallText"
          >
            <p>Code</p>
            <GoBug />
          </a>
          <a
            href={`${link}`}
            className="px-4 py-2 flex flex-row items-center gap-2"
          >
            <p>See More</p>
            <GoTab size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectCard;
