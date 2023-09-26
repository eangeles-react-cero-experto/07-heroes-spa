import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth/index.js";
import { PrivateRoutesWrapper } from "./wrappers/PrivateRoutesWrapper.jsx";
import { HeroesLayout } from "../heroes/layout/HeroesLayout.jsx";
import { PublicRoutesWrapper } from "./wrappers/PublicRoutesWrapper.jsx";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="login"
          element={
            <PublicRoutesWrapper>
              <LoginPage />
            </PublicRoutesWrapper>
          }
        />

        <Route
          path="/*"
          element={
            <PrivateRoutesWrapper>
              <HeroesLayout />
            </PrivateRoutesWrapper>
          }
        />
      </Routes>
    </>
  );
};
