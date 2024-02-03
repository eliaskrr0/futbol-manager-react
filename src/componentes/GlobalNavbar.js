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
      </div>
    </nav>
  );
};

export default GlobalNavbar;
