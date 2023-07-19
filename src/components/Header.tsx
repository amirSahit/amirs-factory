import { HiBars3 } from "react-icons/hi2";

function Header() {
  return (
    <header className="flex flex-row p-4 justify-between relative z-50">
      <h2 className="text-6xl">amrs</h2>
      <HiBars3 className="w-[5vw] h-[5vh]" />
    </header>
  );
}

export default Header;
