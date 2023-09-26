import { Navbar } from "../../shared/components/index.js";
import { Navigate, Route, Routes } from "react-router-dom";
import { DcPage, MarvelPage } from "../pages/index.js";
import { SearchPage } from "../pages/SearchPage/SearchPage.jsx";
import { HeroPage } from "../pages/HeroPage/HeroPage.jsx";

export const HeroesLayout = () => {
  return (
    <>
      <Navbar />

      <div className="container mt-5">
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/marvel" replace={true} />}
          ></Route>

          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DcPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="hero/:heroId" element={<HeroPage />} />

          {/*<Route path="*" element={<Navigate to="/marvel" replace={true} />} />*/}
        </Routes>
      </div>
    </>
  );
};
