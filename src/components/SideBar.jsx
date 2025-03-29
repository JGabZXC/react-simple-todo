export default function SideBar({ projects, onAdd }) {
  return (
    <aside className="min-w-[25rem] bg-stone-800 h-screen p-4">
      <div className="flex justify-between items-center">
        <h2 className="text-stone-200 text-xl font-bold mb-4 uppercase">
          Project List
        </h2>
        <button
          onClick={() => onAdd("creating")}
          className="bg-stone-700 text-stone-200 py-2 px-4 rounded mb-4 hover:bg-stone-600 transition duration-300 ease-in-out cursor-pointer"
        >
          Add Project
        </button>
      </div>

      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <button
              onClick={() => onAdd(project.id)}
              className="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-200 hover:bg-stone-800 focus:outline-none focus:bg-stone-800 cursor-pointer hover:outline-1 hover:outline-stone-600"
            >
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
