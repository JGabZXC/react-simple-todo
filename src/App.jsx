import { useState } from "react";

import SideBar from "./components/SideBar";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSelected from "./components/ProjectSelected";
import CreateProject from "./components/CreateProject";

let id = 0;

function App() {
  const [projectsState, setProjectsState] = useState({
    id: null,
    projects: [],
    tasks: [],
  });

  function handleCreateProject(projectData) {
    setProjectsState((prevState) => {
      const newId = ++id;
      const newProject = {
        id: newId,
        title: projectData.title,
        description: projectData.description,
        dueDate: projectData.dueDate,
      };

      return {
        ...prevState,
        id: newId,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleCancelProjectCreation(id) {
    setProjectsState((prevState) => ({
      ...prevState,
      id: id,
    }));
  }

  function handleProjectSelection(id) {
    setProjectsState((prevState) => ({
      ...prevState,
      id: id,
    }));
  }

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.id
  );

  let content = (
    <ProjectSelected
      project={selectedProject}
      onCancel={handleCancelProjectCreation}
    />
  );

  if (projectsState.id === null) {
    content = <NoProjectSelected onAdd={handleProjectSelection} />;
  } else if (projectsState.id === "creating") {
    content = (
      <CreateProject
        onCancel={handleCancelProjectCreation}
        onSave={handleCreateProject}
      />
    );
  }

  return (
    <>
      <main className="flex">
        <SideBar
          projects={projectsState.projects}
          onAdd={handleProjectSelection}
        />
        {content}
      </main>
    </>
  );
}

export default App;
