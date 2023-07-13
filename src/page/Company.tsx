import { useState } from "react";
import LeftSideCompanyNavBar from "../components/company/LeftSideCompanyNavBar";
import NavBarOthers from "../components/shared/NavBarOthers";
import SwitchCompany from "../components/company/SwitchCompany";
import SwitchCompanyBottom from "../components/company/SwitchCompanyBottom";
import Footer from "../components/shared/Footer";
import { useMediaQuery } from "react-responsive";
import CompanyComponentsMobile from "../componentsMobile/contact/CompanyComponentsMobile";

function Company() {
  const [isClicked, setIsClicked] = useState(2);
  const isMobile = useMediaQuery({ maxWidth: 1024 });

  return (
    <>
      {isMobile ? (
        <CompanyComponentsMobile />
      ) : (
        <>
          <header className="bg-blue px-10 py-3 flex flex-col justify-between">
            <NavBarOthers />
          </header>
          <div className="flex flex-row w-full gap-24 px-10 py-10">
            <LeftSideCompanyNavBar
              isClicked={isClicked}
              setIsClicked={setIsClicked}
            />
            <SwitchCompany isClicked={isClicked} />
          </div>
          <SwitchCompanyBottom isClicked={isClicked} />
          <Footer />
        </>
      )}
    </>
  );
}

export default Company;
