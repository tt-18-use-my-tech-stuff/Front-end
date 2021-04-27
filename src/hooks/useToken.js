import useLocalStorage from "./useLocalStorage";

const useToken = (initialToken) => {
  const [token, setToken] = useLocalStorage("token", initialToken);

  return [token, setToken];
};

export default useToken;
