import { Router } from "express";
import pageController from "../controllers/page.controller";
import tableController from "../controllers/table.controller";

const routes = Router();

export const page = () => {
  routes.post("/", pageController);
  routes.get("/table", tableController);

  return routes;
};
