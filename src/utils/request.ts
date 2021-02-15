import axios from "axios";

import env from "../config";

const config = env();

export default () => {
  const instance = axios.create({
    baseURL: `${config.API_URL}`,
  });
  return instance;
};
