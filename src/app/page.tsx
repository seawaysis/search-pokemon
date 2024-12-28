"use client"
import React,{useState} from 'react';
import SearchForm from './components/SearchForm';
import CharPokemon from './components/CharPokemon';

export type EvolutionsPokemon = {
  id: string;
  number: string;
  name: string;
  classification: string;
  types: string;
  resistant: string;
  weaknesses: string;
  fleeRate: number;
  maxCP: number;
  maxHP: number;
  image: string;
  attacks: {
    fast: [
      {
        name: string;
        type: string;
        damage: number;
      }
    ];
    special: [
      {
        name: string;
        type: string;
        damage: number;
      }
    ];
  };
  evolutions: [EvolutionsPokemon];
};

export default function Home() {
    const [listPokemon, setListPokemon] = useState<EvolutionsPokemon>();
    return (
      <>
        <SearchForm setListPokemon={setListPokemon} />
        <CharPokemon listPokemon={listPokemon} />
      </>
    );
}
