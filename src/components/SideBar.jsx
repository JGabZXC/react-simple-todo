import { useContext } from "react";
import { ProjectsStateContext } from "../store/project-state-context";

export default function SideBar() {
  const { projects, handleAddProject, handleProjectSelection, id } =
    useContext(ProjectsStateContext);

  return (
    <aside className="min-w-[25rem] bg-stone-800 h-screen p-4">
      <div className="flex justify-between items-center">
        <h2 className="text-stone-200 text-xl font-bold mb-4 uppercase">
          Project List
        </h2>
        <button
          onClick={handleAddProject}
          className="bg-stone-700 text-stone-200 py-2 px-4 rounded mb-4 hover:bg-stone-600 transition duration-300 ease-in-out cursor-pointer"
        >
          Add Project
        </button>
      </div>

      <ul>
        {projects.map((project) => {
          let cssClass =
            "w-full text-left px-2 py-1 rounded-sm my-1 text-stone-200 focus:outline-none cursor-pointer";
          if (project.id === id) cssClass += " bg-stone-700";
          else cssClass += " hover:outline-1 hover:outline-stone-600";
          return (
            <li key={project.id}>
              <button
                onClick={() => handleProjectSelection(project.id)}
                className={cssClass}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
