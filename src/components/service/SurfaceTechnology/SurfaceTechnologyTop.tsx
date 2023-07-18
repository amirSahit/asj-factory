function SurfaceTechnologyTop() {
  return (
    <div className="max-w-screen-md flex flex-col gap-4 text-xl">
      <h3 className="text-2xl text-center">Surface Technology</h3>
      <div className="flex flex-row items-start gap-5">
        <p>
          Surface technology in the context of metal sheet fabrication refers to
          the various processes and techniques used to modify and enhance the
          surface properties of metal sheets. These processes are aimed at
          improving the functionality, durability, appearance, and performance
          of the metal sheets.
        </p>{" "}
        <img
          src="static/images/surfacingTechnology.jpg"
          alt="Tool laying on paper"
          className="w-[250px]"
        />
      </div>
      <p className="font-bold">We offer surface treatment techniques:</p>
      <div className="flex flex-row">
        <div>
          <ul className="pl-4">
            <li>
              • Grinding of laser, punched and formed parts with your desired
              grain
            </li>
            <li>• Uniform edge rounding</li>
            <li>• Deburring of workpieces</li>
            <li>• Brush optics</li>
            <li>• Polishing</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <ul className="pl-5">
            <li>• Powder coating</li>
            <li>• Painting</li>
            <li>• Enclosures</li>
            <li>• Anodizing, by partnering with other local companies</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SurfaceTechnologyTop;
