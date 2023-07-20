import { useState } from "react";
import HeaderNavBar from "../shared/HeaderNavBar";
import LeftSideServiceNavBar from "./LeftSideServiceNavBar";
import SwitchServiceTop from "./SwitchServiceTop";
import Footer from "../shared/Footer";
import HomeGreenBar from "../home/HomeGreenBar";

function ServicePageDesktop() {
  const [selectedService, setSelectedService] = useState(0);
  return (
    <div>
      <HeaderNavBar />
      <section className="relative h-[500px] flex flex-col justify-center items-center">
        <h2 className="text-black text-6xl px-3 py-6  z-10">Our Services</h2>
        <img src="static/images/image 3.jpg" className="absolute opacity-50" />
      </section>
      <div className="flex flex-row gap-24 p-10 justify-center">
        <LeftSideServiceNavBar
          selected={selectedService}
          setSelected={setSelectedService}
        />
        <SwitchServiceTop selected={selectedService} />
      </div>
      <HomeGreenBar />
      <Footer />
    </div>
  );
}

export default ServicePageDesktop;
