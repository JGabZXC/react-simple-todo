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
  handleAddTask: () => {},
  handleDeleteTask: () => {},
  handleUpdateTask: () => {},
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
      tasks: prevState.tasks.filter((task) => task.parentId !== id),
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
    setProjectsState((prevState) => ({
      ...prevState,
      id: id,
    }));
  }

  function handleAddTask(taskData) {
    setProjectsState((prevState) => {
      const newId = ++idCustom;
      const newTask = {
        id: newId,
        name: taskData.name,
        parentId: taskData.parentId,
      };

      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectsState((prevState) => ({
      ...prevState,
      tasks: prevState.tasks.filter((task) => task.id !== id),
    }));
  }

  function handleUpdateTask(id, taskData) {
    setProjectsState((prevState) => {
      const task = prevState.tasks.findIndex((task) => task.id === id);
      prevState.tasks[task].name = taskData;

      return {
        ...prevState,
      };
    });
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
    handleAddTask,
    handleDeleteTask,
    handleUpdateTask,
  };

  return (
    <ProjectsStateContext.Provider value={projectsStateValue}>
      {children}
    </ProjectsStateContext.Provider>
  );
}
