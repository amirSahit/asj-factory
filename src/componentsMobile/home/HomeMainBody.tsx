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
      {change === 0 && (
        <div className="text-white p-10">
          <button
            className="absolute left-4 top-60 "
            onClick={() => setChange(change - 1)}
          >
            <Icons icon={<IoChevronBack className="react-icons-mobile" />} />
          </button>
          <div>
            <h3 className="text-3xl">Who we are.</h3>
            <p className="text-justify">
              As an established company in sheet metal fabrication, ASJ
              specialises in all major processes of high quality custom
              manufacturing services. Our team is constantly working on
              innovative products, and we guarantee high quality and punctual
              delivery.
            </p>
            <button
              className="absolute right-[-20px] top-60"
              onClick={() => setChange(change + 1)}
            >
              <Icons
                icon={<IoChevronForward className="react-icons-mobile" />}
              />
            </button>
            <div />
          </div>
        </div>
      )}
      {change === 1 && (
        <div className="text-white p-10">
          <button
            className="absolute left-4 top-60 "
            onClick={() => setChange(change - 1)}
          >
            <Icons icon={<IoChevronBack className="react-icons-mobile" />} />
          </button>
          <div>
            <h3 className="text-3xl">Your vision, our expertise.</h3>
            <p className="text-justify">
              Our talented production team has many years of experience and are
              professionals in bending, milling, punching and all sheet metal
              production. ASJ transforms raw material into high precision parts.
              Whether you are a small business or a large industrial group, our
              experienced employees and our excellent equipment make it possible
              to meet your requirements - flexible, reliable, and
              solution-oriented.
            </p>
            <button
              className="absolute right-[-20px] top-60"
              onClick={() => setChange(change + 1)}
            >
              <Icons
                icon={<IoChevronForward className="react-icons-mobile" />}
              />
            </button>
            <div />
          </div>
        </div>
      )}
      {change === 2 && (
        <div className="text-white p-10">
          <button
            className="absolute left-4 top-60 "
            onClick={() => setChange(change - 1)}
          >
            <Icons icon={<IoChevronBack className="react-icons-mobile" />} />
          </button>
          <div>
            <h3 className="text-3xl">Your partner from start to finish.</h3>
            <p className="text-justify">
              ASJ is the ideal partner when it comes to CNC sheet metal
              fabrication. We are customer-oriented, whether you need a small
              item or a complex product to construct. We support you in all
              areas - from the development, through the complete fabrication of
              your product, including finishing, forming, drilling, tapping,
              welding and custom assembly.
            </p>
            <button
              className="absolute right-[-20px] top-60"
              onClick={() => setChange(change + 1)}
            >
              <Icons
                icon={<IoChevronForward className="react-icons-mobile" />}
              />
            </button>
            <div />
          </div>
        </div>
      )}
    </>
  );
}

export default HomeMainBody;
