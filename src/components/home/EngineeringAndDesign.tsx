import Header from "../Header";

function EngineeringAndDesign() {
  return (
    <section className="fullHeight" id="fullHeight">
      <Header />
      <article className="flex flex-col gap-[2vh] p-10">
        <div className="flex justify-end">
          <section className="w-[50vw] blueShadow p-2">
            <h3 className="mediumHeader text-blue">Design</h3>
            <p className="normalText p-2">
              As a junior developer and designer, I blend technical expertise
              with artistic creativity to craft engaging and intuitive
              applications. Eager to push boundaries and deliver transformative
              digital experiences. With a passion for continuous learning and a
              keen eye for detail, I strive to create seamless user experiences
              that leave a lasting impression.
            </p>
          </section>
        </div>
        <div className="flex justify-start">
          <section className="w-[50vw] redShadow p-2">
            <h3 className="mediumHeader text-red">Engineering</h3>
            <p className="normalText p-2">
              When it comes to creating JavaScript applications, I possess the
              ideal set of tools and have the ability to function independently
              with them. This allows me to deliver rapid and robust solutions,
              carefully tailored for scalability and performance. Ensuring
              optimal performance and scalability remains a top priority for me.
            </p>
          </section>
        </div>
      </article>
    </section>
  );
}

export default EngineeringAndDesign;
