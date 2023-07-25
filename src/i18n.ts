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
        },
      },
    },
  });
