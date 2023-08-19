import { heroes } from "../data/heroes.js";

export const getHeroById = (heroId) => {
  return heroes.find((hero) => hero.id === heroId);
};
