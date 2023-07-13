import { IoMenu } from "react-icons/io5";
import Icons from "../../components/home/Icons";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";

function NavBarMobile() {
  const [openNav, setOpenNav] = useState(false);
  const location = useLocation();
  return (
    <header className="flex flex-row justify-between items-center p-2">
      <img
        src="/static/images/Logo_ASJ_2018.jpg"
        className="w-[40%] "
        alt="ASJ LOGO"
      />
      <button onClick={() => setOpenNav(!openNav)}>
        <Icons icon={<IoMenu className="react-icons-mobile" />} />
      </button>
      {openNav && (
        <nav className="bg-white absolute top-0 right-0 pr-10 pl-5 py-4">
          <ul className="flex flex-col gap-2 text-left">
            <Link
              className={clsx(
                location.pathname === "/" ? "text-yellow" : "text-blue"
              )}
              to={"/"}
              onClick={() => setOpenNav(!openNav)}
            >
              Home
            </Link>
            <Link
              className={clsx(
                location.pathname === "/service" ? "text-yellow" : "text-blue"
              )}
              to={"/service"}
              onClick={() => setOpenNav(!openNav)}
            >
              Service
            </Link>
            <Link
              className={clsx(
                location.pathname === "/company" ? "text-yellow" : "text-blue"
              )}
              to={"/company"}
              onClick={() => setOpenNav(!openNav)}
            >
              Company
            </Link>
            <Link
              className={clsx(
                location.pathname === "/contact" ? "text-yellow" : "text-blue"
              )}
              to={"/contact"}
            >
              Contact
            </Link>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default NavBarMobile;
