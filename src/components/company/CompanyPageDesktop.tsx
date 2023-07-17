import Footer from "../shared/Footer";
import HeaderNavBar from "../shared/HeaderNavBar";
import CompanyOrganogram from "./Organogram/CompanyOrganogram";
import QualityManagementTop from "./QualityManagement/QualityManagementTop";

function CompanyPageDesktop() {
  return (
    <div>
      <HeaderNavBar />
      <div className="serviceBg h-[500px] flex flex-col justify-center items-center">
        <h2 className="text-white text-6xl px-3 py-6 bg-blue/60">
          Our Company
        </h2>
      </div>
      <QualityManagementTop />
      <CompanyOrganogram />
      <Footer />
    </div>
  );
}

export default CompanyPageDesktop;
