import Icons from "../home/Icons";
import { IoDesktop, IoSync, IoTrendingUp, IoGitNetwork } from "react-icons/io5";

function GreenBarService() {
  return (
    <div className="bg-green flex flex-row justify-around px-4 py-4 mt-10">
      <Icons
        icon={<IoSync className="react-icons" />}
        description={"The Experience of a Qualified Team"}
      />
      <Icons
        icon={<IoDesktop className="react-icons" />}
        description={"State-of-the art CAD technology"}
      />
      <Icons
        icon={<IoTrendingUp className="react-icons" />}
        description={"Cost-optimized designs suitable for production"}
      />
      <Icons
        icon={<IoGitNetwork className="react-icons" />}
        description={"Data exchange in all systems"}
      />
    </div>
  );
}

export default GreenBarService;
