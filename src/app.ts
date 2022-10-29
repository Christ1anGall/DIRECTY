import express from "express";
import { appRoutes } from "./routes";
import { Request, Response, NextFunction } from "express";
import { AppError } from "./error/appError";

const app = express();
var cors = require("cors");

app.use(express.json());
app.use(cors());

appRoutes(app);

app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
  }

  console.error(err);

  return res.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});

app.listen(9000, () => console.log("app running http://localhost:3001"));
