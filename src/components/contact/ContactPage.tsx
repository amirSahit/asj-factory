import Footer from "../shared/Footer";
import HeaderNavBar from "../shared/HeaderNavBar";
import {
  HiPhoneOutgoing,
  HiOutlineMail,
  HiLocationMarker,
} from "react-icons/hi";

function ContactPage() {
  return (
    <article>
      <HeaderNavBar />
      <figure className="relative h-[500px] flex flex-col justify-center items-center">
        <h2 className="text-black text-6xl px-3 py-6  z-10">Contact Us</h2>
        <img src="static/images/image 14.jpg" className="absolute opacity-50" />
      </figure>
      <section className="flex flex-row justify-around mt-10">
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6608.954867340235!2d-121.56871229790251!3d38.579586563181465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ad46afe6660cb%3A0xac28556d550936b6!2s752%20Northport%20Dr%2C%20West%20Sacramento%2C%20CA%2095691%2C%20USA!5e0!3m2!1sen!2sde!4v1689164445008!5m2!1sen!2sde"
            width="600"
            height="450"
            className="border-2"
            loading="lazy"
          />
        </figure>
        <section className="flex flex-col justify-between">
          <div className="flex flex-col justify-center items-center text-blue">
            <HiOutlineMail className="w-[80px] h-[80px] " />
            <p className="text-2xl">asj.sheetmetalfab@gmail.com</p>
          </div>
          <div className="flex flex-col justify-center items-center text-blue">
            <HiPhoneOutgoing className="w-[80px] h-[80px] " />
            <p className="text-2xl">(916) 841-5089</p>
          </div>

          <div className="flex flex-col justify-center items-center text-blue">
            <HiLocationMarker className="w-[80px] h-[80px] " />
            <p className="text-2xl">752 Nothport Drive, Suite A</p>
            <p className="text-2xl">West Sacramento, CA 95691</p>
          </div>
        </section>
      </section>
      <Footer />
    </article>
  );
}

export default ContactPage;
