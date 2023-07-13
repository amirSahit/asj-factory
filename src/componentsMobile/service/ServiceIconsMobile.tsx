import { IoDesktop, IoSync, IoTrendingUp, IoGitNetwork } from "react-icons/io5";

function ServiceIconsMobile() {
  return (
    <div className="flex flex-row justify-around items-start gap-2 p-5 w-full text-white text-center flex-wrap">
      <div className="flex flex-col items-center">
        <IoSync className="react-icons" />
        <p className="text-base">A Qualified Team</p>
      </div>
      <div className="flex flex-col items-center w-[115px]">
        <IoTrendingUp className="react-icons" />
        <p className="text-base">Cost-optimized Designs</p>
      </div>

      <div className="flex flex-col items-center">
        <IoDesktop className="react-icons" />
        <p className="text-base">CAD technology</p>
      </div>
      <div className="flex flex-col items-center">
        <IoGitNetwork className="react-icons" />
        <p className="text-base">Data exchange</p>
      </div>
    </div>
  );
}

export default ServiceIconsMobile;
