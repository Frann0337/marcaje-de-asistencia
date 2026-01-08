import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import RecupContrasena from "./RecupContrasena";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/recuperar" element={<RecupContrasena />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
