import { useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { Link, useLocation } from "react-router-dom";

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

function Header() {
  const [menu, setMenu] = useState(false);
  const location = useLocation();
  const filteredMenu = MenuMap.filter(
    (menu) => Object.values(menu)[0] !== location.pathname
  );

  return (
    <header className="flex flex-row p-4 justify-between relative z-50">
      <h2 className="text-6xl">amrs</h2>
      <HiBars3 className="w-[5vw] h-[5vh]" onClick={() => setMenu(true)} />
      {menu && (
        <nav className="w-[20vw] z-50 bg-white border-4 border-black absolute right-5 flex flex-col">
          <HiXMark
            className="w-[5vw] h-[5vh] place-self-end"
            onClick={() => setMenu(false)}
          />
          <ul className="flex flex-col justify-between p-5 gap-5 text-2xl">
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
        </nav>
      )}
    </header>
  );
}

export default Header;
