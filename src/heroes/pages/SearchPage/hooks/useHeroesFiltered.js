import { useMemo } from "react";
import { getHeroesByName } from "../../../helpers/index.js";

export const useHeroesFiltered = (searchTerm) => {
  return useMemo(() => getHeroesByName(searchTerm), [searchTerm]);
};
