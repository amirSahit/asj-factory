function WeldingBottom() {
  return (
    <div className="flex flex-row gap-5 items-center justify-around px-10">
      <div className="w-[50%]">
        <h3>The following are the types of welding services we can offer:</h3>
        <ul className="pl-4">
          <li>• TIG Welding</li>
          <li>• MIG Welding</li>
          <li>• MAG Welding</li>
          <li>• Point Welding</li>
          <li>• Stud Welding</li>
        </ul>
      </div>
      <img
        src="\static\images\welding2.jpg"
        alt="Man wedling metal"
        className="imageShadow w-[40%] h-[40%]"
      />
    </div>
  );
}

export default WeldingBottom;
