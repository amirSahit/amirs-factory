import Header from "../Header";

function GoToProjects() {
  return (
    <section className="fullHeight" id="fullHeight">
      <Header />
      <section className="flex flex-row justify-around items-center">
        <article className="bg-lightRed p-4 w-[75vw] flex flex-col gap-[4vh]">
          <h2 className="largeHeader text-black">Work.</h2>
          <h2 className="largeHeader text-black">Build & Design.</h2>
          <h2 className="largeHeader text-black">TypeScript & React.</h2>
          <button className="bg-white border-4 border-black w-[15vw] place-self-center px-15 py-5 text-2xl font-bold">
            See My Projects
          </button>
        </article>
      </section>
    </section>
  );
}

export default GoToProjects;
