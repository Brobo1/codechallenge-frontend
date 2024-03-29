import { Outlet } from "react-router-dom";

export function Root() {
  return (
    <>
      <h1>Root Page</h1>
      <Outlet />
    </>
  );
}
