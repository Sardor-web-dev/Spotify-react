import { Button } from "../components/ui/button";

const Auth = () => {
    return (
        <>
        <div className="h-screen max-w-md flex flex-col align-center justify-center">
        <div className="bg-[#121212] h-[465px] w-full bg-cover"></div>
           <div className="bg-[#121212] w-full h-[449px] flex flex-col items-center gap-5 justify-center"> 
           <div className="flex flex-col text-white items-center">
                <img className="w-12 h-12" src="/logoAuth.png" alt="" />
                <p className="text-2xl font-bold">Millions of Songs. Free on Spotify.</p>
            </div>
            <div className="text-white flex flex-col gap-5 items-center justify-center">
                <Button className="text-xl font-medium w-[337px] h-[49px] rounded-3xl cursor-pointer bg-green-400 text-black hover:text-white hover:bg-green-900">Sign up free</Button>
                <Button className="text-xl font-medium w-[337px] h-[49px] rounded-3xl cursor-pointer"><img className="w-6 h-6" src="/google.png" alt="" /> Continue with Google</Button>
                <Button className="text-xl font-medium w-[337px] h-[49px] rounded-3xl cursor-pointer"><img className="w-6 h-6" src="/facebook.png" alt="" /> Continue with Facebook</Button>
                <Button className="text-xl font-medium w-[337px] h-[49px] rounded-3xl cursor-pointer"><img className="w-6 h-6" src="/apple.png" alt="" /> Continue with Apple</Button>
                <p className="text-xl font-medium cursor-pointer">Log in</p>
            </div>
           </div>
        </div>
        </>
    );
}
 
export default Auth;
