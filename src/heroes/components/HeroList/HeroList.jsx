import { getHeroesByPublisher } from "../../helpers/getHeroesByPublisher.js";
import PropTypes from "prop-types";

export const HeroList = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher);

  return (
    <ul>
      {heroes.map((hero) => (
        <li key={hero.id}>{hero.superhero}</li>
      ))}
    </ul>
  );
};

HeroList.propTypes = {
  publisher: PropTypes.string.isRequired,
};
