function HomeCardIntro() {
  return (
    <div className="bg-white p-4 w-[50vw] ml-[8vw] mt-[18vh] flex flex-col gap-10 text-xl">
      <h2 className="mediumHeader text-red">Junior Frontend Developer.</h2>
      <p className="normalText-Bold">
        I enjoy developing frontend products that are robust, scalable, and
        provide exceptional user experiences.
      </p>
      <div className="flex flex-row justify-between">
        <p className="smallText w-[20vw]">
          A passion for progressive enhancement, design systems & UI
          Engineering.
        </p>
        <p className="smallText w-[20vw]">
          I am highly motivated and eager to learn, embracing every opportunity
          to expand my skills and knowledge in the fast-paced world of software
          development.
        </p>
      </div>
    </div>
  );
}

export default HomeCardIntro;
