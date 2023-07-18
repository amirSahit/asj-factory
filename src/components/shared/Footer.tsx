function Footer() {
  return (
    <div className="bg-footer text-black px-10 py-5 mt-10 border-y-2 border-slate-600">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col gap-5">
          <h3 className="text-2xl font-bold">ASJ Sheet Metal Fabrication</h3>
          <div className="text-xl">
            <p>752 Nothport Drive, Suite A</p>
            <p>West Sacramento, CA 95691</p>
          </div>
          <div className="text-xl">
            <p>asj.sheetmetalfab@gmail.com</p>
            <p>(916) 841-5089</p>
          </div>
        </div>
        <img
          src="static/images/Logo_ASJ_2018.jpg"
          width={300}
          height={110}
          alt="ASJ LOGO"
        />
      </div>
      <p className="text-md font-bold text-center mt-5">
        Copyright © 2023 ASJ Sheet Metal Fabrication - All Rights Reserved.
      </p>
    </div>
  );
}

export default Footer;
