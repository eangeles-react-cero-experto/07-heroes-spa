import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../../helpers/getHeroById.js";
import { getHeroImageUrl } from "../../helpers/getHeroImageUrl.js";

export const HeroPage = () => {
  const { heroId } = useParams();
  const hero = getHeroById(heroId);
  const heroImageUrl = getHeroImageUrl(heroId);
  const navigate = useNavigate();

  const onBtnReturnClick = () => {
    navigate(-1);
  };

  if (!hero) return <Navigate to={"/"} />;

  return (
    <>
      <div className="row mt-5">
        <div className="col-4">
          <img src={heroImageUrl} alt="" className="img-thumbnail" />
        </div>
        <div className="col-8">
          <h3>{hero.superhero}</h3>

          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <b>Alter ego: </b> {hero.alter_ego}
            </li>
            <li className="list-group-item">
              <b>Publisher: </b> {hero.publisher}
            </li>
            <li className="list-group-item">
              <b>First appearance: </b> {hero.first_appearance}
            </li>
          </ul>

          <h5 className="mt-3">Characters</h5>
          <p>{hero.characters}</p>

          <button
            onClick={() => onBtnReturnClick()}
            className="btn btn-outline-primary btn-sm mt-3"
          >
            Return
          </button>
        </div>
      </div>
    </>
  );
};
