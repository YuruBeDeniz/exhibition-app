import { Project } from "./Project"
import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm";

type ProjectListProps = {
  projects: Project[];
}

const ProjectList = ({ projects }: ProjectListProps) => {

  return (
   <div className="row">
    {projects.map((project) => (
      <div key={project.id} className="cols-sm">
        <ProjectCard project={project}/>
        <ProjectForm />
      </div>
    ))}
  </div>
  )
}

export default ProjectList