import { useMediaQuery } from "react-responsive";
import ServiceComponentsMobile from "../componentsMobile/service/ServiceComponentsMobile";
import ServicePageDesktop from "../components/service/ServicePageDesktop";

function Service() {
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  return <>{isMobile ? <ServiceComponentsMobile /> : <ServicePageDesktop />}</>;
}

export default Service;
