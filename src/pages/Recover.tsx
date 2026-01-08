import "./Recover.css";

export default function Recover() {
  return (
    <>
      <h1 className="recover-title">RECUPERAR CONTRASEÑA</h1>

      <p className="recover-text">
        Estimado Usuario,
        <br />
        Por medio del presente correo electrónico se le ha enviado un link
        para restablecer su contraseña.
      </p>

      <div className="recover-code">
        Código : 9821
      </div>

      <button className="recover-button">
        Ingrese aquí
      </button>
    </>
  );
}
