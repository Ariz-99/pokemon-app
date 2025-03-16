import React from "react";
import { Root } from "../../../../services/detail/type";

interface CardStatsProps {
  data: Root;
}

const CardAbility: React.FC<CardStatsProps> = ({ data }) => {
  const { abilities } = data;

  return (
    <div className=" items-center justify-between w-[200px] h-[200px] rounded-xl shadow-md p-4 border-2 border-white bg-black">
      <div className=" text-[13px] text-start">
        <ul>
          <>
            {abilities.map(({ ability }, index) => (
              <li className=" text-white" key={index}>
                {ability.name}
              </li>
            ))}
          </>
        </ul>
      </div>
    </div>
  );
};

export default CardAbility;
