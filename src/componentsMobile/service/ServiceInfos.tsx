import AssembliesAndMountingMobile from "./AssembliesAndMountingMobile";
import CNCTurretPunchingMobile from "./CNCTurretPunchingMobile";
import DeburringMobile from "./DeburringMobile";
import DesignAndDevelopmentMobile from "./DesignAndDevelopmentMobile";
import FormingMobile from "./FormingMobile";
import LaserAndPlasmaCuttingMobile from "./LaserAndPlasmaCuttingMobile";
import SurfaceTechnologyMobile from "./SurfaceTechnologyMobile";
import WeldingMobile from "./WeldingMobile";

type Props = {
  choice: number;
};

function ServiceInfos({ choice }: Props) {
  return (
    <main className="text-justify text-white px-4">
      {choice === 0 && <DesignAndDevelopmentMobile />}
      {choice === 1 && <CNCTurretPunchingMobile />}
      {choice === 2 && <LaserAndPlasmaCuttingMobile />}
      {choice === 3 && <DeburringMobile />}
      {choice === 4 && <FormingMobile />}
      {choice === 5 && <WeldingMobile />}
      {choice === 6 && <AssembliesAndMountingMobile />}
      {choice === 7 && <SurfaceTechnologyMobile />}
    </main>
  );
}

export default ServiceInfos;
