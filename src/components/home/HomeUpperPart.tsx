function HomeUpperPart() {
  return (
    <div className="flex flex-row gap-16">
      <div className="flex flex-col gap-8">
        <div className="header-text">
          <h2>Who we are.</h2>
          <p>
            As an established company in sheet metal fabrication, ASJ
            specialises in all major processes of high quality custom
            manufacturing services. Our team is constantly working on innovative
            products, and we guarantee high quality and punctual delivery.
          </p>
        </div>
        <div className="header-text">
          <h2>Your partner from start to finish.</h2>
          <p>
            ASJ is the ideal partner when it comes to CNC sheet metal
            fabrication. We are customer-oriented, whether you need a small item
            or a complex product to construct. We support you in all areas -
            from the development, through the complete fabrication of your
            product, including finishing, forming, drilling, tapping, welding
            and custom assembly.
          </p>
        </div>
      </div>
      <img
        src="public/static/images/image-home.jpg"
        className="w-[40%] h-[40%] imageShadow"
      />
    </div>
  );
}

export default HomeUpperPart;
