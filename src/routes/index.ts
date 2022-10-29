import { Express } from "express";
import { page } from "./page.routes";

export const appRoutes = (app: Express) => {
  app.use("/time", page());
};
