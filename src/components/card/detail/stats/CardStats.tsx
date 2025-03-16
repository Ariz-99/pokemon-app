import React from "react";
import { Root } from "../../../../services/detail/type";

interface CardStatsProps {
  data: Root;
}

const CardStats: React.FC<CardStatsProps> = ({ data }) => {
  const { stats } = data;

  console.log(stats);

  return (
    <div className="items-center justify-between w-[250px] rounded-xl shadow-md p-4 border-2 border-white bg-black">
      <div className="text-white text-[9px] w-full">
        <ul>
          {stats.map(({ stat, base_stat }, index) => (
            <li key={index} className="mb-2">
              <div className="flex justify-between">
                <span className="capitalize">{stat.name}</span>
                <span>{base_stat}</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-0.5 mt-1">
                <div
                  className="bg-blue-500 h-0.5 rounded-full"
                  style={{ width: `${(base_stat / 200) * 100}%` }}
                ></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CardStats;
