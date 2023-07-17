import AssembliesAndMountingTop from "./AssembliesAndMounting/AssembliesAndMountingTop";
import CNCTurretPunchingTop from "./CNCTurretPunching/CNCTurretPunchingTop";
import DeburringTop from "./Deburring/DeburringTop";
import DesignAndDevelopment from "./DesignAndDevelopment/DesignAndDevelopment";
import FormingTop from "./Forming/FormingTop";
import LaserAndPlasmaCuttingTop from "./LaserAndPlasmaCutting/LaserAndPlasmaCuttingTop";
import SurfaceTechnologyTop from "./SurfaceTechnology/SurfaceTechnologyTop";
import WeldingTop from "./Welding/WeldingTop";

type Props = {
  selected: number;
};

function SwitchServiceTop({ selected }: Props) {
  return (
    <div>
      {selected === 0 && <DesignAndDevelopment />}
      {selected === 1 && <CNCTurretPunchingTop />}
      {selected === 2 && <LaserAndPlasmaCuttingTop />}
      {selected === 3 && <DeburringTop />}
      {selected === 4 && <FormingTop />}
      {selected === 5 && <WeldingTop />}
      {selected === 6 && <AssembliesAndMountingTop />}
      {selected === 7 && <SurfaceTechnologyTop />}
    </div>
  );
}

export default SwitchServiceTop;
