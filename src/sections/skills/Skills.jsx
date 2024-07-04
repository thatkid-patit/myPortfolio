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
            <SkillList skill={"HTML"}/>
            <SkillList skill={"CSS"}/>
            <SkillList skill={"Javascript"}/>
        </SkillsContainer>
        <Hr/>
        <SkillsContainer>
            <SkillList skill={"Bootstrap"}/>
            <SkillList skill={"Tailwind CSS"}/>
            <SkillList skill={"ReactJS"}/>
        </SkillsContainer>
        <Hr/>
        <SkillsContainer>
            <SkillList skill={"PHP"}/>
            <SkillList skill={"Laravel"}/>
            <SkillList skill={"MySQL"}/>
        </SkillsContainer>
    </Container>
  )
}

export default Skills
