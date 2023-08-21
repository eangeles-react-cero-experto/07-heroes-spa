import { HeroCard } from "../../../components/index.js";
import PropTypes from "prop-types";

export const HeroCardList = ({ heroes }) => {
  return (
    <>
      <div className="d-flex flex-column gap-3">
        {heroes.map((hero) => (
          <HeroCard key={hero.id} {...hero} />
        ))}
      </div>
    </>
  );
};

HeroCardList.propTypes = {
  heroes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      superhero: PropTypes.string.isRequired,
      publisher: PropTypes.string.isRequired,
      alter_ego: PropTypes.string.isRequired,
      first_appearance: PropTypes.string.isRequired,
      characters: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
