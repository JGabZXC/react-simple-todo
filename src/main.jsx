import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ProjectsStateProvider from "./store/project-state-context";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProjectsStateProvider>
      <App />
    </ProjectsStateProvider>
  </StrictMode>
);
