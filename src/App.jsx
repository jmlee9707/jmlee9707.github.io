import React from "react";
import "@styles/reset.css";
import "@styles/_typography.scss";
import "@styles/_common.scss";
import "@styles/font.css";
import Router from "./routers/Router";
import "./App.scss";

function App() {
  return (
    <div className="body">
      <Router />
    </div>
  );
}

export default App;
