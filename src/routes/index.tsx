
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HOME, } from "./routesPaths";
import Home from "@src/pages/Home";

export default function RoutesConfig() {
  return (
    <Router>
      <Routes>
        <Route path={HOME.fullUrl} element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}
