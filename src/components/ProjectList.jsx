import ProjectCard from "./ProjectCard";

function ProjectList({ projects }) {
  return (
    <div>
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
        />
      ))}
    </div>
  );
}

export default ProjectList;