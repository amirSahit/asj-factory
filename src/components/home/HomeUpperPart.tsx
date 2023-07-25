function HomeUpperPart() {
  return (
    <article className="flex flex-col gap-16 mt-10 text-2xl">
      <div className="border-y border-y-3 border-blue flex flex-col justify-between items-start py-8 px-4">
        <h2 className="text-blue text-7xl font-normal">About Us</h2>
      </div>
      <article className="flex flex-col gap-8">
        <h2 className="text-4xl text-blue text-center">WHO WE ARE</h2>
        <section className="flex flex-row justify-around px-16 gap-10">
          <img
            src="static/images/laser-cutter-cutting-metal.jpeg"
            alt="Laser cutter cutting metal"
            className="w-[580px]"
          />
          <p className="w-[580px]">
            As an established company in
            <strong> sheet metal fabrication</strong>, ASJ specialises in all
            major processes of
            <strong> high quality custom manufacturing services</strong>. Our
            team is constantly working on innovative products, and we guarantee
            high quality and punctual delivery.
          </p>
        </section>
        <h2 className="text-4xl text-blue text-center">
          YOUR PARTNER FROM START TO FINISH
        </h2>
        <section className="flex flex-row justify-around px-16 gap-10">
          <p className="w-[580px]">
            ASJ is the ideal partner when it comes to
            <strong> CNC sheet metal fabrication</strong>. We are
            customer-oriented, whether you need a small item or a complex
            product to construct. We support you in all areas - from the
            development, through the complete fabrication of your product,
            including finishing, forming, drilling, tapping, welding and custom
            assembly.
          </p>
          <img src="static/images/Forming2.jpg" className="w-[580px]" />
        </section>
      </article>
    </article>
  );
}

export default HomeUpperPart;
