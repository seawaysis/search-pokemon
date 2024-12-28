"use client";
import React, { FC, useState } from "react";
import { EvolutionsPokemon } from "../page";

type Props = {
  //setListPokemon: React.Dispatch<React.SetStateAction<EvolutionsPokemon | undefined>>
  setListPokemon: (evolutions:EvolutionsPokemon) => void;
};
const SearchFrom: FC<Props> = (props) => {
  const [searchText, setSearchText] = useState<string>("");

  const searchPokemon = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
      <form onSubmit={searchPokemon}>
        <input
          type="text"
          className="w-50 bg-transparent placeholder:text-slate-300 text-white text-sm border border-slate-400 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-50 hover:border-slate-300 shadow-sm focus:shadow"
          placeholder="Search pokemon"
          name="search_text"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold mx-2 py-2 px-2 rounded-md"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchFrom
