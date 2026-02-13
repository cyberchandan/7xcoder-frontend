import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">

        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-semibold">Recent Projects</h2>

          {/* ✅ SPA SAFE */}
          <Link
            to="/projects"
            className="text-cyan-400 hover:underline"
          >
            View All →
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}
