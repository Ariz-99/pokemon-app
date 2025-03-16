import React from "react";
import { Result } from "../../services/type";
import { Root } from "../../services/home/type";

interface CardProps {
  data: Result | Root;
}

const Card: React.FC<CardProps> = ({ data }) => {
  const { name, sprites } = data as Root;
  return (
    <div className="flex flex-col items-center justify-between w-[180px] md:w-[200px] h-[185px] md:h-[200px] rounded-xl shadow-md p-4 border-2 border-white bg-black">
      <img
        src={
          sprites.versions["generation-v"]["black-white"].animated.front_default
        }
        alt={name}
        className="w-[100px] h-[100px] object-contain"
      />
      <h1 className="text-center text-white font-bold uppercase text-sm">
        {name}
      </h1>
    </div>
  );
};

export default Card;
