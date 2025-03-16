import React from "react";
import { useNavigate } from "react-router";

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };

  const handleMyPokemon = () => {
    navigate("/my-pokemon");
  };

  return (
    <div className=" text-white fixed bottom-0 w-full flex flex-col items-center bg-gray-400 p-2 text-xs md:text-base">
      <div className="flex gap-20">
        <div
          onClick={handleHome}
          className="flex flex-col items-center gap-1 cursor-pointer"
        >
          <img
            src="/src/assets/home.svg"
            alt="Home"
            className="w-6 h-6 md:w-8 md:h-8"
          />
          <span>Home</span>
        </div>

        <div
          onClick={handleMyPokemon}
          className="flex flex-col items-center gap-1 cursor-pointer"
        >
          <img
            src="/src/assets/game.svg"
            alt="My Pokemon"
            className="w-6 h-6 md:w-8 md:h-8"
          />
          <span>My Pokemon</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
