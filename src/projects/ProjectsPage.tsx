import { useState } from "react";
import { MOCK_PROJECTS } from "./MockProjects";
import { Project } from "./Project";
import ProjectList from "./ProjectList";

type Props = {}

const ProjectsPage = (props: Props) => {
  const [projects, setProjects] = useState<Project[]>(MOCK_PROJECTS);

  const saveProject = (project: Project) => {
    let updatedProjects = projects.map((p: Project) => {
      return p.id === project.id ? project : p;
    });
    setProjects(updatedProjects);
  };

  return (
    <>
    <h1>PROJECTS</h1>
    <ProjectList 
      projects={projects}
      onSave={saveProject} />
    </>
  )
}

export default ProjectsPage;