import Footer from "../shared/Footer";
import HeaderNavBar from "../shared/HeaderNavBar";
import CompanyOrganogram from "./Organogram/CompanyOrganogram";
import QualityManagementTop from "./QualityManagement/QualityManagementTop";

function CompanyPageDesktop() {
  return (
    <div>
      <HeaderNavBar />
      <div className="relative h-[500px] flex flex-col justify-center items-center">
        <h2 className="text-black text-6xl px-3 py-6  z-10">Company Profile</h2>
        <img src="static/images/image 14.jpg" className="absolute opacity-50" />
      </div>
      <QualityManagementTop />
      <CompanyOrganogram />
      <Footer />
    </div>
  );
}

export default CompanyPageDesktop;
