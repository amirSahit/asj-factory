import clsx from "clsx";

type Props = {
  isClicked: number;
  setIsClicked: React.Dispatch<React.SetStateAction<number>>;
};

function LeftSideCompanyNavBar({ isClicked, setIsClicked }: Props) {
  return (
    <ul className="bg-blue flex flex-col justify-between text-left gap-8 items-start px-10 py-10">
      <button
        onClick={() => setIsClicked(1)}
        className={clsx(isClicked === 1 ? "text-lightYellow" : "text-white")}
      >
        Facts & History
      </button>
      <button
        onClick={() => setIsClicked(2)}
        className={clsx(isClicked === 2 ? "text-lightYellow" : "text-white")}
      >
        Quality Management
      </button>
      <button
        onClick={() => setIsClicked(3)}
        className={clsx(isClicked === 3 ? "text-lightYellow" : "text-white")}
      >
        Company Organogram
      </button>
      <button
        onClick={() => setIsClicked(4)}
        className={clsx(isClicked === 4 ? "text-lightYellow" : "text-white")}
      >
        Carriers
      </button>
    </ul>
  );
}

export default LeftSideCompanyNavBar;
