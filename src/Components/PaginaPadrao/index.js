import { Banner } from "Components/Banner";
import { Outlet } from "react-router-dom";

export const PaginaPadrao = () => {
  return (
    <main>
      <Banner />
      <Outlet />
    </main>
  );
};
