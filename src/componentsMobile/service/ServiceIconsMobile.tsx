import { IoDesktop, IoSync, IoTrendingUp, IoGitNetwork } from "react-icons/io5";

function ServiceIconsMobile() {
  return (
    <section className="flex flex-row justify-around items-start gap-2 p-5 w-full text-white text-center flex-wrap">
      <figure className="flex flex-col items-center">
        <IoSync className="react-icons" />
        <figcaption className="text-base">A Qualified Team</figcaption>
      </figure>
      <figure className="flex flex-col items-center w-[115px]">
        <IoTrendingUp className="react-icons" />
        <figcaption className="text-base">Cost-optimized Designs</figcaption>
      </figure>

      <figure className="flex flex-col items-center">
        <IoDesktop className="react-icons" />
        <figcaption className="text-base">CAD technology</figcaption>
      </figure>
      <figure className="flex flex-col items-center">
        <IoGitNetwork className="react-icons" />
        <figcaption className="text-base">Data exchange</figcaption>
      </figure>
    </section>
  );
}

export default ServiceIconsMobile;
