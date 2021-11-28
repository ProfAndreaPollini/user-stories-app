import { useContext } from "react";
import { Link } from "react-router-dom";
import {ProjectContext, UserStoryContext} from "./context"

export function ProjectsPage() {
    const { projects,projectsService } = useContext(ProjectContext)
    const { storiesService} = useContext(UserStoryContext)

    return (
    <>
            <h3>Projects</h3>
            <Link to="/projects/new">New Project</Link>
            <ul>
                {projects.map(project => (
                    <li key={project.id}>
                        <h4><Link to={`/projects/${project.id}`}> {project.name}</Link></h4>
                        <p>{project.description}</p>
                        <button onClick={() => {
                            projectsService.Delete(project.id)
                            storiesService.DeleteByProject(project.id)
                        }}>Delete</button>
                    </li>
                ))}
            </ul>
            <pre>{JSON.stringify(projects) }</pre>
    </>
  );
}
