import CNCTurretPunchingBottom from "./CNCTurretPunching/CNCTurretPunchingBottom";
import DesignAndDevelopmentBottom from "./DesignAndDevelopment/DesignAndDevelopmentBottom";

type Props = {
  isClicked: number;
};

function SwitchServiceBottom({ isClicked }: Props) {
  return (
    <>
      {isClicked === 1 && <DesignAndDevelopmentBottom />}
      {isClicked === 2 && <CNCTurretPunchingBottom />}
    </>
  );
}

export default SwitchServiceBottom;
