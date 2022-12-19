import { Routes, Route, Navigate } from "react-router-dom";
import Guest from "./templates/guest/Guest";
import Web from "./templates/web/Web";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Guest />} />
      <Route path="/web" element={<Web />} />

      <Route path="/*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
