import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";

function NavBarMobile() {
  const [openNav, setOpenNav] = useState(false);
  const location = useLocation();

  const toggleNav = () => {
    setOpenNav(!openNav);
  };

  const closeNav = () => {
    setOpenNav(false);
  };

  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/service", text: "Service" },
    { to: "/company", text: "Company" },
    { to: "/contact", text: "Contact" },
  ];

  return (
    <header className="flex flex-row justify-between items-center p-2">
      <img
        src="/static/images/Logo_ASJ_2018.jpg"
        className="w-[40%]"
        alt="ASJ LOGO"
      />
      <button onClick={toggleNav}>
        <IoMenu className="react-icons-mobile" />
      </button>
      {openNav && (
        <nav className="bg-white absolute top-0 right-0 pr-10 pl-5 py-4">
          <ul className="flex flex-col gap-2 text-left">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={clsx(
                  location.pathname === link.to ? "text-yellow" : "text-blue"
                )}
                onClick={closeNav}
              >
                {link.text}
              </Link>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default NavBarMobile;
