import { Link } from "react-router-dom";
import Header from "../Header";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  return (
    <footer
      className="fullHeight bg-blue flex flex-col justify-between"
      id="fullHeight"
    >
      <Header />
      <section className="flex md:flex-row flex-col gap-2 justify-around items-center">
        <section className="bg-white p-4">
          <h2 className="header text-red">{t("FooterHello")}</h2>
          <div className="p-2">
            <p className="normalText">amir.sahit@gmail.com</p>
          </div>
        </section>
        <section className="bg-white p-4">
          <h2 className="header text-red">{t("FooterForYou")}</h2>
          <div className="p-2 flex flex-col">
            <Link to="/work" className="normalText">
              {t("MyWork")}
            </Link>
            <Link to="/resume" className="normalText">
              {t("MyResume")}
            </Link>
          </div>
        </section>
      </section>
      <section className="bg-white flex flex-row justify-between items-end h-[15vh] p-5">
        <p>© Amir Sahit 2023</p>
        <section className="flex flex-row md:w-[5vw] gap-2 justify-between text-2xl">
          <a href="https://github.com/amirSahit">GH</a>
          <a href="https://www.linkedin.com/in/amir-sahit-a40a15281/">LN</a>
        </section>
      </section>
    </footer>
  );
}

export default Footer;
