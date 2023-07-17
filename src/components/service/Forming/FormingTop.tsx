function FormingTop() {
  return (
    <div className="max-w-screen-md flex flex-col gap-4 text-xl">
      <h3 className="text-2xl text-center">Forming and Bending</h3>
      <p>
        After cutting is often the forming of the parts as needed. Forming can
        be used in metalworking to bend, roll, and shape pieces to reach their
        desired form.Also in this field of sheet metal fabrication. We offer the
        highest level of expertise and technology. With a{" "}
        <strong>hydraulic CNC press brake</strong> and built-in angle measuring
        systems and constant bending force distribution, we achieve perfect
        results from the first part. This avoids unnecessary scrap and sample
        parts and offers our customers{" "}
        <strong>a noteworthy price advantage.</strong>
      </p>
      <div className="flex flex-row justify-between items-center gap-5">
        <div>
          <p className="font-bold">We offer you:</p>
          <ul className="pl-4 flex flex-col gap-2">
            <li>
              • Forming and Bending of steel, stainless steel and aluminum parts
            </li>
            <li>• CNC-monitored bending and forming process</li>
            <li>• Single parts and small quantities at fair prices too</li>
            <li>• We also take over the further processing steps if desired</li>
          </ul>
        </div>
        <img
          src="\static\images\Forming2.jpg"
          alt="Laser Cutter"
          className="w-[370px]"
        />
      </div>
    </div>
  );
}

export default FormingTop;
