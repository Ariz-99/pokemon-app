import React from "react";
import { usePokemonDetail } from "../../hooks/usePokemonDetail";
import { useNavigate, useParams } from "react-router";
import CardStats from "../../components/card/detail/stats/CardStats";
import CardImg from "../../components/card/detail/img/CardImg";
import CardName from "../../components/card/detail/name/CardName";
import CardAbility from "../../components/card/detail/ability/CardAbility";
import CardMove from "../../components/card/detail/move/CardMove";

const Detail: React.FC = () => {
  const navigate = useNavigate();
  const { name } = useParams();
  const { detailpokemon } = usePokemonDetail(name || "");

  const handleCatch = (name: string) => {
    navigate(`/catch/${name}`);
  };

  if (!detailpokemon) return <div>Loading...</div>;
  return (
    <div className="flex flex-col items-center pt-18 mb-10">
      <div className=" w-[400px] space-y-3">
        <div className="flex flex-row space-x-3">
          <CardImg data={detailpokemon} />
          <CardStats data={detailpokemon} />
        </div>
        <div className="">
          <CardName data={detailpokemon} />
        </div>
        <div className="flex flex-row space-x-3">
          <CardAbility data={detailpokemon} />
          <CardMove data={detailpokemon} />
        </div>
        <div>
          <button
            onClick={() => handleCatch(detailpokemon.name)}
            className=" h-[50px] rounded-xl shadow-md p-4 border-2 border-white bg-black w-full text-white cursor-pointer"
          >
            Catch!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
