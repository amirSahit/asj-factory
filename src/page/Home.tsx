import { useMediaQuery } from "react-responsive";
import HomeComponentsMobile from "../componentsMobile/home/HomeComponentsMobile";
import HomePageDesktop from "../components/home/HomePageDesktop";

function Home() {
  const isMobile = useMediaQuery({ maxWidth: 1024 });

  return <>{isMobile ? <HomeComponentsMobile /> : <HomePageDesktop />}</>;
}

export default Home;
