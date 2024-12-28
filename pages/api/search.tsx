import type { NextApiRequest, NextApiResponse } from "next";
// 
type response<T = unknown> = {
  success : boolean,
  errorCode : string | number,
  message : string,
  data? : T
}
type EvolutionsPokemon = {
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
type GetPokemon = {
  data : {
    pokemon : EvolutionsPokemon
  }
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<response<EvolutionsPokemon>>
) {
  if (req.method === "POST") {
    const { search_text } = req.body;

    const query: string = JSON.stringify({
      query: `query pokemon($name: String){
            pokemon(name : $name){
            id,
            number,
            name,
            classification,
            types,
            resistant,
            attacks{
              fast{
                name,
                type,
                damage
              },
              special{
                name,
                type,
                damage
              }
            },
            weaknesses,
            fleeRate,
            maxCP,
            maxHP,
            image,
            evolutions{
              id,
              number,
              name,
              classification,
              types,
              resistant,
              attacks{
                fast{
                  name,
                  type,
                  damage
                },
                special{
                  name,
                  type,
                  damage
                }
              },
              weaknesses,
              fleeRate,
              maxCP,
              maxHP,
              image,
              evolutions{
                id 
              } 
            }
          }
        }`,
      variables: { name: search_text },
    });
    try {
      const data: GetPokemon = await fetch(
        process.env.endpointGrapql as string,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: query,
        }
      ).then((res) => res.json());
      console.log(data);
      const r: response<EvolutionsPokemon> = {
        success: true,
        errorCode: "",
        message: "success",
        data: data.data.pokemon,
      };
      res.status(200).json(r);
    } catch (e) {
      console.error(e);
    }
  } else {
    const r: response<EvolutionsPokemon> = {
      success: false,
      errorCode: 405,
      message: "not allow method",
    };
    res.status(r.errorCode as number).json(r);
  }
}
