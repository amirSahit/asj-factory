import GreenBarService from "../GreenBarService";

function DesignAndDevelopmentBottom() {
  return (
    <>
      <div className="flex flex-row justify-around items-center px-10 py-5">
        <p className="text-center w-[400px] font-bold">
          Every product begins with the idea, followed by the search for the
          best solution. Our design department, with the experience of diverse
          applications, is at your disposal. We will make your idea a reality.
        </p>
        <img
          src="\static\images\Design_ASJ_04.gif"
          alt="Tool laying on paper"
          className="imageShadow w-[40%] h-[40%]"
        />
      </div>
      <GreenBarService />
      <div className="flex flex-row gap-5 justify-around items-center px-10 py-5">
        <div className="w-1/2 flex flex-col gap-2">
          <h3>Our high standards for you</h3>
          <p>
            Every product begins with the idea, followed by the search for the
            best solution. Our design department, with the experience of diverse
            applications, is at your disposal. We will make your idea a reality.
          </p>
        </div>
        <img
          src="\static\images\Design_ASJ_02.gif"
          alt="Tool laying on paper"
          className="imageShadow w-[40%] h-[40%]"
        />
      </div>
    </>
  );
}

export default DesignAndDevelopmentBottom;
