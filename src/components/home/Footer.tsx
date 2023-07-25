import Header from "../Header";

function Footer() {
  return (
    <footer
      className="fullHeight bg-blue flex flex-col justify-between"
      id="fullHeight"
    >
      <Header />
      <section className="flex flex-row justify-around items-center">
        <section className="bg-white p-4">
          <h2 className="largeHeader text-red">Say Hi!</h2>
          <div className="p-2">
            <p className="normalText">amir.sahit@gmail.com</p>
            <p className="normalText">telegram/amrs</p>
          </div>
        </section>
        <section className="bg-white p-4">
          <h2 className="largeHeader text-red">For You.</h2>
          <div className="p-2">
            <p className="normalText">My Work</p>
            <p className="normalText">My Resumé</p>
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
