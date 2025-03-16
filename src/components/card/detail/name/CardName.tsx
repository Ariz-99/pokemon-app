import React from "react";
import { Root } from "../../../../services/detail/type";

interface CardStatsProps {
  data: Root;
}

const CardName: React.FC<CardStatsProps> = ({ data }) => {
  const { name, height, weight } = data;

  return (
    <div className="flex flex-col justify-between h-[100px] rounded-xl shadow-md p-4 border-2 border-white bg-black w-full">
      <div className=" text-white text-sm text-start">
        <h3>Name : {name}</h3>
        <h3>Height : {height}</h3>
        <h3>Weight : {weight}</h3>
      </div>
    </div>
  );
};

export default CardName;
