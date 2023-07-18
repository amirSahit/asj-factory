import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";

function HeaderNavBar() {
  const location = useLocation();

  return (
    <div className="flex flex-row items-center justify-between text-2xl">
      <img
        src="static/images/Logo_ASJ_2018.jpg"
        width={300}
        height={110}
        alt="ASJ LOGO"
      />
      <nav className="flex flex-row items-center justify-around gap-10 w-1/2 mr-40">
        <Link
          to={"/"}
          className={clsx(
            "text-black",
            location.pathname === "/" ? "underline" : ""
          )}
        >
          Home
        </Link>
        <Link
          to={"/service"}
          className={clsx(
            "text-black",
            location.pathname === "/service" ? "underline" : ""
          )}
        >
          Service
        </Link>
        <Link
          to={"/company"}
          className={clsx(
            "text-black",
            location.pathname === "/company" ? "underline" : ""
          )}
        >
          Company
        </Link>
        <Link
          to={"/contact"}
          className={clsx(
            "text-black",
            location.pathname === "/contact" ? "underline" : ""
          )}
        >
          Contact
        </Link>
      </nav>
    </div>
  );
}

export default HeaderNavBar;
