import { useEffect, useState } from "react";

import { getPokemonImg, getPokemon } from "../services/home/api";
import { PaginationInfo, ResponseData, Result } from "../services/type";
import { Pic, Sprites } from "../services/home/type";

export const usePokemonData = () => {
  const [pokemon, setPokemon] = useState<(Result & { sprites?: Sprites })[]>();
  const [pagination, setPagination] = useState<PaginationInfo>({
    offset: 0,
  });

  const fetchPokemon = async () => {
    try {
      const response: ResponseData | undefined = await getPokemon(
        pagination.offset
      );
      if (response?.results) {
        const pokemonWithSprites = await Promise.all(
          response.results.map(async (pokemon) => {
            const pokemonData: Pic | undefined = await getPokemonImg(
              pokemon.name
            );
            return { ...pokemon, sprites: pokemonData?.sprites };
          })
        );
        setPokemon(pokemonWithSprites);
        console.log(pokemonWithSprites);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, [pagination]);

  return { pokemon, pagination, setPagination };
};
