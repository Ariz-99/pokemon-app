import React from "react";
import { Root } from "../../../../services/detail/type";

interface CardStatsProps {
  data: Root;
}

const CardMove: React.FC<CardStatsProps> = ({ data }) => {
  const { moves } = data;

  return (
    <div className="flex flex-col items-center justify-between w-[200px] h-[200px] rounded-xl shadow-md p-4 border-2 border-white bg-black">
      <div className="text-[12px]">
        <ul>
          <>
            {moves.slice(0, 4).map(({ move }, index) => (
              <li className=" text-white" key={index}>
                {move.name}
              </li>
            ))}
          </>
        </ul>
      </div>
    </div>
  );
};

export default CardMove;
