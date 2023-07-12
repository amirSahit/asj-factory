import { IoCash, IoHome, IoSpeedometer, IoThumbsUp } from "react-icons/io5";

function HomeIconsMobile() {
  return (
    <div className="flex flex-row justify-between items-center p-10 w-full text-white text-center">
      <div className="flex flex-col items-center gap-2">
        <IoThumbsUp className="react-icons" />
        <p className="font-bold">High Quality</p>
        <IoCash className="react-icons" />
        <p className="font-bold">Fair Prices</p>
      </div>
      <div>
        <div className="flex flex-col items-center gap-2">
          <IoSpeedometer className="react-icons" />
          <p className="font-bold">Fast and Reliable</p>
          <IoHome className="react-icons" />
          <p className="font-bold">From One Soruce</p>
        </div>
      </div>
    </div>
  );
}

export default HomeIconsMobile;
