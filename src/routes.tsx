import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projetcs from "./pages/Projects";

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="projects" element={<Projetcs />} />
    </Routes>
  );
}
