function CNCTurretPunchingTop() {
  return (
    <div className="max-w-screen-md flex flex-col gap-4">
      <div className="max-w-screen-md flex flex-col gap-2 text-xl">
        <h3 className="text-center text-2xl">CNC Turret Punching</h3>
        <p>
          Punching , or die-cutting, is a sheet metal forming method, which is
          used if metal sheet or plate parts have to be made with recurring
          recesses, cutouts, louvers or beads. If all the elements to be formed
          are the same, punching is superior to other cutting methods, such as
          laser cutting, in terms of production speed. Punching technology,
          still very much a modern technique, has sometimes been overshadowed by
          laser cutting. However, with modern automation techniques and enormous
          processing speeds, punching machines are often the far cheaper
          alternative to laser cutting.
        </p>
        <p>
          ASJ works with modern punch press technology, using an AMADA punch
          machine. We can guarantee the best accuracy and highest quality. We
          offer punching as an alternative to laser cutting due to its accuracy,
          quality and cheaper production cost.
        </p>
      </div>
      <div className="flex flex-row justify-between items-start text-xl">
        <ul>
          <li className="font-bold">Max. Sheet Size : 50” x 140”</li>
          <li className="font-bold">Max. Material Thickness: </li>
          <ul className="pl-4">
            <li>• Mild Steel: 0.325”</li>
            <li>• Stainless Steel: 0.125”</li>
            <li>• Aluminum: 0.325”</li>
          </ul>
        </ul>
        <img
          src="\static\images\PIC_010-1024x829.jpg"
          alt="Laser Cutter"
          className="h-[200px]"
        />
      </div>
    </div>
  );
}

export default CNCTurretPunchingTop;
