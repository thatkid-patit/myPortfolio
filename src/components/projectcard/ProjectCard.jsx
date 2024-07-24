import React from 'react'
import {
    Link,
    Thumbnail,
    Title,
    Description,
} from './ProjectCardElements'

const ProjectCard = ({thumbnail, name, type, url, technology}) => {
  return (
    <Link href={url} target="_blank">
        <Thumbnail src={thumbnail} alt={name}/>
        <Title>{name}</Title>
        <Description>{type}</Description>
        <Description>{technology}</Description>
    </Link>
  )
}

export default ProjectCard
