import { Request, Response } from "express";
import { AppError, handleError } from "../error/appError";
import pageService from "../services/page.service";

const pageController = (req: Request, res: Response) => {
  try {
    const time = req.body;

    const result = pageService(time);

    return res.status(200).json(result);
  } catch (error) {
    if (error instanceof Error) {
      if (error instanceof AppError) {
        handleError(error, res);
      }
    }
  }
};
export default pageController;
