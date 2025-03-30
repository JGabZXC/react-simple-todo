import { useState, createContext } from "react";

let idCustom = 0;

export const ProjectsStateContext = createContext({
  id: null,
  projects: [],
  tasks: [],
  handleCreateProject: () => {},
  handleDeleteProject: () => {},
  handleCancelProject: () => {},
  handleProjectSelection: () => {},
  handleAddProject: () => {},
});

export default function ProjectsStateProvider({ children }) {
  const [projectsState, setProjectsState] = useState({
    id: null,
    projects: [],
    tasks: [],
  });

  function handleAddProject() {
    setProjectsState((prevState) => ({
      ...prevState,
      id: "creating",
    }));
  }

  function handleCreateProject(projectData) {
    setProjectsState((prevState) => {
      const newId = ++idCustom;
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

  function handleDeleteProject(id) {
    setProjectsState((prevState) => ({
      ...prevState,
      projects: prevState.projects.filter((project) => project.id !== id),
      id: null,
    }));
  }

  function handleCancelProject() {
    setProjectsState((prevState) => ({
      ...prevState,
      id: null,
    }));
  }

  function handleProjectSelection(id) {
    console.log("clicked", id);
    setProjectsState((prevState) => ({
      ...prevState,
      id: id,
    }));
  }

  const projectsStateValue = {
    id: projectsState.id,
    projects: projectsState.projects,
    tasks: projectsState.tasks,
    handleCreateProject,
    handleDeleteProject,
    handleCancelProject,
    handleProjectSelection,
    handleAddProject,
  };

  return (
    <ProjectsStateContext.Provider value={projectsStateValue}>
      {children}
    </ProjectsStateContext.Provider>
  );
}
