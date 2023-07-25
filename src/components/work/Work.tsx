import Header from "../Header";
import { useTranslation } from "react-i18next";

function Work() {
  const { t } = useTranslation();
  return (
    <section>
      <Header />
      <h2 className="largeHeader text-red text-center">Work.</h2>
      <section>
        <h3 className="header">{t("WorkSubtitle1")}</h3>
        <section className="flex flex-row gap-5 p-5">
          <div className="bg-blue w-[25vh] h-[35vh]"></div>
          <div className="bg-blue w-[25vh] h-[35vh]"></div>
          <div className="bg-blue w-[25vh] h-[35vh]"></div>
        </section>
      </section>
      <section>
        <h3 className="header">{t("WorkSubtitle2")}</h3>
        <section className="flex flex-row gap-5 p-5">
          <div className="bg-blue w-[25vh] h-[35vh]"></div>
          <div className="bg-blue w-[25vh] h-[35vh]"></div>
          <div className="bg-blue w-[25vh] h-[35vh]"></div>
        </section>
      </section>
    </section>
  );
}

export default Work;
