import ContactPage from "../components/contact/ContactPage";
import Footer from "../components/shared/Footer";
import NavBarOthers from "../components/shared/NavBarOthers";

function Contact() {
  return (
    <>
      <div className="px-10 py-3 bg-blue">
        <NavBarOthers />
      </div>
      <div className="px-10 py-5">
        <ContactPage />
      </div>
      <Footer />
    </>
  );
}

export default Contact;
