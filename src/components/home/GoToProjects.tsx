import { Link } from "react-router-dom";
import Header from "../Header";
import { useTranslation } from "react-i18next";

function GoToProjects() {
  const { t } = useTranslation();
  return (
    <section className="fullHeight flex flex-col" id="fullHeight">
      <Header />
      <section className="flex flex-row justify-around items-center mt-[15vh]">
        <article className="bg-lightRed p-4 w-[75vw] flex flex-col gap-[4vh]">
          <h2 className="largeHeader text-black">Work.</h2>
          <h2 className="largeHeader text-black">Build & Design.</h2>
          <h2 className="largeHeader text-black">TypeScript & React.</h2>
          <Link
            to="/work"
            className="bg-white border-4 border-black w-[15vw] min-w-[100px] place-self-center px-15 py-5 text-center md:text-2xl text-xl font-bold"
          >
            {t("GoToProjects")}
          </Link>
        </article>
      </section>
    </section>
  );
}

export default GoToProjects;
