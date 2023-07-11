import AssembliesAndMountingTop from "./AssembliesAndMounting/AssembliesAndMountingTop";
import CNCTurretPunchingTop from "./CNCTurretPunching/CNCTurretPunchingTop";
import DeburringTop from "./Deburring/DeburringTop";
import DesignAndDevelopment from "./DesignAndDevelopment/DesignAndDevelopment";
import FormingTop from "./Forming/FormingTop";
import LaserAndPlasmaCuttingTop from "./LaserAndPlasmaCutting/LaserAndPlasmaCuttingTop";
import SurfaceTechnologyTop from "./SurfaceTechnology/SurfaceTechnologyTop";
import WeldingTop from "./Welding/WeldingTop";

type Props = {
  isClicked: number;
};

function SwitchServiceTop({ isClicked }: Props) {
  return (
    <>
      {isClicked === 1 && <DesignAndDevelopment />}
      {isClicked === 2 && <CNCTurretPunchingTop />}
      {isClicked === 3 && <LaserAndPlasmaCuttingTop />}
      {isClicked === 4 && <DeburringTop />}
      {isClicked === 5 && <FormingTop />}
      {isClicked === 6 && <WeldingTop />}
      {isClicked === 7 && <AssembliesAndMountingTop />}
      {isClicked === 8 && <SurfaceTechnologyTop />}
    </>
  );
}

export default SwitchServiceTop;
