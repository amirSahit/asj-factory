import { useMediaQuery } from "react-responsive";
import ContactPage from "../components/contact/ContactPage";
import Footer from "../components/shared/Footer";
import NavBarOthers from "../components/shared/NavBarOthers";
import ContactComponentsMobile from "../componentsMobile/company/ContactComponentsMobile";

function Contact() {
  const isMobile = useMediaQuery({ maxWidth: 1024 });

  return (
    <>
      {isMobile ? (
        <ContactComponentsMobile />
      ) : (
        <>
          <div className="px-10 py-3 bg-blue">
            <NavBarOthers />
          </div>
          <div className="px-10 py-5">
            <ContactPage />
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export default Contact;
