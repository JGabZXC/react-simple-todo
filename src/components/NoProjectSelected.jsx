import { useContext } from "react";
import { ProjectsStateContext } from "../store/project-state-context";

export default function NoProjectSelected() {
  const { handleAddProject } = useContext(ProjectsStateContext);
  return (
    <section className="flex-1 h-screen flex flex-col items-center justify-center bg-stone-900 text-stone-200">
      <h1 className="text-3xl font-bold mb-1">No Project Selected</h1>
      <p className="text-lg mb-4">
        Please select a project to view its details.
      </p>
      <button
        onClick={handleAddProject}
        className="bg-stone-700 text-stone-200 py-2 px-4 rounded mb-4 hover:bg-stone-600 transition duration-300 ease-in-out cursor-pointer"
      >
        Create Project
      </button>
    </section>
  );
}
