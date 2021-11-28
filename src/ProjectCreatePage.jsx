import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProjectContext } from "./context";


export function ProjectCreatePage() {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const {  projectsService } = useContext(ProjectContext)
    const navigate = useNavigate()
    function OnNameChange (event) {
      setName(event.target.value)
    }

    function OnDescriptionChange(event) {
        setDescription(event.target.value)
    }

    return (
    <>
          Project Create Page
          <div>
                <input type="text" placeholder="Project Name" value={name} onChange={OnNameChange} />
                <input type="text" placeholder="Project Description" value={description} onChange={OnDescriptionChange} />
                <button onClick={() => {
                    projectsService.Create(name, description)
                    setName("")
                    setDescription("")
                    navigate("/projects")
                }}>Create Project</button>
          </div>
    </>
  );
}
