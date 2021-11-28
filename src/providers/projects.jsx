import { useEffect, useState } from "react"
import { ProjectContext } from "../context"
import { Project } from "../lib/project"


export function ProjectsProvider({ children }) {
    const [projects, setProjects] = useState([])


    useEffect(() => {
        const savedProjects = localStorage.getItem("projects")

        if (savedProjects) {
            setProjects(JSON.parse(savedProjects))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("projects", JSON.stringify(projects))
    }, [projects])

    const projectsService = {
        Create( name, description ) {
            const project = new Project(name, description, projects.length + 1)
            console.log(project)
            setProjects([...projects, project])
            
        }, 
        Delete(id) {
            const newProjects = projects.filter(project => project.id !== id)
            setProjects(newProjects)
        }
    }

    return (<ProjectContext.Provider value={
        {
            projects,
            projectsService
        }
    }>
        {children}
    </ProjectContext.Provider>
    )

}