import { BiLike } from "react-icons/bi";
import { FaBackwardStep } from "react-icons/fa6";
import { FaForwardStep } from "react-icons/fa6";
import { FaPauseCircle } from "react-icons/fa";
import { BiDislike } from "react-icons/bi";
import { MdDevices } from "react-icons/md";
import { Progress } from "../ui/progress";
import { TbMicrophone2 } from "react-icons/tb";
import { FiLayers } from "react-icons/fi";
import { MdOutlineSpeaker } from "react-icons/md";
import { FaVolumeUp } from "react-icons/fa";
import { MdOutlineOpenInFull } from "react-icons/md";
import { CgMiniPlayer } from "react-icons/cg";

const Player = () => {
  return (
    <>
      <div className="flex items-center text-white bg-[#121212] justify-between p-5">
        <div className="flex flex-col gap-2">
          <p>Spotify</p>
          <span>Реклама</span>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-4">
            <BiLike size={24} className="text-gray-400 hover:text-white cursor-pointer" />
            <FaBackwardStep size={24} className="text-gray-400 hover:text-white cursor-pointer" />
            <FaPauseCircle size={24} className="text-gray-400 hover:text-white cursor-pointer" />
            <FaForwardStep size={24} className="text-gray-400 hover:text-white cursor-pointer" />
            <BiDislike size={24} className="text-gray-400 hover:text-white cursor-pointer" />
          </div>
          <div className="flex gap-2 items-center">
            <span className="text-white">0:00</span>
            <Progress className="bg-gray-800" color="white" />
            <span className="text-white">0:00</span>
          </div>
        </div>
          <div className="flex items-center gap-2">
            <MdDevices size={35} className="cursor-pointer text-gray-400 hover:text-white" />
            <TbMicrophone2 size={35} className="cursor-pointer text-gray-400 hover:text-white" />
            <FiLayers size={35} className="cursor-pointer text-gray-400 hover:text-white" />
            <MdOutlineSpeaker size={35} className="cursor-pointer text-gray-400 hover:text-white" />
            <FaVolumeUp size={35} className="cursor-pointer text-gray-400 hover:text-white" />
            <Progress className="bg-gray-800"/> 
            <CgMiniPlayer  size={35} className="cursor-pointer text-gray-400 hover:text-white" />
            <MdOutlineOpenInFull size={35} className="cursor-pointer text-gray-400 hover:text-white" />
          </div>
      </div>
    </>
  );
};

export default Player;
