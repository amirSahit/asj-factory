import FooterMobile from "../shared/FooterMobile";
import NavBarMobile from "../shared/NavBarMobile";

function CompanyComponentsMobile() {
  return (
    <section className="bg-blue flex flex-col text-white">
      <NavBarMobile />
      <article className="flex flex-col gap-2 mb-10 px-4 mt-4">
        <h2 className="text-white text-bold text-3xl text-center">
          Quality Management
        </h2>
        <section className="flex flex-col justify-around gap-2">
          <div className="flex flex-col gap-2 text-center">
            <h3>Quality Assurance</h3>
            <p className="text-justify">
              Quality Assurance (QA) prevents mistakes and defects in
              manufactured products when delivering products to our customers.
              We apply QA processes to physical products in pre-production in
              order to verify the final product will meet all specification. We
              believe our customers know their products and needs best.
              Therefore, we work at partnering with our customers to achieve the
              best products and solutions.
            </p>
            <strong className="text-xl">
              Our goal is not only to meet expectations, but to exceed them.
            </strong>
          </div>
          <img
            src="static/images/laser-2795233_1920.jpg"
            className="p-1 bg-white"
          />
        </section>
        <section className="flex flex-col justify-around">
          <div className="flex flex-col gap-2 justify-center items-center">
            <h2>Our Philosophy</h2>
            <ul className="flex flex-col gap-2">
              <li>
                • <strong>High quality and consistency:</strong> our philosophy
                of quality refers also to our manufacturing processes. Our
                products are manufactured with high quality and consistency
              </li>
              <li>
                • <strong>Final products:</strong> consistent quality and
                assures our final products pass our strict quality assurance
                requirements
              </li>
              <li>
                • <strong>Quality controls:</strong> all production stages are
                subject to continuous throughout the production process.
              </li>
              <li>
                • <strong>Test results:</strong> all test results are carefully
                documented and recorded.all test data can be tracked over time
                and be accessed as needed
              </li>
              <li>
                • <strong>Measurement records.</strong>
              </li>
            </ul>
            <p className="p-10 bg-green border-2 border-white text-white text-bold text-2xl flex flex-col justify-center items-center text-center w-[400px]">
              We work according to the ISO 9001 quality management system.
            </p>
          </div>
        </section>
      </article>
      <FooterMobile />
    </section>
  );
}

export default CompanyComponentsMobile;
