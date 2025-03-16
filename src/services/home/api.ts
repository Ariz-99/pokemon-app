import axiosWithConfig from "../api";
import { ResponseData } from "../type";
import { Pic } from "./type";

export const getPokemon = async (offset: number) => {
  try {
    const response = await axiosWithConfig.get(
      `pokemon?limit=10&offset=${offset}`
    );

    return response.data as ResponseData | undefined;
  } catch (error) {}
};

export const getPokemonImg = async (name: string) => {
  try {
    const response = await axiosWithConfig.get(`pokemon/${name}`);

    return response.data as Pic | undefined;
  } catch (error) {}
};
