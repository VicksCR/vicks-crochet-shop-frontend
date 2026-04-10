import { Outlet } from "react-router-dom";

export default function Main() {
  return (
    <main className="main">
      <div className="main__content">
        <Outlet />
      </div>
    </main>
  );
}
