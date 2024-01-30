import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import GlobalNavbar from "./componentes/GlobalNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalFooter from "./componentes/GlobalFooter";
import IniciarSesion from "./componentes/IniciarSesion";
import Home from "./componentes/Home";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/futbol-manager"
          element={
            <>
              <Outlet />
              <GlobalNavbar />
              <Home />
              <GlobalFooter />
            </>
          }
        />
        <Route path="/futbol-manager/login" element={<IniciarSesion />} />
      </Routes>
    </div>
  );
};

export default App;
