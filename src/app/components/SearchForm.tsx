"use client";
import React, { FC, useState } from "react";
import { EvolutionsPokemon } from "../page";

type Props = {
  //setListPokemon: React.Dispatch<React.SetStateAction<EvolutionsPokemon | undefined>>
  setListPokemon: (evolutions:EvolutionsPokemon) => void;
};
const SearchFrom: FC<Props> = (props) => {
  const [searchText, setSearchText] = useState<string>("");

  const searchPokemon = async () => {
    const response = await fetch("/api/search", {
      method: "POST",
      body: JSON.stringify({ search_text: searchText }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());

    props.setListPokemon(response.data);
  };
  return (
    <div className="flex justify-center my-4">
        <input
          type="text"
          className="color-black-900"
          placeholder="Search pokemon"
          name="search_text"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
      <button className="" onClick={searchPokemon} type="submit">
        Search
      </button>
    </div>
  );
};

export default SearchFrom
