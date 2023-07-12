function AssembliesAndMountingBottom() {
  return (
    <div className="flex flex-row gap-10 justify-around items-center px-10 py-5">
      <div className="flex flex-col gap-2 w-[50%]">
        <h3>Typical Parts:</h3>
        <ul className="pl-5">
          <li>• Prototype electrical cabinets</li>
          <li>• Control boxes</li>
          <li>• Enclosures</li>
          <li>• Computer chassis</li>
          <li>• Heat exchangers</li>
        </ul>
        <h3>Material Options:</h3>
        <p>
          Aluminum, Cold Rolled Steel, Stainless Steel, Galvanneal & Galvanized
          CRS
        </p>
      </div>
      <img
        src="\static\images\assembly.jpg"
        alt="Tool laying on paper"
        className="imageShadow w-[40%] h-[40%]"
      />
    </div>
  );
}

export default AssembliesAndMountingBottom;
