import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./components/homepage";
import Lores from "./components/lores";

const CustomRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="*" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/lores" element={<Lores />} />
    </Routes>
  );
};

export default CustomRoutes;
