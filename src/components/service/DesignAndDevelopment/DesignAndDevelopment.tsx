function DesignAndDevelopment() {
  return (
    <div className="max-w-screen-md flex flex-col gap-5 text-xl">
      <div className="flex flex-col gap-2">
        <h3 className="text-center text-2xl">Design and Product Development</h3>
        <p>
          During personal meetings with our customers, our experienced designers
          find the ideal solutions for implementing sheet metal designs. We work
          with customers on their exact needs for enclosures / chassis, panels,
          brackets, precision components, tight-tolerance machined parts and
          complex welded components.
        </p>
        <p>
          Using state-of-the-art 3D design programs, we create the computer
          models which allow our customers to thoroughly test their products
          before manufacturing. After customer approval, the first prototypes
          are produced, which then forms the basis for later manufacturing.
        </p>
      </div>
      <div className="flex flex-row gap-5">
        <div className="flex flex-col gap-2">
          <p className="font-bold">
            We create prototypes and production design in:
          </p>
          <ul className="pl-2">
            <li>• Sheet metal</li>
            <li>• Welded components</li>
            <li>• Mechanical assembly</li>
            <li>• Precision parts</li>
          </ul>
          <p className="text-green font-bold">
            Every product begins with the idea, followed by the search for the
            best solution. Our design department, with the experience of diverse
            applications, is at your disposal. We will make your idea a reality.
          </p>
        </div>
        <img src="\static\images\PIC_008-577x1024.jpg" className="h-[280px]" />
      </div>
    </div>
  );
}

export default DesignAndDevelopment;
