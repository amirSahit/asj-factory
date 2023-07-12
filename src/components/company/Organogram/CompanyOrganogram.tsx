function CompanyOrganogram() {
  return (
    <div className="flex flex-row items-center justify-center px-10">
      <div className="flex flex-col gap-2 w-[40%]">
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
      <img
        src="\static\images\companyOrganogram.jpg"
        alt="Laser Cutter"
        className="w-[50%]"
      />
    </div>
  );
}

export default CompanyOrganogram;
