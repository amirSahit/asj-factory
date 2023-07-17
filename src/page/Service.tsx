import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import ServiceComponentsMobile from "../componentsMobile/service/ServiceComponentsMobile";
import ServicePageDesktop from "../components/service/ServicePageDesktop";

function Service() {
  const [isClicked, setIsClicked] = useState(1);
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  return <>{isMobile ? <ServiceComponentsMobile /> : <ServicePageDesktop />}</>;
}

export default Service;
