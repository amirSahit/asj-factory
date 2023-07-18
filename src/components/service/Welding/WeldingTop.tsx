function WeldingTop() {
  return (
    <div className="max-w-screen-md flex flex-col gap-4 text-xl">
      <h3 className="text-center text-2xl">Metal Welding</h3>
      <p>
        Welding is a process in fabrication that conjoins materials, usually
        metals, via coalescence. It mildly melts the parts that are being welded
        and adds filler which turns to molten material to forma bond between the
        parts. It doesn’t matter whether WIG, MT, MAG, stud welding, point
        welding, we can offer the optimum welding process for your component in
        all materials.
      </p>
      <p>
        With our welding table, which is equipped with a{" "}
        <strong>3D clamping system</strong>, we are able to manufacture the most
        complex welding groups at the highest precision and quality in our
        workspaces.
      </p>
      <div className="flex flex-row gap-5 items-center justify-between">
        <div className="w-[50%]">
          <p className="font-bold">We offer the following welding services:</p>
          <ul className="pl-4 flex flex-col gap-2 mt-2">
            <li>• TIG Welding</li>
            <li>• MIG Welding</li>
            <li>• MAG Welding</li>
            <li>• Point Welding</li>
            <li>• Stud Welding</li>
          </ul>
        </div>
        <img
          src="static/images/welding2.jpg"
          alt="Man wedling metal"
          className="h-[250px]"
        />
      </div>
    </div>
  );
}

export default WeldingTop;
