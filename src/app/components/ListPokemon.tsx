import React, { FC } from "react";
import { EvolutionsPokemon } from "../page";
import CardPokemon from "./CardPokemon";
type Props = {
  listPokemon?: EvolutionsPokemon;
};

const CharPokemon: FC<Props> = (props) => {
  return (
    <div>
      <h1 className="flex justify-center my-5 font-bold"> Main search </h1>
      <CardPokemon key={props.listPokemon?.number} listPokemon={props.listPokemon} />
      <h1 className="flex justify-center my-5 font-bold"> Evolutions </h1>
      {props.listPokemon?.evolutions ? props.listPokemon.evolutions.map(v => <CardPokemon key={v.number} listPokemon={v}/>) : <div className="flex justify-center"><h1>No data</h1></div>}
    </div>
  );
};

export default CharPokemon;
