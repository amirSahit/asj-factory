import QualityManagementBottom from "./QualityManagement/QualityManagementBottom";

type Props = {
  isClicked: number;
};

function SwitchCompanyBottom({ isClicked }: Props) {
  return <>{isClicked === 2 && <QualityManagementBottom />}</>;
}

export default SwitchCompanyBottom;
