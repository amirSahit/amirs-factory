import { useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";

function Header() {
  const [menu, setMenu] = useState(false);
  return (
    <header className="flex flex-row p-4 justify-between relative z-50">
      <h2 className="text-6xl">amrs</h2>
      <HiBars3 className="w-[5vw] h-[5vh]" onClick={() => setMenu(true)} />
      {menu && (
        <nav className="w-[20vw] z-50 bg-white border-8 border-black absolute right-5 flex flex-col">
          <HiXMark
            className="w-[5vw] h-[5vh] place-self-end"
            onClick={() => setMenu(false)}
          />
          <ul className="flex flex-col justify-between p-5 gap-5 text-2xl">
            <Link
              to="/work"
              className="underline-offset-4 hover:underline decoration-red"
            >
              My Work
            </Link>
            <Link
              to="/resume"
              className="underline-offset-4 hover:underline decoration-red"
            >
              My Resumé
            </Link>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
