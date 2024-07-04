import React from 'react'
import blankProject from '../../assets/blank.jpg'
import ProjectCard from '../../components/projectcard/ProjectCard'
import {
    Container,
    SectionTitle,
    ProjectsContainer,
} from './ProjectsElements'

const Projects = () => {
  return (
    <Container id="projects">
        <SectionTitle>Projects</SectionTitle>
        <ProjectsContainer>
            {/* configure projects to showcase */}
            <ProjectCard 
                thumbnail={blankProject} 
                name={"Example Project"} 
                type={"Example Project"} 
                url={"https://youtube.com"}
            />
            <ProjectCard 
                thumbnail={blankProject} 
                name={"Example Project"} 
                type={"Example Project"} 
                url={"https://youtube.com"}
            />
            <ProjectCard 
                thumbnail={blankProject} 
                name={"Example Project"} 
                type={"Example Project"} 
                url={"https://youtube.com"}
            />
        </ProjectsContainer>
    </Container>
  )
}

export default Projects
