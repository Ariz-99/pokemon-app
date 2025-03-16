import React from "react";
import { Root } from "../../../services/detail/type";

interface CardStatsProps {
  data: Root | { name: string; nickname: string; sprite: string };
  onRemove: (nickname: string) => void;
}

const CardImg: React.FC<CardStatsProps> = ({ data, onRemove }) => {
  const { name } = data;
  if ("nickname" in data) {
    return (
      <div className=" relative flex flex-col items-center justify-between w-[200px] h-[200px] rounded-xl shadow-md p-4 border-2 border-white bg-black">
        <button
          onClick={() => onRemove(data.nickname)}
          className="text-white absolute top-2 right-2 cursor-pointer"
        >
          X
        </button>
        <img
          src={data.sprite}
          alt={name}
          className="w-[100px] h-[100px] object-contain"
        />
        <div className="text-white text-center">
          <h1 className="text-md">{data.name}</h1>
          <h1 className="text-[11px]">{data.nickname}</h1>
        </div>
      </div>
    );
  }
};

export default CardImg;
