import Layout from "./Components/Layout";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Order from "./Pages/Order";
import User from "./Pages/User";
import Employee from "./Pages/Employee";
import Test from "./Pages/test";
import React from "react";

function App() {
  return (
    <div className="container-fluid">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/order" element={<Order />} />
          <Route path="/user" element={<User />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/test" element={<Test />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
