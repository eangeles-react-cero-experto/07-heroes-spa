import { Link, useNavigate } from "react-router-dom";
import { Navitem } from "../Navitem/Navitem.jsx";

export const Navbar = () => {
  const navigate = useNavigate();

  const onLogout = () => {
    console.log("onLogout");
    navigate("/login", { replace: true });
  };

  return (
    <>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container-fluid justify-content-start">
          <Link className="navbar-brand" href="#">
            HeroesApp
          </Link>
          <div className="navbar-nav w-100 justify-content-between">
            <div className="d-flex">
              <Navitem path={"/marvel"} label={"Marvel"} />
              <Navitem path={"/dc"} label={"DC"} />
              <Navitem path={"/search"} label={"Search"} />
            </div>
            <div className="d-flex pl-5">
              <span className="nav-item nav-link text-info">Edward</span>
              <button
                onClick={() => onLogout()}
                className="btn nav-link nsv-item ml-2"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
