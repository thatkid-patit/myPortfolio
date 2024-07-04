import React from 'react'
import {
    Skill,
    CheckMark,
} from './SkillListElements'

const SkillList = ({skill}) => {
  return (
    <Skill>
        <CheckMark/>
        <p>{skill}</p>
    </Skill>
  )
}

export default SkillList
