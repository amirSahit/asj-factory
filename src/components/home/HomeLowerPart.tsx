function HomeLowerPart() {
  return (
    <div className="flex flex-col gap-8">
      <div className="header-text">
        <h2>Your vision, our expertise.</h2>
        <p>
          Our talented production team has many years of experience and are
          professionals in bending, milling, punching and all sheet metal
          production. ASJ transforms raw material into high precision parts.
          Whether you are a small business or a large industrial group, our
          experienced employees and our excellent equipment make it possible tos
          meet your requirements - flexible, reliable, and solution-oriented.
        </p>
      </div>
      <div className="flex flex-row justify-around gap-14 items-center">
        <img
          src="\static\images\laser-cutter-cutting-metal.jpeg"
          alt="Laser cutter cutting metal"
          className="imageShadow w-[40%] h-[40%]"
        />
        <h2 className="w-[30%] text-center">
          We continually meet our goal of growth and customer satisfaction
          through effective employee management, customer involvement and
          continuous quality improvement.
        </h2>
      </div>
    </div>
  );
}

export default HomeLowerPart;
