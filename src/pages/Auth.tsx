import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import {useState} from "react";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        if (!email) return;

        try {
            const response = await fetch("https://accounts.spotify.com/api/token", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams({
                    grant_type: "client_credentials",
                    client_id: "cc6a7522dbb54e99b975469c11004441",
                    client_secret: "202bc0e730af4d85a4a4c937b25e5d77",
                }),
            });

            const data = await response.json();

            localStorage.setItem("spotify_token", data.access_token);
            localStorage.setItem("isAuthenticated", "true");
            navigate("/me");
        } catch (err: any) {
            setError(err.message);
            console.error("Ошибка входа:", err.message);
        }
    };
    const buttonStyles = "text-xl font-medium w-[337px] h-[49px] rounded-3xl cursor-pointer flex items-center justify-center gap-2";
    return (
        <div className="h-screen w-full bg-[#121212] overflow-y-hidden flex items-center justify-center">
            <div className="flex flex-col items-center justify-center w-full max-w-[450px] lg:max-w-[600px]">
                <div className="bg-[#121212] h-[465px] lg:h-[23px] w-full bg-cover"></div>
                <div className="bg-[#121212] w-full h-[449px] flex flex-col items-center pb-20 gap-5 justify-center"> 
                    <div className="flex flex-col w-full text-white items-center">
                        <img className="w-12 h-12" src="/logoAuth.png" alt="Spotify Logo" />
                        <p className="text-2xl font-bold text-center">Millions of Songs. Free on Spotify.</p>
                    </div>
                    <div className="text-white w-full flex flex-col gap-5 items-center">
                        <label className="text-sm text-white font-medium">Электронная почта или имя пользователя</label>
                        <input
                            type="email"
                            placeholder="Электронная почта или имя пользователя"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-[#121212] border-[#3b3b3b] text-white h-11"
                        />

                        {error && <p className="text-red-500 text-sm">{error}</p>}
                        <Button onClick={handleLogin} className={`${buttonStyles} bg-green-400 text-black hover:text-white hover:bg-green-900`}>
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
