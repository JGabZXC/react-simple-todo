import { useRef, useContext } from "react";
import Input from "./Input";
import { ProjectsStateContext } from "../store/project-state-context";

export default function CreateProject() {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();
  const { handleCancelProject, handleCreateProject } =
    useContext(ProjectsStateContext);

  function handleSave() {
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const dueDate = dueDateRef.current.value;
    if (!title || !description || !dueDate) {
      alert("Please fill in all fields");
      return;
    }

    handleCreateProject({
      title,
      description,
      dueDate,
    });
  }
  return (
    <section className="flex-1 h-screen flex flex-col items-center justify-center bg-stone-900 text-stone-200">
      <menu className="flex items-center justify-end gap-4 my-4 w-100">
        <li>
          <button
            onClick={handleCancelProject}
            className="py-2 px-4 text-stone-200 hover:text-stone-600 cursor-pointer"
          >
            Cancel
          </button>
        </li>
        <li>
          <button
            onClick={handleSave}
            className="bg-stone-700 text-stone-200 py-2 px-4 rounded hover:bg-stone-600 transition duration-300 ease-in-out cursor-pointer"
          >
            Save
          </button>
        </li>
      </menu>
      <form className="w-[25rem]">
        <Input ref={titleRef} label="Title" type="text" />
        <Input ref={descriptionRef} label="Description" textarea />
        <Input ref={dueDateRef} label="Due date" type="date" />
      </form>
    </section>
  );
}
