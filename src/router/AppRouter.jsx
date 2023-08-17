import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth/pages/LoginPage.jsx";
import { HeroesRouters } from "../heroes/routers/HeroesRouters.jsx";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="/*" element={<HeroesRouters />} />
      </Routes>
    </>
  );
};
