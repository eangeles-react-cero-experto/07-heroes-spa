import { useMemo } from "react";

export const useWhatToRender = (searchTerm, heroesFound) => {
  return useMemo(() => {
    if (searchTerm === "") return "instructions";
    if (searchTerm !== "" && heroesFound.length === 0) return "not-found";
    if (searchTerm !== "" && heroesFound.length !== 0) return "results";
  }, [searchTerm, heroesFound]);
};
