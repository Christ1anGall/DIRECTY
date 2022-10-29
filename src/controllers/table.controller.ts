import { Request, Response } from "express";
import { AppError, handleError } from "../error/appError";
import tableService from "../services/table.service";

const tableController = (req: Request, res: Response) => {
  try {
    const result = tableService();

    return res.status(200).json(result);
  } catch (error) {
    if (error instanceof Error) {
      if (error instanceof AppError) {
        handleError(error, res);
      }
    }
  }
};
export default tableController;
