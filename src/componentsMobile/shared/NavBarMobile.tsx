import { IoMenu } from "react-icons/io5";
import Icons from "../../components/home/Icons";

function NavBarMobile() {
  return (
    <header className="flex flex-row justify-between items-center p-2">
      <img
        src="/static/images/Logo_ASJ_2018.jpg"
        className="w-[40%] "
        alt="ASJ LOGO"
      />
      <Icons icon={<IoMenu className="react-icons-mobile" />} />
    </header>
  );
}

export default NavBarMobile;
