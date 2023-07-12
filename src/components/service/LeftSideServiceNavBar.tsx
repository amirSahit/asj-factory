import clsx from "clsx";

type Props = {
  isClicked: number;
  setIsClicked: React.Dispatch<React.SetStateAction<number>>;
};

function LeftSideServiceNavBar({ isClicked, setIsClicked }: Props) {
  return (
    <ul className="bg-blue flex flex-col justify-between text-left gap-8 items-start px-10 py-10">
      <button
        onClick={() => setIsClicked(1)}
        className={clsx(
          isClicked === 1
            ? "text-lightYellow text-left"
            : "text-white text-left"
        )}
      >
        Design & Development
      </button>
      <button
        onClick={() => setIsClicked(2)}
        className={clsx(
          isClicked === 2
            ? "text-lightYellow text-left"
            : "text-white text-left"
        )}
      >
        CNC Turret Punching
      </button>
      <button
        onClick={() => setIsClicked(3)}
        className={clsx(
          isClicked === 3
            ? "text-lightYellow text-left"
            : "text-white text-left"
        )}
      >
        Laser & Plasma Cutting
      </button>
      <button
        onClick={() => setIsClicked(4)}
        className={clsx(
          isClicked === 4
            ? "text-lightYellow text-left"
            : "text-white text-left"
        )}
      >
        Deburring
      </button>
      <button
        onClick={() => setIsClicked(5)}
        className={clsx(
          isClicked === 5
            ? "text-lightYellow text-left"
            : "text-white text-left"
        )}
      >
        Forming
      </button>
      <button
        onClick={() => setIsClicked(6)}
        className={clsx(
          isClicked === 6
            ? "text-lightYellow text-left"
            : "text-white text-left"
        )}
      >
        Welding
      </button>
      <button
        onClick={() => setIsClicked(7)}
        className={clsx(
          isClicked === 7
            ? "text-lightYellow text-left"
            : "text-white text-left"
        )}
      >
        Assemblies / Mounting
      </button>
      <button
        onClick={() => setIsClicked(8)}
        className={clsx(
          isClicked === 8
            ? "text-lightYellow text-left"
            : "text-white text-left"
        )}
      >
        Surface Technology
      </button>
    </ul>
  );
}

export default LeftSideServiceNavBar;
