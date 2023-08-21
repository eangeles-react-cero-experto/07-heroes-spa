import { useLocation } from "react-router-dom";

export const useQueryParams = () => {
  const location = useLocation();
  const urlSearchParams = new URLSearchParams(location.search);
  const queryParamsObject = {};

  for (const [key, value] of urlSearchParams) {
    queryParamsObject[key] = value;
  }

  return queryParamsObject;
};
