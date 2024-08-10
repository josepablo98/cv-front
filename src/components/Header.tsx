import "../styles/header.css"
import { NavLink } from "react-router-dom"

export const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to="/personal">PERSONAL</NavLink>
        <NavLink to="/experience">EXPERIENCE</NavLink>
        <NavLink to="/education">EDUCATION</NavLink>
        <NavLink to="/skills">SKILLS</NavLink>
        <NavLink to="/projects">PROJECTS</NavLink>
        <NavLink to="/contact">CONTACT</NavLink>
      </nav>
    </header>
  )
}

