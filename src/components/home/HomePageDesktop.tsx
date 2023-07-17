import Footer from "../shared/Footer";
import HeaderNavBar from "../shared/HeaderNavBar";
import HomeGreenBar from "./HomeGreenBar";
import HomeHeader from "./HomeHeader";
import HomeLowerPart from "./HomeLowerPart";
import HomeUpperPart from "./HomeUpperPart";

function HomePageDesktop() {
  return (
    <div>
      <HeaderNavBar />
      <HomeHeader />
      <HomeGreenBar />
      <HomeUpperPart />
      <HomeLowerPart />
      <Footer />
    </div>
  );
}

export default HomePageDesktop;
