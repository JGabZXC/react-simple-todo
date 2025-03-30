import { useContext } from "react";
import { ProjectsStateContext } from "../store/project-state-context";

export default function ProjectSelected() {
  const { id, projects, handleCancelProject, handleDeleteProject } =
    useContext(ProjectsStateContext);
  const project = projects.find((proj) => proj.id === id);
  // const project = projects.find((proj) => proj.id === projects.id);
  // console.log(project);

  return (
    <section className="flex-1 h-screen flex flex-col justify-center items-center bg-stone-900 text-stone-200">
      <div className="w-100">
        <div className="flex gap-4 justify-end my-4">
          <button
            onClick={handleCancelProject}
            className="py-2 px-4 text-stone-200 hover:text-stone-600 cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={() => handleDeleteProject(project.id)}
            className="bg-stone-700 text-stone-200 py-2 px-4 rounded hover:bg-stone-600 transition duration-300 ease-in-out cursor-pointer"
          >
            Delete Project
          </button>
        </div>
        <h1 className="text-3xl font-bold mb-1">{project.title}</h1>
        <p className="text-lg mb-4">{project.description}</p>
        <p className="text-sm mb-4 text-stone-400">
          Due date:{" "}
          {new Date(project.dueDate).toLocaleString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>
        <div className="border-t-2 border-stone-200">
          <div className="flex items-center justify-between gap-4">
            <input
              className="w-1/2 p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
              type="text"
            />
            <button className="my-4 bg-stone-700 text-stone-200 py-2 px-4 rounded hover:bg-stone-600 transition duration-300 ease-in-out cursor-pointer">
              Add Task
            </button>
          </div>
          TASK LIST
        </div>
      </div>
    </section>
  );
}
