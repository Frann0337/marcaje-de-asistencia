import Recover from "./pages/Recover";
import "./App.css";

export default function App() {
  return (
    <div className="page">

      {/* Logo fuera del recuadro */}
      <div className="logo">
        <img src="/logo-krono.png" alt="KRONO" />
      </div>

      {/* Recuadro */}
      <div className="card">
        <Recover />
      </div>

    </div>
  );
}
