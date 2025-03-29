import { Button } from "../components/ui/button";

const Auth = () => {
    const buttonStyles = "text-xl font-medium w-[337px] h-[49px] rounded-3xl cursor-pointer flex items-center justify-center gap-2";

    return (
        <div className="h-screen w-full bg-[#121212] flex items-center justify-center">
            <div className="flex flex-col items-center justify-center w-full max-w-[400px] lg:max-w-[600px]">
                <div className="bg-[#121212] h-[465px] lg:h-[23px] w-full bg-cover"></div>
                <div className="bg-[#121212] w-full h-[449px] flex flex-col items-center pb-20 gap-5 justify-center"> 
                    <div className="flex flex-col text-white items-center">
                        <img className="w-12 h-12" src="/logoAuth.png" alt="Spotify Logo" />
                        <p className="text-2xl font-bold text-center">Millions of Songs. Free on Spotify.</p>
                    </div>
                    <div className="text-white flex flex-col gap-5 pb-20 items-center">
                        <Button className={`${buttonStyles} bg-green-400 text-black hover:text-white hover:bg-green-900`}>
                            Sign up free
                        </Button>
                        <Button className={buttonStyles}>
                            <img className="w-6 h-6" src="/google.png" alt="Google Icon" />
                            Continue with Google
                        </Button>
                        <Button className={buttonStyles}>
                            <img className="w-6 h-6" src="/facebook.png" alt="Facebook Icon" />
                            Continue with Facebook
                        </Button>
                        <Button className={buttonStyles}>
                            <img className="w-6 h-6" src="/apple.png" alt="Apple Icon" />
                            Continue with Apple
                        </Button>
                        <p className="text-xl font-medium cursor-pointer">Log in</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Auth;
