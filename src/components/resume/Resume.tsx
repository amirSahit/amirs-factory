import Header from "../Header";
import Footer from "../home/Footer";

function Resume() {
  return (
    <section className="flex flex-col gap-10">
      <Header />
      <article className="flex flex-col p-4 w-[90vw] redShadow place-self-center regularText gap-5">
        <div className="flex flex-row justify-between items-start gap-5">
          <div>
            <h2 className="largeHeader text-red text-start">Amir Sahit.</h2>
            <h3 className="header">Junior Fontend Developer</h3>
            <section className="flex flex-col gap-4 mt-5">
              <h4 className="mediumResumeHeader-thin text-red">
                Software Projects
              </h4>
              <p className="normalText-Bold">Cinema App | Consensus App</p>
              <p className="normalText">
                Development of a dynamic and interactive web applications that
                encompasses both frontend and backend for various use cases.
              </p>
              <ul className="normalText pl-10 resumeList">
                <li>
                  Solid understanding of React concepts like components, state,
                  props, and lifecycle methods
                </li>
                <li>
                  Ability to create reusable and modular UI components using JSX
                </li>
                <li>
                  Knowledge of React Router for handling routing within the
                  application
                </li>
                <li>
                  Familiarity with Vite build tool and its configuration for a
                  fast development environment
                </li>
                <li>
                  Knowledge of routing, server-side rendering, and API routes in
                  Next.js
                </li>
                <li>
                  Knowledge of PostgreSQL database management system for data
                  storage and retrieval
                </li>
                <li>
                  Ability to write SQL queries, create tables, and manage
                  database operations
                </li>
                <li>
                  Familiarity with Prisma ORM (Object-Relational Mapping) for
                  database access and manipulation
                </li>
                <li>
                  Knowledge of Prisma's query builder and migration capabilities
                </li>
              </ul>
            </section>
          </div>
          <div className="flex flex-col gap-5">
            <img src="static/images/IMG-0512.JPG" className="w-[25vw]" />
            <section>
              <h4 className="mediumResumeHeader-thin text-red">TechStack</h4>
              <ul className="normalText pl-10 p-3 resumeList redShadow">
                <li>React & Next.js 13</li>
                <li>JavaScript & TypeScript</li>
                <li>PostgreSQL</li>
                <li>Prisma</li>
              </ul>
            </section>
          </div>
        </div>
        <section className="normalText flex flex-col gap-4 ">
          <h3 className="mediumResumeHeader-thin text-red">Education</h3>
          <h4 className="normalText-Bold">
            Coding Bootcamp | Devhaus • Leipzig • Jan - Jul 2023
          </h4>
          <p className="pl-5">
            Intensive 6-month web development course, including retro games,
            fullstack-applications such as a booking app and poll app as final
            full stack project
          </p>
          <h4 className="normalText-Bold">
            Bachelor of Arts | Environmental Studies | San Francisco State
            University • San Francisco • 2013 - 2017
          </h4>
          <h4 className="normalText-Bold"></h4>
        </section>
        <section className="normalText flex flex-col gap-4">
          <h3 className="mediumResumeHeader-thin text-red">Work Experience</h3>
          <h4 className="normalText-Bold">
            Nextbike by Tier | Tier Mobility SE • Leipzig • May 2020 - Oct 2022
          </h4>
          <p>
            Nextbike by Tier is a leading bike-sharing company based in Germany,
            providing convenient and sustainable transportation solutions in
            numerous cities worldwide
          </p>
          <ul className="normalText pl-10 resumeList">
            <li>
              Effectively identifying and addressing customer issues and
              concerns related to bike-sharing services
            </li>
            <li>
              Ability to analyze problems, gather relevant information, and
              provide prompt and suitable solutions
            </li>
            <li>
              Demonstrate critical thinking and resourcefulness in finding
              resolutions, ensuring customer satisfaction and enhancing the
              overall experience with the services.
            </li>
          </ul>
          <h4 className="normalText-Bold">
            Funke Medien Service GmbH (Germany) • Erfurt • Apr 2019 - Mar 2020
          </h4>
          <p>
            The prominent media company based in Germany is known for its
            diverse portfolio of newspapers, magazines, radio stations, and
            digital media offerings.
          </p>
          <ul className="normalText pl-10 resumeList">
            <li>
              Communication: This includes being able to actively listen to
              others, express ideas and information clearly and effectively, and
              adapt communication style to different audiences and situations.
            </li>
            <li>
              Interpersonal Skills: Building positive relationships and working
              effectively with colleagues, clients, and stakeholders is crucial.
            </li>
            <li>
              Adaptability: The ability to adapt to new tasks, responsibilities,
              and changing circumstances is essential in a dynamic and evolving
              field like HR.
            </li>
            <li>
              Problem-solving: This involves analyzing situations, gathering
              relevant information, and developing practical solutions.
            </li>
            <li>
              Organizational Skills: Strong organizational skills are crucial
              for managing multiple tasks, deadlines, and priorities
              effectively.
            </li>
            <li>
              Confidentiality and Ethics: HR deals with sensitive employee
              information and confidential matters. Demonstrating a high level
              of confidentiality and ethical behavior is essential.
            </li>
          </ul>
          <section>
            <h4 className="normalText-Bold">Summary 2013-2019</h4>
            <ul className="normalText pl-10 resumeList">
              <li>Waiter at Brauhaus Zum Alten Dessauer (Dessau - Roßlau)</li>
              <li>
                Director of the Environmental Center an der State University of
                San Francisco
              </li>
              <li>Sales at Abercrombie Kids (Sacramento, CA)</li>
              <li>Barista at Illy Inc. (San Francisco, CA)</li>
            </ul>
          </section>
        </section>
      </article>
      <Footer />
    </section>
  );
}

export default Resume;
