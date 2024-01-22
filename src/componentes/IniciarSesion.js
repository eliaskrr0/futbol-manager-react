import "bootstrap/dist/css/bootstrap.min.css";

const IniciarSesion = () => {
  return (
    <div className="InicarSesion">
      <div className="card text-center ">
        <div className="card-header">Iniciar sesión</div>
        <div className="card-body">
          <div className="row justify-content-center">
            <div className="col col-3">
              <div className="input-group mb-3">
                <span className="input-group-text">Nombre</span>
                <input type="text" className="form-control" />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col col-3">
              <div className="input-group mb-3">
                <span className="input-group-text">Contraseña</span>
                <input type="password" className="form-control" />
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary me-3">
            Iniciar sesión
          </button>
          <button type="submit" className="btn btn-danger">
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default IniciarSesion;
