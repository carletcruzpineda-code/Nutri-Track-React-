import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";
import PrivateRoute from "./PrivateRoutes";
import Header from "../Components/Header";

function Routing() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default Routing;