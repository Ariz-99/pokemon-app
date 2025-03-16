import React from "react";
import { useParams } from "react-router";
import { usePokemonDetail } from "../../../hooks/usePokemonDetail";
import CardImg from "../../../components/card/detail/img/CardImg";
import CardStats from "../../../components/card/detail/stats/CardStats";
import CardName from "../../../components/card/detail/name/CardName";
import CardAbility from "../../../components/card/detail/ability/CardAbility";
import CardMove from "../../../components/card/detail/move/CardMove";

const Detail: React.FC = () => {
  const { name } = useParams();
  const { detailpokemon } = usePokemonDetail(name || "");

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
      </div>
    </div>
  );
};

export default Detail;
