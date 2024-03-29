import { Project } from "./Project"

type ProjectCardProps = {
  project: Project
  onEdit: (project: Project) => void
}

const ProjectCard = (props: ProjectCardProps) => {
  const { project, onEdit } = props;

  const handleEditClick = (projectBeingEdited: Project) => {
    onEdit(projectBeingEdited);
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