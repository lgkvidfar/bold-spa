import React from "react";
import { Link, Outlet } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="bg-dark text-light h-screen">
      <nav className="bg-dark fixed right-0 top-0 flex w-fit gap-2 rounded-bl p-4 opacity-10">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default App;
