import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const IniciarSesion = () => {
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [credencialUsuario, setCredencialUsuario] = useState("");
  const navigate = useNavigate();

  const manejarFormularioLogin = (e) => {
    e.preventDefault();

    fetch(`http://localhost:8080/futbol-manager/usuario/${nombreUsuario}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        credencialUsuarioIntroducida: credencialUsuario,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("¡Error al iniciar sesión!");
        }
        return response.json();
      })
      .then((data) => {
        if (data.success) {
          navigate("/futbol-manager");
        } else {
          // Alerta de inicio de sesión fallido
          alert("Inicio de sesión fallido");
        }
      })
      .catch((error) => console.error("Error al recuperar datos: ", error));
  };

  const abrirVentanaRegistro = () => {    
    navigate("/futbol-manager/registro");
  };

  return (
    <div className="InicarSesion">
      <div className="card text-center ">
        <div className="card-header">Iniciar sesión</div>
        <div className="card-body">
          <form onSubmit={manejarFormularioLogin}>
            <div className="row justify-content-center">
              <div className="col col-3">
                <div className="input-group mb-3">
                  <span className="input-group-text">Nombre</span>
                  <input
                    type="text"
                    className="form-control"
                    value={nombreUsuario}
                    onChange={(e) => setNombreUsuario(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col col-3">
                <div className="input-group mb-3">
                  <span className="input-group-text">Contraseña</span>
                  <input
                    type="password"
                    className="form-control"
                    value={credencialUsuario}
                    onChange={(e) => setCredencialUsuario(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary me-3">
              Iniciar sesión
            </button>
            <button
              type="submit"
              className="btn btn-danger"
              onClick={abrirVentanaRegistro}
            >
              Registrarse
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default IniciarSesion;
