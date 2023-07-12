import CompanyOrganogram from "./Organogram/CompanyOrganogram";
import QualityManagementBottom from "./QualityManagement/QualityManagementBottom";

type Props = {
  isClicked: number;
};

function SwitchCompanyBottom({ isClicked }: Props) {
  return (
    <>
      {isClicked === 2 && <QualityManagementBottom />}
      {isClicked === 3 && <CompanyOrganogram />}
    </>
  );
}

export default SwitchCompanyBottom;
