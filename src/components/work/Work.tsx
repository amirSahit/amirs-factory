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
        <section className="flex flex-row gap-5 p-5">
          <ProjectCard
            title="ASJ-SheetMetalFabrication"
            description="Freelance Work"
            img="static/images/Logo_ASJ_2018.jpg"
            link="https://asjsheetmetalfabrication.com/"
          />
          <ProjectCard
            title="amrs"
            specialTitleClass="text-[5vw]"
            description="Personal Website"
            link="https://amrs-factory.vercel.app/"
          />
        </section>
      </section>
      <section>
        <h3 className="header">{t("WorkSubtitle2")}</h3>
        <section className="flex flex-row gap-5 p-5">
          <ProjectCard
            title="d'accord"
            description="Poll WebApp"
            specialTitleClass="pollAppLogo"
          />
          <ProjectCard
            title="CineWebApp"
            description="Cinema Booking WebApp"
            specialTitleClass="header"
            link="https://camp9-midterm-frontend.vercel.app"
          />
        </section>
      </section>
    </section>
  );
}

export default Work;
