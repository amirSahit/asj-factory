import { useState } from "react";
import LeftSideServiceNavBar from "../components/service/LeftSideServiceNavBar";
import NavBarOthers from "../components/shared/NavBarOthers";
import SwitchServiceBottom from "../components/service/SwitchServiceBottom";
import SwitchServiceTop from "../components/service/SwitchServiceTop";
import Footer from "../components/shared/Footer";
import { useMediaQuery } from "react-responsive";
import ServiceComponentsMobile from "../componentsMobile/service/ServiceComponentsMobile";

function Service() {
  const [isClicked, setIsClicked] = useState(1);
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  return (
    <>
      {isMobile ? (
        <ServiceComponentsMobile />
      ) : (
        <>
          <header className="bg-blue px-10 py-3">
            <NavBarOthers />
          </header>
          <div className="flex flex-row w-full gap-24 px-10 py-10">
            <LeftSideServiceNavBar
              isClicked={isClicked}
              setIsClicked={setIsClicked}
            />
            <SwitchServiceTop isClicked={isClicked} />
          </div>
          <div>
            <SwitchServiceBottom isClicked={isClicked} />
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export default Service;
