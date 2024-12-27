import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === "POST") {
    const {search_text} = req.body;

    //console.log(process.env.endpointGrapql);
    console.log(search_text);
    // try{
    // const response = await fetch("https://graphql-pokemon2.vercel.app", {
    //   method: "POST",
    //   body: formData,
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    //     console.log(response);
    //   } catch (e) {
    //     console.log((e as Error).message);
    //   }
    res.status(200).json({ message: `pokemon ${search_text}` });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
