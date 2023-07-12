import CompanyOrganogramTop from "./Organogram/CompanyOrganogramTop";
import QualityManagementTop from "./QualityManagement/QualityManagementTop";
import CarriersTop from "./carriers/CarriersTop";

type Props = {
  isClicked: number;
};

function SwitchCompany({ isClicked }: Props) {
  return (
    <>
      {isClicked === 2 && <QualityManagementTop />}
      {isClicked === 3 && <CompanyOrganogramTop />}
      {isClicked === 4 && <CarriersTop />}
    </>
  );
}

export default SwitchCompany;
