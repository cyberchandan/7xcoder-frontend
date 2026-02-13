export default function ProjectCard({ project }) {
    return (
      <div className="bg-slate-900 rounded-xl overflow-hidden ring-1 ring-slate-800 hover:ring-cyan-400 transition">
        
        <img
          src={project.image}
          alt={project.title}
          className="h-40 w-full object-cover"
        />
  
        <div className="p-4 space-y-2">
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <p className="text-sm text-slate-400">{project.description}</p>
  
          <div className="flex flex-wrap gap-2 text-xs">
            {project.tech.map((t) => (
              <span key={t} className="px-2 py-1 rounded bg-slate-800">
                {t}
              </span>
            ))}
          </div>
  
          {/* ✅ External link → new tab */}
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-3 text-center bg-cyan-500 text-black py-2 rounded"
          >
            Live Demo
          </a>
        </div>
      </div>
    );
  }
  