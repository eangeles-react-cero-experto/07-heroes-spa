import { getHeroesByPublisher } from "../../helpers/index.js";
import PropTypes from "prop-types";
import { HeroCard } from "../HeroCard/HeroCard.jsx";
import { useMemo } from "react";

export const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

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
