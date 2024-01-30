import { Link } from "react-router-dom";

const GlobalNavbar = () => {  
  return (
    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/futbol-manager">
          Futbol Manager
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link active"
                to="/futbol-manager"
                aria-current="page"
              >
                Inicio
              </Link>
            </li>
          </ul>
        </div>
        <Link to="/futbol-manager/login">
        <button className="btn btn-outline-danger" type="submit">
          Iniciar sesión
        </button>
        </Link>
        <button className="btn btn-outline-warning ms-2" type="submit">
          Registrarse
        </button>
      </div>
    </nav>
  );
};

export default GlobalNavbar;
