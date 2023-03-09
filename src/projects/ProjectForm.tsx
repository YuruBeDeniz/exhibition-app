import { SyntheticEvent, useState } from "react"
import { Project } from "./Project"

type ProjectFormProps = {
  project: Project
  onCancel: () => void
  onSave: (project: Project) => void
}

const ProjectForm = ({ project: initialProject, onCancel, onSave }: 
  ProjectFormProps) => {
  const [project, setProject] = useState(initialProject);

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    onSave(project);
  };

  const handleChange = (event: any) => {
    const { type, name, value, checked } = event.target;
    console.log("EVENT.TARGET: ", event.target);

    let updatedValue = type === "checkbox" ? checked : value;

    if(type === "number") {
      updatedValue = Number(updatedValue);
    };

    const change = {
      [name]: updatedValue,
    };

    let updatedProject: Project;

    setProject(prev => {
      updatedProject = new Project({...prev, ...change});
      return updatedProject;
    });
  }

  return (
   <form onSubmit={handleSubmit} className="input-group vertical">
     <label htmlFor="name">Project Name</label>
     <input
       type="text"
       name="name"
       placeholder="enter name"
       value={project.name}
       onChange={handleChange}
     />
     <label htmlFor="description">Project Description</label>
     <textarea
       name="description"
       placeholder="enter description"
       value={project.description}
       onChange={handleChange}
     />
     <label htmlFor="budget">Project Budget</label>
     <input
       type="number"
       name="budget"
       placeholder="enter budget"
       value={project.budget}
       onChange={handleChange}
     />
     <label htmlFor="isActive">Active?</label>
     <input
       type="checkbox"
       name="isActive"
       checked={project.isActive}
       onChange={handleChange}
     />
     <div className="input-group">
       <button className="primary bordered medium">Save</button>
       <span />
       <button type="button" className="bordered medium" onClick={onCancel}>
         cancel
       </button>
     </div>
   </form>
  )
}

export default ProjectForm

//onSave(new Project({ name: "updated project" })); this was inside handleSubmit function
//creating a new object is now done by handleChange function