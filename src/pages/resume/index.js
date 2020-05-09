import React from 'react';
import './resume.css';
import photo from '../../ressources/images/resume/IMG_9982.png';
import { Accordion } from 'react-bootstrap';
import resume from '../../ressources/resume.json';

function ResumePage() {
    return (
        <div className= "resumePage">
            <div className= "resumeContainer">
                <h1>Johan VAN DER SLOOTEN</h1>
                <img src={photo} alt='photo_pro' width="300"/>
                <div className='introtext'>
                    <p><span style={{"font-size": "300%"}}>M</span>y name is <b>Johan VAN DER SLOOTEN</b>. I am 22 year old and I'm an engineering student in <b>Computer Science, BigData and Smart Objects</b>, at <b>ESILV</b>. The science of computers, and more specifically the programming always interressed me. I entered an engineering school after a <b>technological bachelor</b> which I was passionnated about and which it gave me some opportunities. So, I began progamming with C# at ESILV and, here I am, conquered by this domain.</p>
                    <p>Currently, <b>I'm looking for a first job</b> from the 1st of September 2020. I consider myself like someone polyvalent with programming languages and autonomous because of my <b>semester in Australia.</b></p>
                    <p><b>I made</b> this website in complement of my resume to allow you to have <b>more infos</b> about me, my experiences and my projects.</p>
                </div>
                <Accordion defaultActiveKey="0">
                </Accordion>
            </div>
        </div>
    )
}


export default ResumePage;