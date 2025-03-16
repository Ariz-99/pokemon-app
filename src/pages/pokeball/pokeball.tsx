import React, { useEffect, useState } from "react";
import CardImg from "../../components/card/pokeball/CardImg";

const Pokeball: React.FC = () => {
  const [caughtPokemons, setCaughtPokemons] = useState<
    { name: string; nickname: string; sprite: string }[]
  >([]);

  useEffect(() => {
    const storedPokemons = JSON.parse(
      localStorage.getItem("myPokemons") || "[]"
    );
    setCaughtPokemons(storedPokemons);
  }, []);

  const removePokemon = (nickname: string) => {
    const updatedPokemons = caughtPokemons.filter(
      (pokemon) => pokemon.nickname !== nickname
    );
    setCaughtPokemons(updatedPokemons);
    localStorage.setItem("myPokemons", JSON.stringify(updatedPokemons));
  };

  return (
    <div className="flex flex-col w-full mt-10 mb-8 md:mb-10">
      <div className="grid grid-cols-2 md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] place-items-center gap-5 md:gap-15 p-6">
        {caughtPokemons.map((pokemon, index) => (
          <CardImg key={index} data={pokemon} onRemove={removePokemon} />
        ))}
      </div>
    </div>
  );
};

export default Pokeball;
