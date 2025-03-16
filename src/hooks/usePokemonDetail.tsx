import { useEffect, useState } from "react";
import { Root } from "../services/detail/type";
import { getPokemonDetail } from "../services/detail/api";

export const usePokemonDetail = (name: string) => {
  const [detailpokemon, setDetailPokemon] = useState<Root | undefined>();

  const fetchPokemon = async () => {
    try {
      console.log("Fetching Pokemon...");
      const response = await getPokemonDetail(name);

      console.log("Response received:", response);

      setDetailPokemon(response);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    if (name) {
      fetchPokemon();
    }
  }, [name]);

  return { detailpokemon };
};
