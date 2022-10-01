import React from 'react';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

function ProjectsItem({image, name, link}) {
  return (
    <div className="projectsItem">
        <div style={{backgroundImage: `url(${image})`}}></div>
        <h2>{name}</h2>
        <div className="projectsLink">
          <a href={link} target="_blank">
            <OpenInNewIcon/>
          </a>
        </div>
        
    </div>
  )
}

export default ProjectsItem;