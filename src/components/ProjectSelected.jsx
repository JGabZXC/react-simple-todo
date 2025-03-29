export default function ProjectSelected({ project, onCancel, onDelete }) {
  return (
    <section className="flex-1 h-screen flex flex-col justify-center items-center bg-stone-900 text-stone-200">
      <div className="w-100">
        <div className="flex gap-4 justify-end my-4">
          <button
            onClick={() => onCancel(null)}
            className="py-2 px-4 text-stone-200 hover:text-stone-600 cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={() => onDelete(project.id)}
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
      </div>
    </section>
  );
}
