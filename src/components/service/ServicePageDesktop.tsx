import { useState } from "react";
import HeaderNavBar from "../shared/HeaderNavBar";
import LeftSideServiceNavBar from "./LeftSideServiceNavBar";
import SwitchServiceTop from "./SwitchServiceTop";

function ServicePageDesktop() {
  const [selectedService, setSelectedService] = useState(0);
  return (
    <div>
      <HeaderNavBar />
      <div className="serviceBg h-[500px] flex flex-col justify-center items-center">
        <h2 className="text-white text-6xl px-3 py-6 bg-blue/60">
          Our Services
        </h2>
      </div>
      <div className="flex flex-row gap-24 p-10">
        <LeftSideServiceNavBar
          selected={selectedService}
          setSelected={setSelectedService}
        />
        <SwitchServiceTop selected={selectedService} />
      </div>
    </div>
  );
}

export default ServicePageDesktop;
