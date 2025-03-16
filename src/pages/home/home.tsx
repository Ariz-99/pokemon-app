import React from "react";
import { Result } from "../../services/type";
import Card from "../../components/card/card";
import { usePokemonData } from "../../hooks/usePokemonData";
import { useNavigate } from "react-router";
import NextIcon from "../../components/icons/NextIcons";
import PreviousIcon from "../../components/icons/PrevIcons";

const Home: React.FC = () => {
  const { pokemon, setPagination, pagination } = usePokemonData();
  const navigate = useNavigate();

  const handleClickDetail = (name: string) => {
    navigate(`/detail/${name}`);
  };

  const handlePrevButton = () => {
    if (pagination.offset >= 10) {
      setPagination({
        offset: pagination.offset - 10,
      });
    }
  };

  const handleNextButton = () => {
    if (pagination.offset >= 0) {
      setPagination({
        offset: pagination.offset + 10,
      });
    }
  };

  return (
    <div className="flex flex-col w-full mt-10 mb-8 md:mb-10">
      <section className="flex flex-col py-10">
        <div className="grid grid-cols-2 md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] place-items-center gap-5 md:gap-15 p-6">
          {pokemon?.map((item: Result) => (
            <div
              onClick={() => handleClickDetail(item.name)}
              key={item.name}
              className=" cursor-pointer"
            >
              <Card key={item.name} data={item} />
            </div>
          ))}
        </div>

        <div className="flex flex-row justify-around gap-5">
          <button
            onClick={handlePrevButton}
            className=" bg-gray-600 p-2 rounded-lg hover:bg-gray-500 flex items-center justify-center w-10 h-10"
          >
            <PreviousIcon />
          </button>

          <button
            onClick={handleNextButton}
            className=" bg-gray-600 p-2 rounded-lg hover:bg-gray-500 flex items-center justify-center w-10 h-10"
          >
            <NextIcon />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
