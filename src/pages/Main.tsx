import React from "react";
import "./Main.css";

const Main: React.FC = ({ children }) => {
  return (
    <main className="mainContent">
      <h1>Estados no React</h1>
      {children}
    </main>
  );
};

export default Main;
