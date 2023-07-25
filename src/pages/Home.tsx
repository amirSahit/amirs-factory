import { useRef } from "react";
import EngineeringAndDesign from "../components/home/EngineeringAndDesign";
import Footer from "../components/home/Footer";
import GoToProjects from "../components/home/GoToProjects";
import HomeInto from "../components/home/HomeInto";
import Motivation from "../components/home/Motivation";
import { Element, scroller } from "react-scroll";

function Home() {
  const sectionNames = [
    "HomeInto",
    "EngineeringAndDesign",
    "Motivation",
    "GoToProjects",
    "Footer",
  ];

  const prevScrollPositionRef = useRef(0);

  function handleScroll() {
    const scrollPosition = window.scrollY;
    if (scrollPosition / window.innerHeight < 0.4) {
      scroller.scrollTo(sectionNames[0], {
        duration: 1000,
        smooth: true,
      });
    }
    if (
      scrollPosition / window.innerHeight > 0.8 &&
      scrollPosition / window.innerHeight < 1.2
    ) {
      scroller.scrollTo(sectionNames[1], {
        duration: 1000,
        smooth: true,
      });
    }
    if (
      scrollPosition / window.innerHeight > 1.8 &&
      scrollPosition / window.innerHeight < 2.2
    ) {
      scroller.scrollTo(sectionNames[2], {
        duration: 1000,
        smooth: true,
      });
    }
    if (
      scrollPosition / window.innerHeight > 2.8 &&
      scrollPosition / window.innerHeight < 3.2
    ) {
      scroller.scrollTo(sectionNames[3], {
        duration: 1000,
        smooth: true,
      });
    }
    if (scrollPosition / window.innerHeight > 3.8) {
      scroller.scrollTo(sectionNames[4], {
        duration: 1000,
        smooth: true,
      });
    }
    prevScrollPositionRef.current = scrollPosition;
  }

  setInterval(() => {
    handleScroll();
  }, 2000);

  return (
    <>
      <Element name={sectionNames[0]}>
        <HomeInto />
      </Element>
      <Element name={sectionNames[1]}>
        <EngineeringAndDesign />
      </Element>
      <Element name={sectionNames[2]}>
        <Motivation />
      </Element>
      <Element name={sectionNames[3]}>
        <GoToProjects />
      </Element>
      <Element name={sectionNames[4]}>
        <Footer />
      </Element>
    </>
  );
}

export default Home;
