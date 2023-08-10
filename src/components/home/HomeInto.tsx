import Header from "../Header";
import HomeCardIntro from "./HomeCardIntro";

function HomeInto() {
  return (
    <section className="fullHeight bg-blue" id="fullHeight">
      <Header />
      <section>
        <div className="bg-blue md:w-3/4 flex md:flex-row md:justify-start gap-10 flex-col-reverse items-center relative h-[80vh] w-full">
          <HomeCardIntro />
          <img
            src="static/images/IMG-0510-headshot.JPG"
            className="borderHeadshot min-w-[300px] w-96 z-40 md:absolute md:right-[-11vw] md:mt-[18vh]"
          />
        </div>
        <section className="bg-lightRed w-1/4 md:absolute top-0 right-0 h-full z-0" />
      </section>
    </section>
  );
}

export default HomeInto;
