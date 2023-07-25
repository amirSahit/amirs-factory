import { useTranslation } from "react-i18next";

function HomeCardIntro() {
  const { t } = useTranslation();
  return (
    <div className="bg-white p-4 w-[50vw] ml-[8vw] mt-[18vh] flex flex-col gap-10 text-xl">
      <h2 className="mediumHeader text-red">{t("HeaderIntro")}</h2>
      <p className="normalText-Bold">{t("IntroCard")}</p>
    </div>
  );
}

export default HomeCardIntro;
