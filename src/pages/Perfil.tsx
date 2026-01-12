import { useState, ChangeEvent } from "react";
import "./Perfil.css";
import Header from "../components/Header";

const Perfil = () => {
  // ESTADOS
  const [nombre, setNombre] = useState("Camila Pinilla Cabrera");
  const [correo] = useState("cgpinilla@indracompany.com");
  const [contrasena, setContrasena] = useState("123456");

  const [editandoNombre, setEditandoNombre] = useState(false);
  const [editandoContrasena, setEditandoContrasena] = useState(false);

  const [fotoPerfil, setFotoPerfil] = useState<string>("/avatar.png");

  // MANEJADORES
  const cambiarFoto = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const imagenURL = URL.createObjectURL(e.target.files[0]);
      setFotoPerfil(imagenURL);
    }
  };

  return (
    <div className="perfil-contenedor">
      <Header nombreUsuario={nombre} inicial={nombre.charAt(0)} />

      <div className="perfil-body">
        {/* SIDEBAR */}
        <aside className="perfil-sidebar">
          <button>Registrar</button>
          <button>Historial</button>
          <button>Cerrar sesión</button>
        </aside>

        {/* CARD PERFIL */}
        <section className="perfil-card">
          {/* FOTO PERFIL */}
          <div className="foto-contenedor">
  <img src={fotoPerfil} alt="Avatar" className="perfil-avatar" />

  <label className="editar-foto-icono">
    ✏️
    <input
      type="file"
      accept="image/*"
      onChange={cambiarFoto}
      hidden
    />
  </label>
</div>


          {/* INFO PERFIL */}
          <div className="perfil-info">
            {/* NOMBRE */}
            <div className="info-item">
              <span>Nombre:</span>

              {editandoNombre ? (
                <>
                  <input
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  />
                  <button
                    className="editar-icono"
                    onClick={() => setEditandoNombre(false)}
                  >
                    💾
                  </button>
                </>
              ) : (
                <>
                  <strong>{nombre}</strong>
                  <button
                    className="editar-icono"
                    onClick={() => setEditandoNombre(true)}
                  >
                    ✏️
                  </button>
                </>
              )}
            </div>

            {/* CORREO (solo lectura) */}
            <div className="info-item">
              <span>Correo:</span>
              <strong>{correo}</strong>
            </div>

            {/* CONTRASEÑA */}
            <div className="info-item">
              <span>Contraseña:</span>

              {editandoContrasena ? (
                <>
                  <input
                    type="password"
                    value={contrasena}
                    onChange={(e) => setContrasena(e.target.value)}
                  />
                  <button
                    className="editar-icono"
                    onClick={() => setEditandoContrasena(false)}
                  >
                    💾
                  </button>
                </>
              ) : (
                <>
                  <strong>••••••••</strong>
                  <button
                    className="editar-icono"
                    onClick={() => setEditandoContrasena(true)}
                  >
                    ✏️
                  </button>
                </>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Perfil;
