import { useState, useContext } from "react";
import { ProjectsStateContext } from "../store/project-state-context";

export default function ProjectSelected() {
  const {
    id,
    projects,
    tasks,
    handleCancelProject,
    handleDeleteProject,
    handleAddTask,
    handleDeleteTask,
    handleUpdateTask,
  } = useContext(ProjectsStateContext);
  const [newTask, setNewTask] = useState("");
  const [isEditing, setIsEditing] = useState(null);
  const [taskValue, setTaskValue] = useState("");

  const project = projects.find((proj) => proj.id === id);
  const task = tasks.filter((proj) => proj.parentId === id);

  function startEdit(task) {
    setIsEditing(task.id);
    setTaskValue(task.name);
  }

  function saveEdit(taskId) {
    handleUpdateTask(taskId, taskValue);
    setIsEditing(null);
    setTaskValue("");
  }

  function handleChange(e) {
    setNewTask(e.target.value);
  }

  function handleTask() {
    const taskName = newTask;
    if (taskName.trim() === "") return;

    handleAddTask({
      name: taskName,
      parentId: id,
    });
    setNewTask("");
  }

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
              onChange={handleChange}
              value={newTask}
              className="w-1/2 p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
              type="text"
            />
            <button
              onClick={handleTask}
              className="my-4 bg-stone-700 text-stone-200 py-2 px-4 rounded hover:bg-stone-600 transition duration-300 ease-in-out cursor-pointer"
            >
              Add Task
            </button>
          </div>
          <ul className=" h-80 overflow-y-auto">
            {task.length === 0 && <p>No task</p>}
            {task &&
              task.map((task) => {
                return (
                  <li
                    key={task.id}
                    className="text-left px-2 py-1 rounded-sm my-1 text-stone-200 focus:outline-none"
                  >
                    <div className="flex justify-between gap-4">
                      {isEditing === task.id ? (
                        <input
                          type="text"
                          className="p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
                          value={taskValue}
                          onChange={(e) => setTaskValue(e.target.value)}
                        />
                      ) : (
                        <p className="text-stone-200 break-all">{task.name}</p>
                      )}
                      <div className="flex gap-2">
                        {isEditing === task.id ? (
                          <button onClick={() => saveEdit(task.id)}>
                            Save
                          </button>
                        ) : (
                          <button
                            onClick={() =>
                              startEdit({ id: task.id, name: task.name })
                            }
                          >
                            Edit
                          </button>
                        )}
                        <button onClick={() => handleDeleteTask(task.id)}>
                          Clear
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </section>
  );
}

// outline-1 outline-stone-600 rounded-sm p-2 bg-stone-800
