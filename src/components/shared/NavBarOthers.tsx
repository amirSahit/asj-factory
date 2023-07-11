import { Link } from "react-router-dom";

function NavBarOthers() {
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
        className="border-4 border-solid border-white py-4 px-10 text-white bg-blue"
      >
        Service
      </Link>
      <Link
        to={"/company"}
        className="border-4 border-solid border-white py-4 px-10 text-white bg-blue"
      >
        Company
      </Link>
      <Link
        to={"/contact"}
        className="border-4 border-solid border-white py-4 px-10 text-white bg-blue"
      >
        Contact
      </Link>
    </div>
  );
}

export default NavBarOthers;
