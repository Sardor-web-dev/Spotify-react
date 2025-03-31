import { Music } from "../../types/music";

const PlayList = ({ img, name, description, count}: Music) => {
    return (
        <>
        <div className="flex items-center gap-5">
            <img className="w-20 h-20 rounded-2xl" src={img} alt="" />
            <div className="flex flex-col gap-1">
                <p className="text-xl font-medium">{name}</p>
                <p className="flex gap-1 text-gray-400">{description} <li>{count}</li></p>
            </div>
        </div>
        </>
    );
}
 
export default PlayList;