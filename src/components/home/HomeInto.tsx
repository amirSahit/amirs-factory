import Header from "../Header";
import HomeCardIntro from "./HomeCardIntro";

function HomeInto() {
  return (
    <section className="fullHeight bg-blue" id="fullHeight">
      <Header />
      <section>
        <div className="bg-blue w-3/4 flex flex-row items-center relative">
          <HomeCardIntro />
          <img
            src="static/images/IMG-0510-headshot.JPG"
            className="borderHeadshot w-96 z-40 absolute right-[-11vw] mt-[18vh]"
          />
        </div>
        <section className="bg-lightRed w-1/4 absolute top-0 right-0 h-full z-0" />
      </section>
    </section>
  );
}

export default HomeInto;
