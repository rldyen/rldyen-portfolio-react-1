import React from 'react'

function EducationItems({name, image, description}) {
  return (
    <div className="educationItems">
        <div style={{backgroundImage: `url(${image})`}}></div>
        <p className="educationName">{name}</p>
        <div className="educationDescription">
            <p>{description}</p>
        </div>
        
    </div>
  )
}

export default EducationItems