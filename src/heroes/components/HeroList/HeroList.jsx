import { getHeroesByPublisher } from "../../helpers/getHeroesByPublisher.js";
import PropTypes from "prop-types";
import { HeroCard } from "../HeroCard/HeroCard.jsx";

export const HeroList = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher);

  return (
    <div className="row row-cols-1 row-cols-md-3 g-3">
      {heroes.map((hero) => (
        <div key={hero.id} className="col">
          <HeroCard {...hero} />
        </div>
      ))}
    </div>
  );
};

HeroList.propTypes = {
  publisher: PropTypes.string.isRequired,
};
