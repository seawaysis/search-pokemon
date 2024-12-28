import React,{FC} from 'react'
import Image from 'next/image'
import { EvolutionsPokemon } from '../page'

type Props = {
    listPokemon?: EvolutionsPokemon
}
// type Element = {
//     name:string,
// }
const CardPokemon: FC<Props> = (props) => {
  return props.listPokemon ? (
    <div className="flex justify-center border-1 border-white-900 border-r-2">
      <div className="">
        <Image
          src={props.listPokemon.image}
          width={200}
          height={300}
          alt={props.listPokemon.name}
        />
      </div>
      <div className="">
        <p className="border-b-2 gap-y-2">Number : {props.listPokemon.number}</p>
        <p className="border-b-2 gap-y-2">Name : {props.listPokemon.name}</p>
        <p className="border-b-2 gap-y-2">Classification : {props.listPokemon.classification}</p>
        <br />
        <p className="border-b-2 gap-y-2">Types : {props.listPokemon.types}</p>
        <p className="border-b-2 gap-y-2">Resistant : {props.listPokemon.resistant.join(',')}</p> {/* .match(/[A-Z][a-z]+/g).join(',')*/}
        <p className="border-b-2 gap-y-2">Weaknesses : {props.listPokemon.weaknesses.join(',')}</p>
        <p className="border-b-2 gap-y-2">FleeRate : {props.listPokemon.fleeRate}</p>
        <br />
        <p className="border-b-2 gap-y-2">Height : {props.listPokemon.height.minimum} ~ {props.listPokemon.height.maximum}</p>
        <p className="border-b-2 gap-y-2">Weight : {props.listPokemon.weight.minimum} ~ {props.listPokemon.weight.maximum}</p>
        <br />
        <p className="border-b-2 gap-y-2">MaxHP : {props.listPokemon.maxHP}</p>
        <p className="border-b-2 gap-y-2">MaxCP : {props.listPokemon.maxCP}</p>
        <br />
        <p className="border-b-2 gap-y-2">Attacks</p>
        <p className="border-b-2 gap-y-2">Fast : {/*props.listPokemon.attacks.fast */}</p>
        <p className="border-b-2 gap-y-2">Special : {/*props.listPokemon.attacks.special*/}</p>
      </div>
    </div>
  ) : (
    <div>Empty</div>
  );
}

export default CardPokemon;