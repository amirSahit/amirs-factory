import Header from "../Header";

function EngineeringAndDesign() {
  return (
    <div className="fullHeight">
      <Header />
      <div className="flex flex-col justify-around p-10">
        <div className="flex justify-end">
          <div className="w-[50vw] blueShadow p-2">
            <h3 className="EAD text-blue">Design</h3>
            <p className="normalText p-2">
              As a junior developer and designer, I blend technical expertise
              with artistic creativity to craft engaging and intuitive
              applications. Eager to push boundaries and deliver transformative
              digital experiences. With a passion for continuous learning and a
              keen eye for detail, I strive to create seamless user experiences
              that leave a lasting impression.
            </p>
          </div>
        </div>
        <div className="flex justify-start">
          <div className="w-[50vw] redShadow p-2">
            <h3 className="EAD text-red">Engineering</h3>
            <p className="normalText">
              When it comes to creating JavaScript applications, I possess the
              ideal set of tools and have the ability to function independently
              with them. This allows me to deliver rapid and robust solutions,
              carefully tailored for scalability and performance. Ensuring
              optimal performance and scalability remains a top priority for me.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EngineeringAndDesign;
