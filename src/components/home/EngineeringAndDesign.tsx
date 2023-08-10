import Header from "../Header";
import { useTranslation } from "react-i18next";

function EngineeringAndDesign() {
  const { t } = useTranslation();
  return (
    <section className="fullHeight" id="fullHeight">
      <Header />
      <article className="flex flex-col justify-between p-10 h-[80vh] ">
        <section className="w-[60vw] min-w-[300px] blueShadow p-2 place-self-end">
          <h3 className="header text-blue">{t("Design")}</h3>
          <p className="normalText p-2">{t("DesignText")}</p>
        </section>
        <section className="w-[60vw] min-w-[300px]  redShadow p-2">
          <h3 className="header text-red">{t("Engineering")}</h3>
          <p className="normalText p-2">{t("EngineeringText")}</p>
        </section>
      </article>
    </section>
  );
}

export default EngineeringAndDesign;
