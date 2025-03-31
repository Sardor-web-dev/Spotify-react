import { FC } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../components/ui/resizable";
import { LuLibraryBig } from "react-icons/lu";
import { CiCirclePlus } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import PlayList from "../components/custom/Playlist";
import { Recently } from "../helpers/Recently";
import Content from "@/components/custom/Content";
import PlayingNow from "@/components/custom/PlayingNow";
// import { FaCirclePlay } from "react-icons/fa6";
// import {FaBell} from "react-icons/fa"
// import { IoSettingsOutline } from "react-icons/io5";
// import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";

const Home: FC = () => {
  return (
    <div className="bg-[#202020] text-white h-screen">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel>
          <div className="flex flex-col">
            <div className="flex justify-between p-5 items-center">
              <div className="flex items-center gap-1">
                <LuLibraryBig color="gray" size={24} />
                <p className="text-gray-500 text-2xl font-bold">
                  Моя медиатека
                </p>
              </div>
              <div className="flex items-center gap-2">
                <CiCirclePlus size={25} color="gray" />
                <FaArrowRight size={24} color="gray" />
              </div>
            </div>
            <div className="flex gap-2 items-center justify-baseline p-2">
              <div className="w-30 h-10 bg-gray-500 text-white rounded-4xl flex items-center justify-center cursor-pointer hover:opacity-75">
                <p>Плейлисты</p>
              </div>
              <div className="w-30 h-10 bg-gray-500 text-white rounded-4xl flex items-center justify-center cursor-pointer hover:opacity-75">
                <p>Исполнители</p>
              </div>
            </div>
            <div className="flex justify-between items-center p-5">
              <FaSearch />
              <div className="flex items-center gap-1">
                <p>Недавно прослушано</p>
                <FaListUl />
              </div>
            </div>
            <div className="flex flex-col gap-4 p-2">
              {Recently.map((track) => (
                <PlayList name={track.name} img={track.img} description={track.description} count={track.count} />
              ) )}
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle className="bg-black w-1" />
        <ResizablePanel>
          <Content/>
        </ResizablePanel>
        <ResizableHandle className="bg-black w-1" />
        <ResizablePanel>
          <PlayingNow/>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
  // return (
  //   <div className="bg-black text-white min-h-screen p-4">
  //     <div className="flex justify-between items-center mb-4">
  //       <h1 className="text-xl font-bold">Recently Played</h1>
  //       <div className="flex gap-3">
  //         <FaBell size={20} />
  //         <IoSettingsOutline size={20} />
  //       </div>
  //     </div>

  //     <div className="flex gap-5">
  //       <div className="h-30 w-30 bg-[url(/1.png)] rounded-lg"></div>
  //       <Avatar className="w-30 h-30">
  //         <AvatarImage className="w-30 h-30" src="/Lana rey.png" />
  //         <AvatarFallback>CN</AvatarFallback>
  //       </Avatar>

  //       <Avatar className="w-30 h-30">
  //         <AvatarImage className="w-30 h-30" src="/Marvin.png" />
  //         <AvatarFallback>CN</AvatarFallback>
  //       </Avatar>
  //       <div className="h-30 w-30 bg-[url(/indie.png)] rounded-lg"></div>
  //     </div>

  //     <h2 className="text-lg font-bold mt-6 mb-2">Your 2021 in review</h2>
  //     <div className="grid grid-cols-2 gap-4">
  //       <div className="bg-yellow-500 p-4 rounded-lg">
  //         <h3 className="font-bold text-black">Your Top Songs 2021</h3>
  //       </div>
  //       <div className="bg-blue-500 p-4 rounded-lg">
  //         <h3 className="font-bold">Your Artists Revealed</h3>
  //       </div>
  //     </div>

  //     <h2 className="text-lg font-bold mt-6 mb-2">Editor's Picks</h2>
  //     <div className="flex gap-4 overflow-x-auto scrollbar-hide">
  //       {["Ed Sheeran", "Glass Animals", "Mitski"].map((item, index) => (
  //         <div key={index} className="w-24">
  //           <img
  //             src={`https://via.placeholder.com/100?text=${item}`}
  //             alt={item}
  //             className="rounded-lg"
  //           />
  //           <p className="text-sm mt-2">{item}</p>
  //         </div>
  //       ))}
  //     </div>

  //     <div className="fixed bottom-0 left-0 w-full bg-gray-900 p-4 flex justify-between items-center">
  //       <div>
  //         <p className="text-sm">From Me to You - Mono / Remastered</p>
  //         <p className="text-xs text-gray-400">The Beatles</p>
  //       </div>
  //       <div>
  //         <FaCirclePlay size={24} className="cursor-pointer" />
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default Home;
