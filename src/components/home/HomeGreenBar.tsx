import { IoThumbsUp, IoCash, IoSpeedometer, IoHome } from "react-icons/io5";
import Icons from "./Icons";

function HomeGreenBar() {
  return (
    <section className="bg-blue flex flex-row justify-around px-4 py-4">
      <Icons
        icon={<IoThumbsUp className="react-icons" />}
        description={"High quality finished products"}
      />
      <Icons
        icon={<IoCash className="react-icons" />}
        description={"Fair prices, whether small or large quantities"}
      />
      <Icons
        icon={<IoSpeedometer className="react-icons" />}
        description={"Fast and reliable at handling your project"}
      />
      <Icons
        icon={<IoHome className="react-icons" />}
        description={"All from one source"}
      />
    </section>
  );
}

export default HomeGreenBar;
