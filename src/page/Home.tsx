import HomeGreenBar from "../components/home/HomeGreenBar";
import HomeHeader from "../components/home/HomeHeader";
import HomeLowerPart from "../components/home/HomeLowerPart";
import HomeUpperPart from "../components/home/HomeUpperPart";
import HeaderNavBar from "../components/shared/HeaderNavBar";
import { router } from "../main";

function Home() {
  console.log(router.basename);
  return (
    <div className="flex flex-col gap-14">
      <div className="bg-blue px-10 py-3">
        <HeaderNavBar />
        <HomeHeader />
      </div>
      <div className="px-10 py-3">
        <HomeUpperPart />
      </div>
      <HomeGreenBar />
      <div className="px-10 py-3">
        <HomeLowerPart />
      </div>
    </div>
  );
}

export default Home;
