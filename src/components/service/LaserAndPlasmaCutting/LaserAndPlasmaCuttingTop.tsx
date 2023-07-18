function LaserAndPlasmaCuttingTop() {
  return (
    <div className="max-w-screen-md flex flex-col gap-4 text-xl">
      <h3 className="text-2xl text-center">Laser and Plasma Cutting</h3>
      <p>
        We offer custom laser cutting services, including stainless steel laser
        cutting. We partner with other local companies and thus can offer laser
        cutting services to cut almost any material, including:
      </p>
      <div className="flex flex-row justify-around items-center px-10">
        <ul className="flex flex-col gap-5">
          <li>• Stainless Steal</li>
          <li>• Carbon Steel</li>
          <li>• Acrylic</li>
          <li>• Titanium</li>
          <li>• Aluminium</li>
          <li>• Brass</li>
        </ul>
        <img
          src="static/images/Laser_Cutting.jpg"
          alt="Laser Cutter"
          className="h-[300px] w-[400px]"
        />
      </div>
      <p className="text-green font-bold">
        We offer the most competitive prices for our custom laser cutting.
      </p>
    </div>
  );
}

export default LaserAndPlasmaCuttingTop;
