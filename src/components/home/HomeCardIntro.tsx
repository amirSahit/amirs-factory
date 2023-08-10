import { useTranslation } from "react-i18next";

function HomeCardIntro() {
  const { t } = useTranslation();
  return (
    <div className="bg-white p-4 md:max-w-[40vw] md:w-[50vw] md:mt-[18vh] md:ml-[6vw] flex flex-col gap-10 text-xl">
      <h2 className="mediumHeader text-red">{t("HeaderIntro")}</h2>
      <p className="md:normalText-Bold normalText">{t("IntroCard")}</p>
    </div>
  );
}

export default HomeCardIntro;
