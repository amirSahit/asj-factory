import { useState } from "react";
import ServicesButton from "./ServicesButton";
import ServiceInfos from "./ServiceInfos";
import FooterMobile from "../shared/FooterMobile";

function ServicesSwitch() {
  const [choice, setChoice] = useState(0);
  return (
    <>
      <main className="bg-blue">
        <ServicesButton choice={choice} setChoice={setChoice} />
        <ServiceInfos choice={choice} />
      </main>
      <FooterMobile />
    </>
  );
}

export default ServicesSwitch;
