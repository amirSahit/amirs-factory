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
      <section className="flex flex-row justify-around items-center">
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
              My Work
            </Link>
            <Link to="/resume" className="normalText">
              My Resumé
            </Link>
          </div>
        </section>
      </section>
      <section className="bg-white flex flex-row justify-between items-end h-[15vh] p-5">
        <p>© Amir Sahit 2023</p>
        <section className="flex flex-row w-[5vw] justify-between text-2xl">
          <p>GH</p>
          <p>LN</p>
        </section>
      </section>
    </footer>
  );
}

export default Footer;
