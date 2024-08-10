import { Navigate, Route, Routes } from "react-router-dom"
import { PersonalPage } from "../pages/PersonalPage"
import { ExperiencePage } from "../pages/ExperiencePage"
import { EducationPage } from "../pages/EducationPage"
import { SkillsPage } from "../pages/SkillsPage"
import { ProjectsPage } from "../pages/ProjectsPage"
import { ContactPage } from "../pages/ContactPage"

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/personal" element={<PersonalPage />} />
      <Route path="/experience" element={<ExperiencePage />} />
      <Route path="/education" element={<EducationPage />} />
      <Route path="/skills" element={<SkillsPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/*" element={<Navigate to={"/personal"} />} />
    </Routes>
  )
}
