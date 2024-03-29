import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import Projects from "../../../data/data";

const getProjects = (name: any) => Projects.find((n) => n.name ===name);

const handler = nc<NextApiRequest, NextApiResponse>().get((req, res) => {
  const project = getProjects(req.query.project);
  if (project) {
    return res.status(200).json(project);
  } else {
    return res.status(404).json({ message: "Project not found" });
  }
});

export default handler;
