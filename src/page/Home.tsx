import HomeGreenBar from "../components/home/HomeGreenBar";
import HomeHeader from "../components/home/HomeHeader";
import HomeLowerPart from "../components/home/HomeLowerPart";
import HomeUpperPart from "../components/home/HomeUpperPart";
import Footer from "../components/shared/Footer";
import NavBarOthers from "../components/shared/NavBarOthers";

function Home() {
  return (
    <div className="flex flex-col gap-14">
      <div>
        <div className="px-10 pt-3 bg-blue">
          <NavBarOthers />
        </div>
        <div className="bg-blue px-10 py-4">
          <HomeHeader />
        </div>
      </div>
      <div className="px-10 py-3">
        <HomeUpperPart />
      </div>
      <HomeGreenBar />
      <div className="px-10 py-3">
        <HomeLowerPart />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
