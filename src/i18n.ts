import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          HeaderIntro: "Junior Frontend Developer",
          IntroCard:
            "I enjoy developing frontend products that are robust, scalable, and provide exceptional user experiences.",
          Design: "Design",
          Engineering: "Engineering",
          DesignText:
            "As a junior developer and designer, I blend technical expertise with artistic creativity to craft engaging and intuitive applications. I strive to create seamless user experiences that leave a lasting impression.",
          EngineeringText:
            "When it comes to creating JavaScript applications, I possess the ideal set of tools and have the ability to function independently with them. This allows me to deliver rapid and robust solutions, carefully tailored for scalability and performance.",
          MotivationText:
            "As a junior developer, my personal website is a concrete representation of my passion for programming and technology. It serves as a platform to inspire, collaborate, and contribute positively to the digital world. Through this website, I aim to share ideas, projects, and practical contributions that shape a brighter future. Together, let's harness the power of code to build a community of responsible and innovative thinkers, making a lasting impact on the evolving landscape of web development.",
          GoToProjects: "See my projects",
          FooterHello: "Say Hi!",
          FooterForYou: "For you.",
          /* Resume */
          ResumeSubtitle1: "Software Projects",
          ResumeSubtitle2: "Education",
          ResumeSubtitle3: "Work Experience",
          SoftWareProjectsDescription:
            "Development of a dynamic and interactive web applications that encompasses both frontend and backend for various use cases.",
          SoftWareProjectsDescriptionLi1:
            "Solid understanding of React concepts like components, state, props, and lifecycle methods",
          SoftWareProjectsDescriptionLi2:
            "Ability to create reusable and modular UI components using JSX",
          SoftWareProjectsDescriptionLi3:
            "Knowledge of React Router for handling routing within the application",
          SoftWareProjectsDescriptionLi4:
            "Familiarity with Vite build tool and its configuration for a fast development environment",
          SoftWareProjectsDescriptionLi5:
            "Knowledge of PostgreSQL database management system for data storage and retrieval",
          SoftWareProjectsDescriptionLi6:
            "Ability to write SQL queries, create tables, and manage database operations",
          SoftWareProjectsDescriptionLi7:
            "Familiarity with Prisma ORM (Object-Relational Mapping) for database access and manipulation",
          BootCampDescription:
            " Intensive 6-month web development course, including retro games, fullstack-applications such as a booking app and poll app as final full stack project",
          NextbikeDescription:
            "Nextbike by Tier is a leading bike-sharing company based in Germany, providing convenient and sustainable transportation solutions in numerous cities worldwide.",
        },
      },
      de: {
        translation: {
          HeaderIntro: "Junior Frontend Entwickler",
          IntroCard:
            "Ich entwickle Frontend-Produkte, die robust, skalierbar und mit außergewöhnlichen Benutzererfahrungen ausgestattet sind.",
          Design: "Design",
          Engineering: "Engineering",
          DesignText:
            "Als Junior-Entwickler und Designer vereine ich technisches Fachwissen mit künstlerischer Kreativität, um ansprechende und intuitive Anwendungen zu gestalten. Ich suche immer neue Wege, um Grenzen zu überschreiten um transformative digitale Erlebnisse zu schaffen.",
          EngineeringText:
            "Durch die Entwicklung von JavaScript-Anwendungen besitze ich das ideale Set an Werkzeugen. Dadurch kann ich schnelle und robuste Lösungen liefern, die sorgfältig auf Skalierbarkeit und Leistung abgestimmt sind.",
          MotivationText:
            "Als Junior-Entwickler ist meine persönliche Website eine konkrete Darstellung meiner Leidenschaft für Programmierung und Technologie. Sie dient als Plattform, um zu inspirieren, zusammenzuarbeiten und einen positiven Beitrag zur digitalen Welt zu leisten. Durch diese Website möchte ich Ideen, Projekte und praktische Beiträge teilen, die eine bessere Zukunft formen. Gemeinsam wollen wir die Kraft des Codes nutzen, um eine Gemeinschaft verantwortungsbewusster und innovativer Denker aufzubauen, die einen bleibenden Einfluss auf die sich ständig wandelnde Landschaft der Webentwicklung haben.",
          GoToProjects: "Meine Projekte",
          FooterHello: "Sag Hallo!",
          FooterForYou: "Für dich.",
          /* Resume */
          ResumeSubtitle1: "Software Projekte",
          ResumeSubtitle2: "Bildung",
          ResumeSubtitle3: "Erfahrung",
          SoftWareProjectsDescription:
            "Entwicklung von dynamischen und interaktiven Webanwendungen, die sowohl Frontend als auch Backend für verschiedene Anwendungsfälle umfassen.",
          SoftWareProjectsDescriptionLi1:
            "Solides Verständnis von React-Konzepten wie Komponenten, State, Props und Lifecycle-Methoden",
          SoftWareProjectsDescriptionLi2:
            "Fähigkeit zur Erstellung wiederverwendbarer und modularer UI-Komponenten mit JSX",
          SoftWareProjectsDescriptionLi3:
            "Kenntnisse von React Router zur Behandlung von Routen innerhalb der Anwendung",
          SoftWareProjectsDescriptionLi4:
            "Vertrautheit mit dem Vite-Build-Tool und dessen Konfiguration für eine schnelle Entwicklungsumgebung",
          SoftWareProjectsDescriptionLi5:
            "Kenntnisse des PostgreSQL-Datenbankmanagementsystems zur Datenspeicherung und -abfrage.",
          SoftWareProjectsDescriptionLi6:
            "Fähigkeit zum Schreiben von SQL-Abfragen, Erstellen von Tabellen und Verwalten von Datenbankoperationen.",
          SoftWareProjectsDescriptionLi7:
            "Vertrautheit mit Prisma ORM (Object-Relational Mapping) für den Datenbankzugriff und die Datenmanipulation.",
          BootCampDescription:
            "Intensiver 6-monatiger Webentwicklungskurs, der Retro-Spiele, Fullstack-Anwendungen wie eine Buchungs-App und eine Umfrage-App als abschließendes Fullstack-Projekt umfasst.",
          NextbikeDescription:
            "Nextbike by Tier ist ein führendes Bike-Sharing-Unternehmen mit Sitz in Deutschland, das bequeme und nachhaltige Transportlösungen in zahlreichen Städten weltweit bietet.",
        },
      },
    },
  });
