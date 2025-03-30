import { Music } from "../../types/music";

const PlayList = (track: Music) => {
    return (
        <>
        <div className="flex items-center gap-5">
            <img className="w-20 h-20 rounded-2xl" src={track.img} alt="" />
            <div className="flex flex-col gap-1">
                <p className="text-xl font-medium">{track.name}</p>
                <p className="flex gap-1 text-gray-400">{track.description} <li>{track.count}</li></p>
            </div>
        </div>
        </>
    );
}
 
export default PlayList;