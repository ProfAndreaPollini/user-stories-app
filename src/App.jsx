
import { useEffect, useState } from "react"

import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import { ProjectCreatePage } from "./ProjectCreatePage";
import { ProjectCreateStoryPage } from "./ProjectCreateStoryPage";
import { ProjectPage } from "./ProjectPage";



import { ProjectsPage } from "./ProjectsPage";

import { ProjectsProvider } from "./providers/projects"
import { UserStoriesProvider } from "./providers/user_stories"

function HomePage() {
  return (
    <>
      Home Page
    </>
  )
}

function StoryPage() {
  return (
    <>
      Story Page
    </>
  )
}

function App() {

  return (

    <UserStoriesProvider>
      <ProjectsProvider>
        <BrowserRouter>
          <div className="App">
            <h1>User Stories App</h1>
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/projects">Projects</Link></li>
              </ul>
            </nav>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/new" element={<ProjectCreatePage />} />
              <Route path="/projects/:id" element={<ProjectPage />} />
              <Route path="/projects/:id/stories/new" element={<ProjectCreateStoryPage />} />
              <Route path="/stories/:id" element={<StoryPage />} />
            </Routes>
          </div>
        </BrowserRouter>
      </ProjectsProvider>
    </UserStoriesProvider>

  )
}

export default App
