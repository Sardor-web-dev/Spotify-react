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
// import PlayingNow from "@/components/custom/PlayingNow";


const Home: FC = () => {
  return (
    <div className="bg-[#202020] text-white h-screen">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel className="max-w-100">
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
          <div className="">
          <Content/>
          </div>
        </ResizablePanel>
        {/* <ResizableHandle className="bg-black w-1" />
        <ResizablePanel>
          <PlayingNow/>
        </ResizablePanel> */}
      </ResizablePanelGroup>
    </div>
  );
};

export default Home;
