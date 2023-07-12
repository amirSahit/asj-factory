import { useState } from "react";
import LeftSideCompanyNavBar from "../components/company/LeftSideCompanyNavBar";
import NavBarOthers from "../components/shared/NavBarOthers";

function Company() {
  const [isClicked, setIsClicked] = useState(1);
  return (
    <>
      <header className="bg-blue px-10 py-3">
        <NavBarOthers />
      </header>
      <div className="flex flex-row w-full gap-24 px-10 py-10">
        <LeftSideCompanyNavBar
          isClicked={isClicked}
          setIsClicked={setIsClicked}
        />
      </div>
    </>
  );
}

export default Company;
