function SurfaceTechnologyBottom() {
  return (
    <div className="flex flex-row gap-10 justify-around items-center px-10 py-5">
      <div className="flex flex-col gap-2">
        <h3>We also offer you further surface finishes:</h3>
        <ul className="pl-5">
          <li>• Powder coating</li>
          <li>• Painting</li>
          <li>• Enclosures</li>
          <li>• Anodizing, by partnering with other local companies</li>
        </ul>
      </div>
      <img
        src="\static\images\surfacingTechnology.jpg"
        alt="Tool laying on paper"
        className="imageShadow w-[40%] h-[40%]"
      />
    </div>
  );
}

export default SurfaceTechnologyBottom;
