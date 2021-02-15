import devEnv from "./dev";

const getEnvVars = () => {
  if (__DEV__) {
    return devEnv;
  }
  return devEnv;
};

export default getEnvVars;
