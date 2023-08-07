import { AiOutlineClose } from "react-icons/ai";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MobileMenu = ({ visible, toggleMobileMenu }) => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    let timeoutId;

    if (visible) {
      timeoutId = setTimeout(() => {
        setShowMenu(true);
      }, 200);
    } else {
      timeoutId = setTimeout(() => {
        setShowMenu(false);
      }, 100);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [visible]);

  if (!visible) {
    return null;
  }

  return (
    <div
      className={`h-[100vh] w-[80vw] md:w-[40vw] fixed top-0 right-0 z-10 bg-[#080F29] transform ${
        showMenu
          ? "translate-x-0 transition-transform duration-300 ease-in-out"
          : "translate-x-full"
      }`}
    >
      <div className="flex justify-end mr-6 mt-8">
        <AiOutlineClose
          className="transition-all hover:text-[#f7c31a] duration-300 cursor-pointer"
          onClick={toggleMobileMenu}
          size={35}
        />
      </div>
      <ul className="text-md leading-[3rem] ml-6 mt-10">
        <hr className="mr-5 border-[#FBF0B0]" />
        <li className="hover:text-[#f7c31a] transition-all duration-300 cursor-pointer">
          <Link to="/">Strona Główna</Link>
        </li>
        <hr className="mr-5 border-[#FBF0B0]" />
        <li className="hover:text-[#f7c31a] transition-all duration-300 cursor-pointer">
          <Link to="/uslugi">Usługi</Link>
        </li>
        <hr className="mr-5 border-[#FBF0B0]" />
        <li className="hover:text-[#f7c31a] transition-all duration-300 cursor-pointer">
          <Link to="/opinie">Opinie</Link>
        </li>
        <hr className="mr-5 border-[#FBF0B0]" />
      </ul>
    </div>
  );
};

export default MobileMenu;