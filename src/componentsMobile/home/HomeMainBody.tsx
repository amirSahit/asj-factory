import { useState } from "react";
import Icons from "../../components/home/Icons";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

function HomeMainBody() {
  const [change, setChange] = useState(0);

  if (change === 3) {
    setChange(0);
  } else if (change === -1) {
    setChange(2);
  }

  return (
    <>
      <div className="p-3">
        {change === 0 && (
          <img
            src="/static/images/image-home.jpg"
            alt="Bridge in Dessau/Germany"
            className="p-1 bg-white"
          />
        )}
        {change === 1 && (
          <img
            src="public\static\images\laser-2795233_1920.jpg"
            alt="Laser cutter cutting metal"
            className="p-1 bg-white"
          />
        )}
        {change === 2 && (
          <img src="/static/images/Forming2.jpg" className="p-1 bg-white" />
        )}
      </div>
      <div className="text-white flex flex-row justify-between text-center">
        <button onClick={() => setChange(change - 1)}>
          <Icons icon={<IoChevronBack className="react-icons-mobile" />} />
        </button>
        {change === 0 && <h3 className="text-3xl">Who we are.</h3>}
        {change === 1 && (
          <h3 className="text-3xl">Your vision, our expertise.</h3>
        )}
        {change === 2 && (
          <h3 className="text-3xl">Your partner from start to finish.</h3>
        )}
        <button onClick={() => setChange(change + 1)}>
          <Icons icon={<IoChevronForward className="react-icons-mobile" />} />
        </button>
      </div>
      {change === 0 && (
        <div className="p-5 flex flex-col gap-2">
          <p className="text-justify text-white text-xl">
            As an established company in sheet metal fabrication, ASJ
            specialises in all major processes of high quality custom
            manufacturing services. Our team is constantly working on innovative
            products, and we guarantee high quality and punctual delivery.
          </p>
        </div>
      )}
      {change === 1 && (
        <p className="text-justify text-white p-5 text-xl">
          Our talented production team has many years of experience and are
          professionals in bending, milling, punching and all sheet metal
          production. ASJ transforms raw material into high precision parts.
          Whether you are a small business or a large industrial group, our
          experienced employees and our excellent equipment make it possible to
          meet your requirements - flexible, reliable, and solution-oriented.
        </p>
      )}
      {change === 2 && (
        <p className="text-justify text-white p-5 text-xl">
          ASJ is the ideal partner when it comes to CNC sheet metal fabrication.
          We are customer-oriented, whether you need a small item or a complex
          product to construct. We support you in all areas - from the
          development, through the complete fabrication of your
          product, including finishing, forming, drilling, tapping, welding and
          custom assembly.
        </p>
      )}
    </>
  );
}

export default HomeMainBody;
