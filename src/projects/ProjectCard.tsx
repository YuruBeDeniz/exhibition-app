import { Project } from "./Project"

type ProjectCardProps = {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const handleEditClick = (projectBeingEdited: Project) => {
    console.log(projectBeingEdited);
  };

  return (
    <div className="card">
      <img src={project.imageUrl} alt={project.name} />
      <section className="section dark">
        <h5 className="strong">
          <strong>{project.name}</strong>
        </h5>
        <p>{project.description}</p>
        <p>Budget : {project.budget.toLocaleString()}</p>
        <button 
          onClick={() => handleEditClick(project)} 
          className=" bordered"
        >
          <span className="icon-edit "></span>
          Edit
        </button>
      </section>
    </div>
  )
}

export default ProjectCard