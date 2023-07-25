import { useTranslation } from "react-i18next";

import Header from "../Header";
import Footer from "../home/Footer";
import { HiArrowDownOnSquare } from "react-icons/hi2";

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
  return (
    <section className="flex flex-col gap-10">
      <Header />
      <a
        href={`/${resumeFileName}`}
        download
        className="text-bold place-self-end flex flex-col items-center p-4"
      >
        <HiArrowDownOnSquare className="w-[5vw] h-[5vh] text-red" />
        <p>Download Resume</p>
      </a>
      <article className="flex flex-col p-4 w-[90vw] redShadow place-self-center regularText gap-5">
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
            <li>
              Effectively identifying and addressing customer issues and
              concerns related to bike-sharing services
            </li>
            <li>
              Ability to analyze problems, gather relevant information, and
              provide prompt and suitable solutions
            </li>
            <li>
              Demonstrate critical thinking and resourcefulness in finding
              resolutions, ensuring customer satisfaction and enhancing the
              overall experience with the services.
            </li>
          </ul>
          <h4 className="normalText-Bold">
            Funke Medien Service GmbH (Germany) • Erfurt • Apr 2019 - Mar 2020
          </h4>
          <p>
            The prominent media company based in Germany is known for its
            diverse portfolio of newspapers, magazines, radio stations, and
            digital media offerings.
          </p>
          <ul className="normalText pl-10 resumeList">
            <li>
              Communication: This includes being able to actively listen to
              others, express ideas and information clearly and effectively, and
              adapt communication style to different audiences and situations.
            </li>
            <li>
              Interpersonal Skills: Building positive relationships and working
              effectively with colleagues, clients, and stakeholders is crucial.
            </li>
            <li>
              Adaptability: The ability to adapt to new tasks, responsibilities,
              and changing circumstances is essential in a dynamic and evolving
              field like HR.
            </li>
            <li>
              Problem-solving: This involves analyzing situations, gathering
              relevant information, and developing practical solutions.
            </li>
            <li>
              Organizational Skills: Strong organizational skills are crucial
              for managing multiple tasks, deadlines, and priorities
              effectively.
            </li>
            <li>
              Confidentiality and Ethics: HR deals with sensitive employee
              information and confidential matters. Demonstrating a high level
              of confidentiality and ethical behavior is essential.
            </li>
          </ul>
          <section>
            <h4 className="normalText-Bold">Summary 2013-2019</h4>
            <ul className="normalText pl-10 resumeList">
              <li>Waiter at Brauhaus Zum Alten Dessauer (Dessau - Roßlau)</li>
              <li>
                Director of the Environmental Center an der State University of
                San Francisco
              </li>
              <li>Sales at Abercrombie Kids (Sacramento, CA)</li>
              <li>Barista at Illy Inc. (San Francisco, CA)</li>
            </ul>
          </section>
        </section>
      </article>
      <Footer />
    </section>
  );
}

export default Resume;
