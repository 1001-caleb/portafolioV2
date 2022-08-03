import nc from "next-connect";
import Projects from "../../../data/data";
import { NextApiRequest, NextApiResponse } from "next";

const handler = nc<NextApiRequest, NextApiResponse>().get((req, res) => {
  return res.status(200).json(Projects);
});

export default handler;
