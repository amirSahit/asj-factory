import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";

function NavBarOthers() {
  const location = useLocation();

  return (
    <div className="flex flex-row items-center gap-10 bg-blue">
      <img
        src="/static/images/Logo_ASJ_2018.jpg"
        width={310}
        height={130}
        alt="ASJ LOGO"
      />
      <Link
        to={"/"}
        className={clsx(
          "py-4 px-10",
          location.pathname === "/"
            ? "bg-yellow text-black"
            : "bg-blue text-white border-2 border-solid border-white"
        )}
      >
        Home
      </Link>
      <Link
        to={"/service"}
        className={clsx(
          "py-4 px-10",
          location.pathname === "/service"
            ? "bg-yellow text-black"
            : "bg-blue text-white border-2 border-solid border-white"
        )}
      >
        Service
      </Link>
      <Link
        to={"/company"}
        className={clsx(
          "py-4 px-10 ",
          location.pathname === "/company"
            ? "bg-yellow text-black"
            : "bg-blue text-white border-2 border-solid border-white"
        )}
      >
        Company
      </Link>
      <Link
        to={"/contact"}
        className={clsx(
          "py-4 px-10",
          location.pathname === "/contact"
            ? "bg-yellow text-black"
            : "bg-blue text-white border-2 border-solid border-white"
        )}
      >
        Contact
      </Link>
    </div>
  );
}

export default NavBarOthers;
