import { Itime } from "../interface/timeInterface";

const pageService = (time: Itime) => {
  const times = require("../database/registros.json");

  times.push(time);

  return times;
};

export default pageService;
