import { Link } from "react-router-dom";

function HomeHeader() {
  return (
    <div className="relative h-[500px] flex flex-col justify-center items-center">
      <Link
        to={"/contact"}
        className="text-white bg-blue text-xl px-3 py-6 z-10 shadow-md shadow-black"
      >
        Get in Touch
      </Link>
      <img
        src="static/images/image-home.jpg"
        alt="Bridge in Dessau/Germany"
        className="absolute opacity-50 h-[500px] min-w-[1440px]"
      />
    </div>
  );
}

export default HomeHeader;
