import { HomePage } from "../HomePage";
import { AboutMe } from "../AboutMe";
import { MySkills } from "../MySkills";
import { CommercialProjects } from "../CommercialProjects";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import { ContactMe } from "../ContactMe";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/my-skills" element={<MySkills />} />
        <Route path="/commercial-projects" element={<CommercialProjects />} />
        <Route path="/contact-me" element={<ContactMe />} />
      </Routes>
    </div>
  );
}

export default App;
