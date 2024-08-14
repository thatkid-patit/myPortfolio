import React from 'react'
import SkillList from '../../components/skilllist/SkillList'
import {
    Container,
    SectionTitle,
    SkillsContainer,
    Hr,
} from './SkillsElements'

const Skills = () => {
  return (
    <Container id="skills">
        <SectionTitle>Skills</SectionTitle>
        <SkillsContainer>
            <SkillList skill={"HTML/CSS"}/>
            <SkillList skill={"Javascript"}/>
            <SkillList skill={"ReactJS/Vite"}/>
            <SkillList skill={"Bootstrap"}/>
            <SkillList skill={"Tailwind CSS"}/>
            <SkillList skill={"Materialize CSS"}/>
        </SkillsContainer>
        <Hr/>
        <SkillsContainer>
            <SkillList skill={"PHP"}/>
            <SkillList skill={"Laravel"}/>
        </SkillsContainer>
        <Hr/>
        <SkillsContainer>
            <SkillList skill={"MySQL"}/>
        </SkillsContainer>
        <Hr/>
        <SkillsContainer>
            <SkillList skill={"Git"}/>
            <SkillList skill={"Github"}/>
        </SkillsContainer>
        <Hr/>
        <SkillsContainer>
            <SkillList skill={"VS Code"}/>
            <SkillList skill={"Postman"}/>
        </SkillsContainer>
    </Container>
  )
}

export default Skills
