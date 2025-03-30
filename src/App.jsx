import { useContext } from "react";
import { ProjectsStateContext } from "./store/project-state-context";

import SideBar from "./components/SideBar";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSelected from "./components/ProjectSelected";
import CreateProject from "./components/CreateProject";

function App() {
  const { id } = useContext(ProjectsStateContext);
  // const selectedProject = projects.find((project) => project.id === id);

  let content = <ProjectSelected />;

  if (id === null) {
    content = <NoProjectSelected />;
  } else if (id === "creating") {
    content = <CreateProject />;
  }

  return (
    <main className="flex">
      <SideBar />
      {content}
    </main>
  );
}

export default App;
