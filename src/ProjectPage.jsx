import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ProjectContext, UserStoryContext } from "./context";

export function ProjectPage() {
    const { id } = useParams()
    const { projects } = useContext(ProjectContext)
    const { stories} = useContext(UserStoryContext)
    
    const project = projects.find(p => p.id === parseInt(id))
    const projectStories = stories.filter(s => s.projectId === project.id)
  return (
    <>
          <h2>Project: {project.name}</h2>
          <p>{project.description}</p>
          <pre>{JSON.stringify(projectStories)}</pre>
          <h3>Stories</h3>
          <Link to={`/projects/${project.id}/stories/new`}>Add a new story</Link>
          <ul>
              {projectStories.map(story => (
                  <li key={story.id}>{story.name}</li>
                ))}
          </ul>
    </>
  );
}
