import { useState } from "react";
import "./RecupContrasena.css";

export default function RecupContrasena() {
  const [codigo, setCodigo] = useState("");

  return (
    <div>
      <h2>Recuperar contraseña</h2>
      <input
        value={codigo}
        onChange={(e) => setCodigo(e.target.value)}
        placeholder="Código"
      />
    </div>
  );
}
