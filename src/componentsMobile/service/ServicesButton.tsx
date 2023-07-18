import { IoChevronForward } from "react-icons/io5";
import Icons from "../../components/home/Icons";
import clsx from "clsx";
import { useState } from "react";

export const services = [
  "Design & Development",
  "CNC Turret Punching",
  "Laser & Plasma Cuttings",
  "Deburring",
  "Forming",
  "Welding",
  "Assemblies / Mounting",
  "Surface Technology",
];

type Props = {
  choice: number;
  setChoice: React.Dispatch<React.SetStateAction<number>>;
};

function ServicesButton({ choice, setChoice }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="flex flex-row justify-between">
        {services.map((service, idx) => (
          <button
            className={clsx(
              idx !== choice
                ? "hidden"
                : "text-white text-left px-4 py-5 w-full"
            )}
            onClick={() => setOpen(!open)}
            key={idx}
          >
            {idx === choice && <h2 className="text-3xl">{service}</h2>}
          </button>
        ))}
        <button onClick={() => setOpen(!open)}>
          <Icons icon={<IoChevronForward className="react-icons-mobile" />} />
        </button>
      </div>
      {open && (
        <ul className="bg-white absolute top-28 right-0 pr-10 pl-5 py-4 flex flex-col gap-4 items-start">
          {services.map((service, idx) => (
            <button
              className={clsx(idx === choice ? "text-yellow" : "text-blue")}
              onClick={() => {
                setChoice(idx), setOpen(!open);
              }}
            >
              {service}
            </button>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ServicesButton;
