import React, { FC, useState } from "react";

// interface listPokemon {
//   id: string;
//   name: string;
//   attack: number;
//   evolution: [name: string];
// }

const SearchFrom: FC = () => {
  //const [listPokemon, setListPokemon] = useState<listPokemon[]>([]);
  const [searchText,setSearchText] = useState<string>("");
    
  const searchPokemon = async () => {
    const response = await fetch("/api/search", {
      method : "POST",
      body: JSON.stringify({ search_text: searchText }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
  }
  return (
    <div className="justify-center">
        <input type="text" name="search_text" onChange={(e) => {setSearchText(e.target.value)}}/>
        <button className="" onClick={searchPokemon} type="submit">
          Search
        </button>
    </div>
  );
}

export default SearchFrom
