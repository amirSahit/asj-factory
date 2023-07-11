import { Link } from "react-router-dom";

function HeaderNavBar() {
  return (
    <div className="flex flex-row items-center gap-10">
      <img
        src="/static/images/Logo_ASJ_2018.jpg"
        width={300}
        height={110}
        alt="ASJ LOGO"
      />
      <Link
        to={"/"}
        className="border-4 border-solid border-white py-4 px-10 text-white"
      >
        Home
      </Link>
      <Link
        to={"/service"}
        className="border-4 border-solid border-white py-4 px-10 text-white"
      >
        Service
      </Link>
      <Link
        to={"/company"}
        className="border-4 border-solid border-white py-4 px-10 text-white"
      >
        Company
      </Link>
      <Link
        to={"/contact"}
        className="border-4 border-solid border-white py-4 px-10 text-white"
      >
        Contact
      </Link>
    </div>
  );
}

export default HeaderNavBar;
