import { useForm, useQueryParams } from "../../../shared/hooks/index.js";
import { useNavigate } from "react-router-dom";
import { useWhatToRender } from "./hooks/useWhatToRender.js";
import { AlertInstructions } from "./components/AlertInstructions.jsx";
import { AlertNotFound } from "./components/AlertNotFound.jsx";
import { HeroCardList } from "./components/HeroCardList.jsx";
import { useHeroesFiltered } from "./hooks/useHeroesFiltered.js";

export const SearchPage = () => {
  const navigate = useNavigate();
  const { searchTerm = "" } = useQueryParams();
  const heroesFiltered = useHeroesFiltered(searchTerm);
  const whatToRender = useWhatToRender(searchTerm, heroesFiltered);
  const { formRef, onSubmit } = useForm({
    searchTerm: searchTerm,
  });

  onSubmit(({ searchTerm }) => {
    navigate(`?searchTerm=${searchTerm.toLowerCase().trim()}`);
  });

  return (
    <>
      <h1>SearchPage</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />

          <form ref={formRef}>
            <input
              type="text"
              placeholder="Enter hero name"
              className="form-control"
              name="searchTerm"
              autoComplete="off"
            />
            <button className="btn btn-primary mt-2">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {(() => {
            switch (whatToRender) {
              case "instructions":
                return <AlertInstructions />;
              case "not-found":
                return <AlertNotFound searchTerm={searchTerm} />;
              case "results":
                return <HeroCardList heroes={heroesFiltered} />;
            }
          })()}
        </div>
      </div>
    </>
  );
};
