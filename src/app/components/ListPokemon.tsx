import React, { FC } from "react";
import { EvolutionsPokemon } from "../page";
import CardPokemon from "./CardPokemon";
type Props = {
  listPokemon?: EvolutionsPokemon;
};

const CharPokemon: FC<Props> = (props) => {
  return (
    <div>
      <CardPokemon listPokemon={props.listPokemon} />
    </div>
  );
};

export default CharPokemon;
