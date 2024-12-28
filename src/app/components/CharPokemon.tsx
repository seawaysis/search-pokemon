import React, { FC } from "react";
import { EvolutionsPokemon } from "../page";

type Props = {
  listPokemon?: EvolutionsPokemon;
};

const CharPokemon: FC<Props> = (props) => {
  return <div>{JSON.stringify(props.listPokemon)}</div>;
};

export default CharPokemon;
