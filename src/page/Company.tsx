import { useMediaQuery } from "react-responsive";
import CompanyComponentsMobile from "../componentsMobile/contact/CompanyComponentsMobile";
import CompanyPageDesktop from "../components/company/CompanyPageDesktop";

function Company() {
  const isMobile = useMediaQuery({ maxWidth: 1024 });

  return <>{isMobile ? <CompanyComponentsMobile /> : <CompanyPageDesktop />}</>;
}

export default Company;
