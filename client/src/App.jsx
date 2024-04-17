import React, { Suspense, useState, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
const Login = lazy(() => import("./components/users/login"));
import Home from "./components/shared/home";
import Layout from "./components/layout/layout";
import Loader from "./components/common/loader";

function App() {
  const isLoggedIn = sessionStorage.getItem("isLoggedIn");
  return (
    <Routes>
      <Route
        path="/login"
        element={
          isLoggedIn ? (
            <Navigate to="/" replace />
          ) : (
            <Suspense fallback={<Loader />}>
              <Login />
            </Suspense>
          )
        }
      />
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route
          path="/users-details"
          element={
            <Suspense fallback={<Loader />}>
              <Login />
            </Suspense>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
