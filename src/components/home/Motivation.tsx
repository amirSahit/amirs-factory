import Header from "../Header";

function Motivation() {
  return (
    <section className="fullHeight bg-blue" id="fullHeight">
      <Header />
      <section className="flex flex-row justify-around items-center h-full">
        <article className="bg-white p-4 w-[50vw]">
          <h2 className="mediumHeader text-red">Motivation.</h2>
          <p className="normalText p-2">
            As a junior developer, my personal website is a concrete
            representation of my passion for programming and technology. It
            serves as a platform to inspire, collaborate, and contribute
            positively to the digital world. Through this website, I aim to
            share ideas, projects, and practical contributions that shape a
            brighter future. Together, let's harness the power of code to build
            a community of responsible and innovative thinkers, making a lasting
            impact on the evolving landscape of web development.
          </p>
        </article>
        <img src="static/images/IMG-0511.jpg" className="borderHeadshot w-96" />
      </section>
    </section>
  );
}

export default Motivation;
