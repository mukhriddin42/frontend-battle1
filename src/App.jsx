import React from "react";
import DashboardSidebar from "./components/DashboardSidebar";
import DashboardNavbar from "./components/DashboardNavbar";
import { BrowserRouter, Outlet, Route, Router, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import Group from "./pages/Group";
import Notifactions from "./pages/Notifactions";

const App = () => {
  return (
    <>
      <div className="bg-[#EEEEEE] overflow-hidden ">
        <DashboardNavbar />
        <div className="flex">
          <DashboardSidebar />
          <main className="w-[100%] p-4 overflow-scroll">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default App;
