import { useMediaQuery } from "react-responsive";
import ContactPage from "../components/contact/ContactPage";
import ContactComponentsMobile from "../componentsMobile/company/ContactComponentsMobile";

function Contact() {
  const isMobile = useMediaQuery({ maxWidth: 1024 });

  return <>{isMobile ? <ContactComponentsMobile /> : <ContactPage />}</>;
}

export default Contact;
