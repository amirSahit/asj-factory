import FooterMobile from "../shared/FooterMobile";
import NavBarMobile from "../shared/NavBarMobile";
import HomeIconsMobile from "./HomeIconsMobile";
import HomeMainBody from "./HomeMainBody";

function HomeComponentsMobile() {
  return (
    <div className="bg-blue flex flex-col">
      <NavBarMobile />
      <HomeMainBody />
      <HomeIconsMobile />
      <FooterMobile />
    </div>
  );
}

export default HomeComponentsMobile;
