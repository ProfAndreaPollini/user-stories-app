
import { useEffect, useState } from "react"
import { UserStoryContext } from "../context"
import { UserStory } from "../lib/user_story"

export function UserStoriesProvider({ children }) {
    const [stories, setStories] = useState([])


    useEffect(() => {
        const savedStories = localStorage.getItem("stories")

        if (savedStories) {
            setStories(JSON.parse(savedStories))
        }


    }, [])

    useEffect(() => {
        localStorage.setItem("stories", JSON.stringify(stories))
    }, [stories])

    const storiesService = {
        Create(name, description, projectId) {
            const story = new UserStory(name, description, "", "", parseInt(projectId))
            console.log(story)
            setStories([...stories, story])
        },
        DeleteByProject(projectId) {
            setStories(stories.filter(story => story.projectId !== projectId))
        }
    }

    return (
        <UserStoryContext.Provider value={{ stories, storiesService }}>
            {children}
        </UserStoryContext.Provider>
    )

}