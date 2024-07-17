import { useState } from "react";
import NavBar from "../nav-bar/nav-bar";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function MainLayout() {
  const location = useLocation();
  const hideNav =
    location.pathname === "/sign-in" || location.pathname === "/sign-up";

  return (
    <div>
      <div className="sticky top-0 z-50">{!hideNav ? <NavBar /> : null}</div>
      <Outlet />
    </div>
  );
}
