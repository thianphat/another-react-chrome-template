import React from "react";
import ReactDOM from "react-dom";
import "./options.css";
import { createRoot } from "react-dom/client";

const App: React.FC<{}> = () => {
  return (
    <div>
      <img src="icon.png" />
    </div>
  );
};

const root = document.createElement("div");
document.body.appendChild(root);
ReactDOM.render(<App />, root);
