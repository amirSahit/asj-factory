import { IoCash, IoHome, IoSpeedometer, IoThumbsUp } from "react-icons/io5";

function HomeIconsMobile() {
  return (
    <section className="flex flex-row justify-around items-center p-5 w-full text-white text-center">
      <figure className="flex flex-col items-center gap-2">
        <IoThumbsUp className="react-icons" />
        <figcaption className="font-bold">High Quality</figcaption>
        <IoCash className="react-icons" />
        <figcaption className="font-bold">Fair Prices</figcaption>
      </figure>
      <figure>
        <div className="flex flex-col items-center gap-2">
          <IoSpeedometer className="react-icons" />
          <figcaption className="font-bold">Fast and Reliable</figcaption>
          <IoHome className="react-icons" />
          <figcaption className="font-bold">From One Soruce</figcaption>
        </div>
      </figure>
    </section>
  );
}

export default HomeIconsMobile;
