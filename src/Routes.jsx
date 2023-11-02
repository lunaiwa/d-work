import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ABOUT = React.lazy(() => import("pages/ABOUT"));
const LOGIN = React.lazy(() => import("pages/LOGIN"));
const SCRUMBOARD = React.lazy(() => import("pages/SCRUMBOARD"));
const Homepage = React.lazy(() => import("pages/Homepage"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/scrumboard" element={<SCRUMBOARD />} />
          <Route path="/login" element={<LOGIN />} />
          <Route path="/about" element={<ABOUT />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
