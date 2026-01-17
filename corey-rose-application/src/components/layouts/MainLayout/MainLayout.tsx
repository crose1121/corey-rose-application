import { Outlet } from "react-router-dom";
import "./MainLayout.css";

export const MainLayout = () => {
  return (
    <div className="main-layout">
      <header>Public Header</header>

      <main>
        <Outlet />
      </main>

      <footer>Public Footer</footer>
    </div>
  );
};
