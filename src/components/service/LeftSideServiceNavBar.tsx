import clsx from "clsx";
import { HiChevronRight } from "react-icons/hi";
import { services } from "../../componentsMobile/service/ServicesButton";
type Props = {
  selected: number;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
};

function LeftSideServiceNavBar({ selected, setSelected }: Props) {
  return (
    <ul className="bg-footer flex flex-col justify-around text-left gap-2 items-start px-5 py-5 w-[440px]">
      {services.map((service, idx) => (
        <div
          onClick={() => setSelected(idx)}
          key={idx}
          className="flex flex-row bg-blue px-2 py-4 justify-between text-white hover:text-lightYellow w-full text-xl"
        >
          <button
            className={clsx(
              selected === idx ? "text-lightYellow text-left" : ""
            )}
          >
            {service}
          </button>
          <HiChevronRight
            className={clsx(
              "w-[25px] h-[25px]",
              selected === idx ? "text-lightYellow" : ""
            )}
          />
        </div>
      ))}
    </ul>
  );
}

export default LeftSideServiceNavBar;
