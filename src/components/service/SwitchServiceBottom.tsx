import AssembliesAndMountingBottom from "./AssembliesAndMounting/AssembliesAndMountingBottom";
import CNCTurretPunchingBottom from "./CNCTurretPunching/CNCTurretPunchingBottom";
import DeburringBottoms from "./Deburring/DeburringBottoms";
import DesignAndDevelopmentBottom from "./DesignAndDevelopment/DesignAndDevelopmentBottom";
import FormingBottom from "./Forming/FormingBottom";
import LaserAndPlasmaCuttingBottom from "./LaserAndPlasmaCutting/LaserAndPlasmaCuttingBottom";
import SurfaceTechnologyBottom from "./SurfaceTechnology/SurfaceTechnologyBottom";
import WeldingBottom from "./Welding/WeldingBottom";

type Props = {
  isClicked: number;
};

function SwitchServiceBottom({ isClicked }: Props) {
  return (
    <>
      {isClicked === 1 && <DesignAndDevelopmentBottom />}
      {isClicked === 2 && <CNCTurretPunchingBottom />}
      {isClicked === 3 && <LaserAndPlasmaCuttingBottom />}
      {isClicked === 4 && <DeburringBottoms />}
      {isClicked === 5 && <FormingBottom />}
      {isClicked === 6 && <WeldingBottom />}
      {isClicked === 7 && <AssembliesAndMountingBottom />}
      {isClicked === 8 && <SurfaceTechnologyBottom />}
    </>
  );
}

export default SwitchServiceBottom;
