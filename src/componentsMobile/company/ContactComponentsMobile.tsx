import ContactForm from "../ContactForm";
import FooterMobile from "../shared/FooterMobile";
import NavBarMobile from "../shared/NavBarMobile";

function ContactComponentsMobile() {
  return (
    <div className="bg-blue flex flex-col text-white">
      <NavBarMobile />
      <ContactForm />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6608.954867340235!2d-121.56871229790251!3d38.579586563181465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ad46afe6660cb%3A0xac28556d550936b6!2s752%20Northport%20Dr%2C%20West%20Sacramento%2C%20CA%2095691%2C%20USA!5e0!3m2!1sen!2sde!4v1689164445008!5m2!1sen!2sde"
        className="border-2 w-full p-2 bg-white"
        loading="lazy"
      ></iframe>
      <FooterMobile />
    </div>
  );
}

export default ContactComponentsMobile;
