import Header from "../Header";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";

function Motivation() {
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <section className="fullHeight bg-blue" id="fullHeight">
      <Header />
      {isMobile ? (
        <section className="flex flex-row md:justify-around md:items-center md:h-full relative">
          <article className="bg-white p-4 w-[50vw] min-w-[300px] ml-6">
            <h2 className="mediumHeader text-red">Motivation.</h2>
            <p className="normalText p-2">{t("MotivationText")}</p>
          </article>
          <img
            src="static/images/IMG-0511.jpg"
            className="borderHeadshot w-96 absolute bottom-[-7vh] right-[2vw]"
          />
        </section>
      ) : (
        <section className="flex flex-row md:justify-around md:items-center md:h-full">
          <article className="bg-white p-4 w-[50vw] min-w-[300px] ml-6">
            <h2 className="mediumHeader text-red">Motivation.</h2>
            <p className="normalText p-2">{t("MotivationText")}</p>
          </article>
          <img
            src="static/images/IMG-0511.jpg"
            className="borderHeadshot w-96"
          />
        </section>
      )}
    </section>
  );
}

export default Motivation;
