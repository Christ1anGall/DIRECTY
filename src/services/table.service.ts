import { AppError } from "../error/appError";

const tableService = () => {
  const result = require("../database/registros.json");

  if (result.length === 0) {
    throw new AppError(404, "você não deveria estar aqui");
  }
  return result;
};

export default tableService;
