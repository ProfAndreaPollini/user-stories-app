import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserStoryContext } from "./context";

export function ProjectCreateStoryPage() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const { storiesService } = useContext(UserStoryContext)
    const { id: projectId } = useParams()
    const navigate = useNavigate();

    function OnNameChange(e) {
        setName(e.target.value);
    }

    function OnDescriptionChange(e) {
        setDescription(e.target.value);
    }
    return (
        <>
            Project Create Story Page
            <div>
                <input type="text" placeholder="Story Title" value={name} onChange={OnNameChange} />
                <input type="text" placeholder="Story Description" value={description} onChange={OnDescriptionChange} />
                <button onClick={() => {
                    storiesService.Create(name, description, projectId)
                    setName("")
                    setDescription("")
                    navigate("/projects/" + projectId)
                }}>Create Story</button>
            </div>
        </>
    );
}
