import { useTranslation } from "react-i18next";
import { HiArrowDownOnSquare } from "react-icons/hi2";
import Header from "../Header";
import Footer from "../home/Footer";

function Resume() {
  const resumeFileName = "Amir Sahit - Lebenslauf.pdf";
  const { t } = useTranslation();
  const listSoftwareProjects = [
    t("SoftWareProjectsDescriptionLi1"),
    t("SoftWareProjectsDescriptionLi2"),
    t("SoftWareProjectsDescriptionLi3"),
    t("SoftWareProjectsDescriptionLi4"),
    t("SoftWareProjectsDescriptionLi5"),
    t("SoftWareProjectsDescriptionLi6"),
    t("SoftWareProjectsDescriptionLi7"),
  ];

  const listNextbike = [
    t("NextbikeDescriptionLi1"),
    t("NextbikeDescriptionLi2"),
    t("NextbikeDescriptionLi3"),
  ];

  const listFunke = [
    t("FunkeDescriptionLi1"),
    t("FunkeDescriptionLi2"),
    t("FunkeDescriptionLi3"),
    t("FunkeDescriptionLi4"),
    t("FunkeDescriptionLi5"),
    t("FunkeDescriptionLi6"),
  ];

  const listSummary = [t("SummaryLi1"), t("SummaryLi2"), t("SummaryLi3")];

  return (
    <section className="flex flex-col gap-10">
      <Header />
      <article className="flex flex-col p-4 w-[90vw] redShadow place-self-center regularText gap-5 relative">
        <a
          href={`/${resumeFileName}`}
          download
          className="text-bold place-self-end flex flex-col items-center p-4 bg-white absolute top-0 -right-12 gap-2"
        >
          <HiArrowDownOnSquare className="w-[5vw] h-[5vh] text-red" />
          <p>Download Resume</p>
        </a>
        <div className="flex flex-row justify-between items-start gap-5">
          <div>
            <h2 className="largeHeader text-red text-start">Amir Sahit.</h2>
            <h3 className="header">{t("HeaderIntro")}</h3>
            <section className="flex flex-col gap-4 mt-5">
              <h4 className="mediumResumeHeader-thin text-red">
                {t("ResumeSubtitle1")}
              </h4>
              <p className="normalText-Bold">Cinema App | Consensus App</p>
              <p className="normalText">{t("SoftWareProjectsDescription")}</p>
              <ul className="normalText pl-10 resumeList">
                {listSoftwareProjects.map((li, idx) => (
                  <li key={idx}>{li}</li>
                ))}
              </ul>
            </section>
          </div>
          <div className="flex flex-col gap-5">
            <img src="static/images/IMG-0512.JPG" className="w-[25vw]" />
            <section>
              <h4 className="mediumResumeHeader-thin text-red">TechStack</h4>
              <ul className="normalText pl-10 p-3 resumeList redShadow">
                <li>React & Next.js 13</li>
                <li>JavaScript & TypeScript</li>
                <li>PostgreSQL</li>
                <li>Prisma</li>
              </ul>
            </section>
          </div>
        </div>
        <section className="normalText flex flex-col gap-4 ">
          <h3 className="mediumResumeHeader-thin text-red">
            {t("ResumeSubtitle2")}
          </h3>
          <h4 className="normalText-Bold">
            Coding Bootcamp | Devhaus • Leipzig • Jan - Jul 2023
          </h4>
          <p className="pl-5">{t("BootCampDescription")}</p>
          <h4 className="normalText-Bold">
            Bachelor of Arts | Environmental Studies | San Francisco State
            University • San Francisco • 2013 - 2017
          </h4>
          <h4 className="normalText-Bold"></h4>
        </section>
        <section className="normalText flex flex-col gap-4">
          <h3 className="mediumResumeHeader-thin text-red">
            {t("ResumeSubtitle3")}
          </h3>
          <h4 className="normalText-Bold">
            Nextbike by Tier | Tier Mobility SE • Leipzig • May 2020 - Oct 2022
          </h4>
          <p>Callcenter Agent</p>
          <p>{t("NextbikeDescription")}</p>
          <ul className="normalText pl-10 resumeList">
            {listNextbike.map((li, idx) => (
              <li key={idx}>{li}</li>
            ))}
          </ul>
          <h4 className="normalText-Bold">
            Funke Medien Service GmbH (Germany) • Erfurt • Apr 2019 - Mar 2020
          </h4>
          <p>{t("FunkeDescription")}</p>
          <ul className="normalText pl-10 resumeList">
            {listFunke.map((li, idx) => (
              <li key={idx}>{li}</li>
            ))}
          </ul>
          <section>
            <h4 className="normalText-Bold">Summary 2013-2019</h4>
            <ul className="normalText pl-10 resumeList">
              {listSummary.map((li, idx) => (
                <li key={idx}>{li}</li>
              ))}
            </ul>
          </section>
        </section>
      </article>
      <Footer />
    </section>
  );
}

export default Resume;
