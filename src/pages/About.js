import React from 'react'
import ProfilePicture from "../assets/profilePicture.JPG";
import { EducationList } from '../helpers/EducationList';
import EducationItems from '../components/EducationItems';
import '../styles/About.css';

function About() {
  return (
    <div className="about">
        <div 
            className ="aboutLeft"
            style={{backgroundImage: `url(${ProfilePicture})`}}
        ></div>
        <div className ="aboutRight">
            <div className="aboutHello">
                Hello! I am
            </div>
            <h1 className="aboutName">Roald Yen Soriano</h1>
            <div className="aboutDescription">
                <p>I am a person who is enthusiastic about technology, most especially when it comes to the concept of creating something by means of using modern technologies.</p>
                <p>I am very interested in doing UI/UX designs and I am in the process of continuously improving my skills to become a UI/UX Designer. I also enjoy doing Front-End Development in Web Development and my passion is focused on designing and creating appealing interfaces.</p>
                <p>I am currently taking up my Bachelor's Degree at University of Santo Tomas with the program BS in Information Technology, Major in Web and Mobile App Development.</p>
            </div>
            <div className="aboutEducation">
                Education
            </div>
            <div className="aboutEducationList">
            {EducationList.map((educationItem, key) => {
                return <EducationItems
                key={key}
                image={educationItem.image} 
                name={educationItem.name}
                description={educationItem.description}
                />;
            })}
        </div>
        </div>
    </div>
  )
}

export default About