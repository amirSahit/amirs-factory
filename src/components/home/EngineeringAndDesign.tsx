import Header from "../Header";
import { useTranslation } from "react-i18next";

function EngineeringAndDesign() {
  const { t } = useTranslation();
  return (
    <section className="fullHeight" id="fullHeight">
      <Header />
      <article className="flex flex-col gap-[2vh] p-10">
        <div className="flex justify-end">
          <section className="w-[60vw] blueShadow p-2">
            <h3 className="header text-blue">{t("Design")}</h3>
            <p className="normalText p-2">{t("DesignText")}</p>
          </section>
        </div>
        <div className="flex justify-start">
          <section className="w-[60vw] redShadow p-2">
            <h3 className="header text-red">{t("Engineering")}</h3>
            <p className="normalText p-2">{t("EngineeringText")}</p>
          </section>
        </div>
      </article>
    </section>
  );
}

export default EngineeringAndDesign;
