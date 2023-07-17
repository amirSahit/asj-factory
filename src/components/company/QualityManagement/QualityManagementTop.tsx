function QualityManagementTop() {
  return (
    <body className="p-10 text-xl flex flex-col gap-10">
      <h2 className="text-blue text-bold text-4xl text-center">
        Quality Management
      </h2>
      <div className="flex flex-row justify-around">
        <div className="flex flex-col gap-2">
          <h3>Quality Assurance</h3>
          <p className="w-[500px]">
            Quality Assurance (QA) prevents mistakes and defects in manufactured
            products when delivering products to our customers. We apply QA
            processes to physical products in pre-production in order to verify
            the final product will meet all specification. We believe our
            customers know their products and needs best. Therefore, we work at
            partnering with our customers to achieve the best products and
            solutions.
          </p>
          <strong>
            Our goal is not only to meet expectations, but to exceed them.
          </strong>
        </div>
        <img
          src="public\static\images\laser-2795233_1920.jpg"
          className="w-[400px]"
        />
      </div>
      <div className="flex flex-row justify-around">
        <p className="p-10 bg-green text-white text-bold text-2xl flex flex-col justify-center items-center text-center w-[400px]">
          We work according to the ISO 9001 quality management system.
        </p>
        <div className="w-[500px] flex flex-col gap-3">
          <h2>Our Philosophy</h2>
          <ul>
            <li>
              • <strong>High quality and consistency:</strong> our philosophy of
              quality refers also to our manufacturing processes. Our products
              are manufactured with high quality and consistency
            </li>
            <li>
              • <strong>Final products:</strong> consistent quality and assures
              our final products pass our strict quality assurance requirements
            </li>
            <li>
              • <strong>Quality controls:</strong> all production stages are
              subject to continuous throughout the production process.
            </li>
            <li>
              • <strong>Test results:</strong> all test results are carefully
              documented and recorded.all test data can be tracked over time and
              be accessed as needed
            </li>
            <li>
              • <strong>Measurement records.</strong>
            </li>
          </ul>
          <p className="w-[500px]"></p>
        </div>
      </div>
    </body>
  );
}

export default QualityManagementTop;
