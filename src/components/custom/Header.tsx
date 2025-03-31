import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { MdOutlineHome } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { IoBasketSharp } from "react-icons/io5";
import { IoMdDownload } from "react-icons/io";
import { IoIosNotificationsOutline } from "react-icons/io";

const Header = () => {
  return (
    <>
      <div className="flex bg-[#121212] h-20 justify-between p-5 w-full items-center">
        <div className="flex gap-4 items-center">
          <img className="w-11 h-11 cursor-pointer" src="/logoAuth.png" alt="logo" />
          <div className="hidden lg:w-12 lg:h-12 lg:cursor-pointer lg:bg-gray-700 lg:rounded-full lg:flex lg:items-center lg:justify-center">
            <MdOutlineHome color="white" className="w-10 h-10" />
          </div>
        </div>
        <Label className="flex gap-3  items-center">
          <FaSearch className="w-7 h-7" color="white" />
            <Input className="text-white" placeholder="Что хочешь включить?" />
            <IoBasketSharp color="white" className="hidden lg:w-8 lg:h-8 lg:cursor-pointer lg:flex " />
          </Label>
        <div className="flex items-center gap-2">
          <Button className="cursor-pointer md:flex lg:flex hidden">Узнать больше о Premium</Button>
          <Button className="hidden lg:cursor-pointer lg:flex">
            <IoMdDownload color="white" className="w-7 h-7" /> Установить приложение
          </Button>
          <IoIosNotificationsOutline color="white" className="hidden lg:flex w-7 h-7 cursor-pointer" />
        </div>
      </div>
    </>
  );
};

export default Header;
