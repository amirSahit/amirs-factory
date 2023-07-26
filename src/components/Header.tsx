import { useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const MenuMap = [
  { home: "/" },
  { work: "/work" },
  { resumé: "/resume" },
] as MenuMapType;

type MenuMapType = [
  {
    home: string;
  },
  {
    work: string;
  },
  {
    resumé: string;
  }
];

type LanguageMapType = {
  en: {
    nativeName: string;
  };
  de: {
    nativeName: string;
  };
};

const lngs: LanguageMapType = {
  en: { nativeName: "En" },
  de: { nativeName: "De" },
};

function Header() {
  const [menu, setMenu] = useState(false);
  const location = useLocation();
  const { i18n } = useTranslation();
  const filteredMenu = MenuMap.filter(
    (menu) => Object.values(menu)[0] !== location.pathname
  );

  return (
    <header className="flex flex-row p-4 justify-between relative z-50">
      <h2 className="text-6xl">amrs</h2>
      <div>
        <HiBars3 className="w-[5vw] h-[5vh]" onClick={() => setMenu(true)} />
        {menu && (
          <nav className="w-[20vw] z-50 bg-white border-4 border-black absolute top-3 right-4 flex flex-col">
            <HiXMark
              className="w-[40px] h-[40px] place-self-end pr-2"
              onClick={() => setMenu(false)}
            />
            <ul
              className="flex flex-col justify-between p-5 gap-5 text-2xl"
              onBlur={() => setMenu(false)}
            >
              {filteredMenu.map((menu, idx) => (
                <li key={idx}>
                  <Link
                    to={Object.values(menu)[0]}
                    className="underline-offset-4 hover:underline decoration-red capitalize"
                  >
                    {Object.keys(menu)[0]}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex flex-row gap-4 p-5">
              {Object.keys(lngs).map((lng) => (
                <button
                  key={lng}
                  type="submit"
                  onClick={() => i18n.changeLanguage(lng)}
                  disabled={i18n.resolvedLanguage === lng}
                  className="underline-offset-4 hover:underline decoration-red capitalize disabled:opacity-50 disabled:no-underline normalText"
                >
                  {lng}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
