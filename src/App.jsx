import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ProjectList from "./components/ProjectList";
import ProjectForm from "./components/ProjectForm";
import initialProjects from "./data/blog";

function App() {
  const [projects, setProjects] = useState(initialProjects);
  const [search, setSearch] = useState("");

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase())
  );

  function addProject(newProject) {
    setProjects([...projects, newProject]);
  }

  return (
    <div>
      <Header />
      <SearchBar search={search} setSearch={setSearch} />
      <ProjectForm addProject={addProject} />
      <ProjectList projects={filteredProjects} />
    </div>
  );
}

export default App;