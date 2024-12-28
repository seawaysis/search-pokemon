import type { NextApiRequest, NextApiResponse } from "next";
type ResponseData = {
  message: string;
};
interface pokemon {
  id:string,
    number:string,
    attacks : {
      fast: {
        name:string,
        type:string,
        damage:number
      }
    },
    name : string,
    evolutions : {
      id : string
    }
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === "POST") {
    const {search_text} = req.body;
    //console.log(process.env.endpointGrapql);

    const query: string = JSON.stringify({
      query: `query pokemon($name: String){
            pokemon(name : $name){
            id,
            number,
            attacks{
              fast{
                name,
                type,
                damage
              }
            },
            name,
            evolutions{
              id
            }
          }
        }
    `,
      variables: { name: search_text },
    });
    const data: pokemon = await fetch(process.env.endpointGrapql as string, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: query,
    }).then((res) => res.json());

    console.log(data);
    res.status(200).json({ message: 'test' });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
