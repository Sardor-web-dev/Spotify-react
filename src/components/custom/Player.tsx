import { BiLike } from "react-icons/bi";
import { FaBackwardStep } from "react-icons/fa6";
import { FaForwardStep } from "react-icons/fa6";
import { FaPauseCircle } from "react-icons/fa";
import { BiDislike } from "react-icons/bi";
import { MdDevices } from "react-icons/md";
import { Progress } from "../ui/progress";
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar";

const Player = () => {
  return (
    <>
      <div className="flex items-center justify-between p-5">
        <div className="flex flex-col gap-2">
          <p>Spotify</p>
          <span>Реклама</span>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-4">
            <BiLike size={24} />
            <FaBackwardStep size={24} />
            <FaPauseCircle size={24} />
            <FaForwardStep size={24} />
            <BiDislike size={24} />
          </div>
          <div className="flex gap-2">
            <span>0:00</span>
            <Progress />
            <span>0:00</span>
          </div>
          <div className="flex gap-2">
            <MdDevices />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Player;
