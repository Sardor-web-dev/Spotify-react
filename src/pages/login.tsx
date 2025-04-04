import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FaSpotify } from "react-icons/fa";
import { LOGIN_URL } from "../exports";

interface loginProps {}

const Login: React.FC<loginProps> = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.hash);
    const token = params.get("#access_token");

    if (token) {
      localStorage.setItem("token", token);
      navigate("/");
    }
  }, []);
  const buttonStyles =
    "text-xl font-medium w-[337px] h-[49px] rounded-3xl cursor-pointer flex items-center justify-center gap-2";
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-b from-[#2a2a2a] to-black min-h-screen px-4">
      <div className="w-full max-w-xl min-h-[600px] bg-[#121212] border-none rounded-lg shadow-xl">
        <div className="flex mt-20 flex-col w-full text-white items-center">
          <img className="w-12 h-12" src="/logoAuth.png" alt="Spotify Logo" />
          <p className="text-2xl font-bold text-center">
            Millions of Songs. Free on Spotify.
          </p>
        </div>
        <div className="flex mt-20 flex-col gap-2 px-8 items-center justify-center">
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

          <div className="border-t border-[#3b3b3b] my-4"></div>

          <a
            href={`${LOGIN_URL}?client_id=${
              import.meta.env.VITE_CLIENT_ID
            }&redirect_uri=${
              import.meta.env.VITE_REDIRECT_URI
            }&response_type=token&scope=user-read-private user-read-email user-library-read user-library-modify 
playlist-read-private playlist-read-collaborative playlist-modify-public 
playlist-modify-private user-follow-read user-follow-modify 
user-read-playback-state user-modify-playback-state user-read-currently-playing 
user-read-recently-played user-top-read streaming`}
          >
            <Button className="w-full text-[#121212] font-bold rounded-3xl h-11 cursor-pointer bg-[#1ed760] hover:bg-[#1ed760] mt-2">
              Войти через Spotify
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
