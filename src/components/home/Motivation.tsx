import Header from "../Header";
import { useTranslation } from "react-i18next";
function Motivation() {
  const { t } = useTranslation();
  return (
    <section className="fullHeight bg-blue" id="fullHeight">
      <Header />
      <section className="flex flex-row justify-around items-center h-full">
        <article className="bg-white p-4 w-[50vw]">
          <h2 className="mediumHeader text-red">Motivation.</h2>
          <p className="normalText p-2">{t("MotivationText")}</p>
        </article>
        <img src="static/images/IMG-0511.jpg" className="borderHeadshot w-96" />
      </section>
    </section>
  );
}

export default Motivation;
