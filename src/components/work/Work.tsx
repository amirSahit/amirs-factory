import Header from "../Header";
import { useTranslation } from "react-i18next";
import ProjectCard from "./ProjectCard";

function Work() {
  const { t } = useTranslation();
  return (
    <section>
      <Header />
      <h2 className="largeHeader text-red text-center">Work.</h2>
      <section>
        <h3 className="header">{t("WorkSubtitle1")}</h3>
        <section className="flex flex-col items-center gap-5 p-5">
          <ProjectCard
            title="ASJ-Sheet Metal Fabrication"
            description="Freelance Work. ASJ is a small comapny located in the US. I was hired to build their website to represent them online. I kept the design simple and clean to reflect the company's values."
            img="static/images/screencapture-asjsheetmetalfabrication-2023-08-10-13_07_13.png"
            github="https://github.com/amirSahit/asj-factory"
            link="https://asjsheetmetalfabrication.com/"
          />
          <ProjectCard
            title="amrs"
            img="static/images/screencapture-localhost-5173-2023-08-10-13_48_37.png"
            description="Personal Website. I built this website to showcase my work and projects. I used React and TailwindCSS to build this website. I also used i18n to make it multilingual."
            github="https://github.com/amirSahit/amirs-factory"
            link="https://amrs-factory.vercel.app/"
            reversed
          />
        </section>
      </section>
    </section>
  );
}

export default Work;
