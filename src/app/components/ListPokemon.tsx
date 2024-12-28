import React, { FC } from "react";
import { EvolutionsPokemon } from "../page";
import CardPokemon from "./CardPokemon";
type Props = {
  listPokemon?: EvolutionsPokemon;
};

const CharPokemon: FC<Props> = (props) => {
  return (
    <div>
      <CardPokemon key={props.listPokemon?.number} listPokemon={props.listPokemon} />
      <h3 className="flex justify-center"> Evolutions </h3>
      {props.listPokemon?.evolutions ? props.listPokemon.evolutions.map(v => <CardPokemon key={v.number} listPokemon={v}/>) : null}
    </div>
  );
};

export default CharPokemon;
