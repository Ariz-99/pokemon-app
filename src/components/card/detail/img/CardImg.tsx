import React from "react";
import { Root } from "../../../../services/detail/type";

interface CardStatsProps {
  data: Root;
}

const CardImg: React.FC<CardStatsProps> = ({ data }) => {
  const { sprites, types, name } = data;

  return (
    <div className="flex flex-col items-center justify-between w-[200px] h-[200px] rounded-xl shadow-md p-4 border-2 border-white bg-black">
      <img
        src={
          sprites.versions["generation-v"]["black-white"].animated.front_default
        }
        alt={name}
        className="w-[100px] h-[100px] object-contain"
      />
      <h1 className=" text-white text-[12px]">
        {types.map((type, index) => (
          <li className=" text-white" key={index}>
            {" "}
            {type.type.name}
          </li>
        ))}
      </h1>
    </div>
  );
};

export default CardImg;
