import React from 'react';
import { ProjectsList } from '../helpers/ProjectsList';
import ProjectsItem from '../components/ProjectsItem';
import '../styles/Projects.css'

function Projects() {
  return (
    <div className="projects">
        <h1 className="projectsTitle">Projects Worked On</h1>
        <div className="projectsList">
            {ProjectsList.map((projectsItem, key) => {
                return <ProjectsItem 
                key={key}
                image={projectsItem.image} 
                name={projectsItem.name}
                link={projectsItem.link}
                />;
            })}
        </div>
    </div>
  )
}

export default Projects