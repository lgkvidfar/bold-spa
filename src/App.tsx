import React from "react";
import { Outlet } from "react-router-dom";
import BoldBackground from "./comps/BoldBackground";
import FixedMenu from "./comps/menu/FixedMenu";

const App: React.FC = () => {
  return (
    <div className="text-light min-h-screen">
      <FixedMenu />
      <BoldBackground />
      <Outlet />
    </div>
  );
};

export default App;
