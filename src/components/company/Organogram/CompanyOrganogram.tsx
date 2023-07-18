function CompanyOrganogram() {
  return (
    <div className="flex flex-col items-center gap-2 text-xl">
      <h2 className="text-blue text-bold text-4xl text-center">
        Company Organogram
      </h2>
      <div className="relative">
        <img
          src="static/images/companyOrganogram.jpg"
          alt="Company Organogram"
        />
        <p className="absolute bottom-44 left-0 bg-blue p-4 w-[250px] text-white text-center text-xl">
          <span className="text-lightYellow">ASJ</span> upholds a
          well-structured organization that ensures seamless operations and
          exceptional service delivery.
        </p>
      </div>
      <div className="flex flex-col gap-3 w-[800px]">
        <p>
          <strong>Quality management</strong> focuses on implementing proccesses
          and standards to consistently deliver products that meet or exceed
          customer expectations.
        </p>
        <p>
          <strong>Operations</strong> manages the entire production process,
          from project estimation and engineering solutions to efficient
          shipping logistics.
        </p>
        <p>
          Our <strong>Sales & Marketing</strong> team drives business growth
          through strategic planning, effective marketing, and successful sales
          techniques.
        </p>
        <p>
          <strong>Administration</strong> involves the coordination and
          management of various tasks, resources, and personnell to ensure
          effective organizational functioning.
        </p>
      </div>
    </div>
  );
}

export default CompanyOrganogram;
