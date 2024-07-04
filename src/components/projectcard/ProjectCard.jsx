import React from 'react'
import {
    Link,
    Thumbnail,
} from './ProjectCardElements'

const ProjectCard = ({thumbnail, name, type, url}) => {
  return (
    <Link href={url} target="_blank">
        <Thumbnail src={thumbnail} alt={name}/>
        <h3>{name}</h3>
        <p>{type}</p>
    </Link>
  )
}

export default ProjectCard
