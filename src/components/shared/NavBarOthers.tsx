import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";

function NavBarOthers() {
  const location = useLocation();

  return (
    <div className="flex flex-row items-center gap-10">
      <img
        src="/static/images/Logo_ASJ_2018.jpg"
        width={310}
        height={130}
        alt="ASJ LOGO"
      />
      <Link
        to={"/"}
        className="border-4 border-solid border-white py-4 px-10 text-white bg-blue"
      >
        Home
      </Link>
      <Link
        to={"/service"}
        className={clsx(
          "border-4 border-solid border-white py-4 px-10 text-white",
          location.pathname === "/service" ? "bg-yellow" : "bg-blue"
        )}
      >
        Service
      </Link>
      <Link
        to={"/company"}
        className={clsx(
          "border-4 border-solid border-white py-4 px-10 text-white",
          location.pathname === "/company" ? "bg-yellow" : "bg-blue"
        )}
      >
        Company
      </Link>
      <Link
        to={"/contact"}
        className={clsx(
          "border-4 border-solid border-white py-4 px-10 text-white",
          location.pathname === "/contact" ? "bg-yellow" : "bg-blue"
        )}
      >
        Contact
      </Link>
    </div>
  );
}

export default NavBarOthers;
