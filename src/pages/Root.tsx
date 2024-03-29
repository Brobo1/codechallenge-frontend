import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar.tsx";

export function Root() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
