import React from 'react'
import blankProject from '../../assets/blank.jpg'
import ProjectCard from '../../components/projectcard/ProjectCard'
import {
    Container,
    SectionTitle,
    ProjectsContainer,
} from './ProjectsElements'
import thePizza from '../../assets/thePizza.png'
import oxheadInasals from '../../assets/oxheadInasals.png'
import oxheadMerchant from '../../assets/oxheadMerchant.png'
import pp5 from '../../assets/kodegoWD99P_PP5.png'
import docketEase from '../../assets/docketEase.png'
import nexusDot from '../../assets/nexusDot.png'
import pp2 from '../../assets/kodegoWD99P_PP2.png'
import crescendo from '../../assets/sonicShackCrescendo.png'

const Projects = () => {
  return (
    <Container id="projects">
        <SectionTitle>Projects</SectionTitle>
        <ProjectsContainer>
            {/* configure projects to showcase */}
            <ProjectCard 
                thumbnail={thePizza} 
                name="The Pizza"
                type="Pizza menu website"
                technology="PHP, Materialize CSS"
                url="https://github.com/thatkid-patit/thePizza.git"
            />
            <ProjectCard 
                thumbnail={oxheadInasals}
                name="Oxhead Inasals"
                type="Food delivery website customer interface"
                technology="Vite-React, Styled-Components, Laravel, MySQL, server Hosting"
                url="https://github.com/thatkid-patit/oxheadInasals.git"
            />
            <ProjectCard 
                thumbnail={oxheadMerchant} 
                name="Oxhead Merchant"
                type="Project Food delivery website merchant interface"
                technology="Vite-React, Styled-Components, Laravel, MySQL, server Hosting"
                url="https://github.com/thatkid-patit/oxheadMerchant.git"
            />
            <ProjectCard 
                thumbnail={pp5} 
                name="KodegoPH Portfolio Project 5" 
                type="Web basic API backend" 
                technology="PHP, MySQL"
                url="https://github.com/thatkid-patit/kodegoWD99P_PP5.git"
            />
            <ProjectCard 
                thumbnail={docketEase} 
                name="DocketEase" 
                type=" Docket web application frontend with fetched data from API and client-side routing"
                technology="Vite-React"
                url="https://github.com/thatkid-patit/docketEase.git"
            />
            <ProjectCard 
                thumbnail={nexusDot} 
                name="Nexus."
                type="CRM single-page web application for sales & leads generation"
                technology="HTML/CSS, Javascript"
                url="https://github.com/thatkid-patit/nexusDot.git"
            />
            <ProjectCard 
                thumbnail={pp2} 
                name="KodegoPH Portfolio Project 2"
                type="Responsive personal portfolio"
                technology="HTML, Bootstrap, Javascript"
                url="https://github.com/thatkid-patit/kodegoWD99P_PP2.git"
            />
            <ProjectCard 
                thumbnail={crescendo} 
                name="Sonic Shack Crescendo"
                type="Static e-commerce website for instruments frontend"
                technology="HTML/CSS, Javascript"
                url="https://github.com/thatkid-patit/sonicShackCrescendo.git"
            />
        </ProjectsContainer>
    </Container>
  )
}

export default Projects
