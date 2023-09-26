import { createContext, useReducer } from "react";
import { authReducer, types } from "../reducers/index.js";

export const AuthContext = createContext({});

const init = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return {
    isLoggedIn: !!user,
    username: user?.username,
  };
};

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {}, init);

  const login = (username = "") => {
    const action = {
      type: types.login,
      payload: {
        username: username,
      },
    };

    localStorage.setItem("user", JSON.stringify(action.payload));
    dispatch(action);
  };

  const logout = () => {
    const action = {
      type: types.logout,
      payload: undefined,
    };

    localStorage.removeItem("user");
    dispatch(action);
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
