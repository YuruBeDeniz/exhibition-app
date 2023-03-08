import { MOCK_PROJECTS } from "./MockProjects";
import ProjectList from "./ProjectList";

type Props = {}

const ProjectsPage = (props: Props) => {
  return (
    <>
    <h1>PROJECTS</h1>
    <ProjectList projects={MOCK_PROJECTS} />
    </>
  )
}

export default ProjectsPage;