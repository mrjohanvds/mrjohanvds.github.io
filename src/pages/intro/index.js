import React from 'react';
import './Intro.css'
import { Jumbotron } from 'react-bootstrap'

function IntroPage() {
    return (
        <React.Fragment>
            <h1 className="name">Johan VAN DER SLOOTEN</h1>
            <Jumbotron fluid className="introcontainer">
                <p className='title'> Hello and welcome ! </p>
                <div className='introtext'>
                    <p><span style={{"font-size": "300%"}}>M</span>y name is <b>Johan VAN DER SLOOTEN</b>. I am 22 year old and I'm an engineering student in <b>Computer Science, BigData and Smart Objects</b>, at <b>ESILV</b>. The science of computers, and more specifically the programming always interressed me. When I was little, I already wanted to have some programming courses. I entered an engineering school after a <b>technological bachelor</b> which I was passionnated about and which it gave me some opportunities. So, I began progamming with C# at ESILV and, here I am, conquered by this domain.</p>
                    <p>Currently, <b>I'm looking for an internship</b> for a <b>6 months period</b> from the 3rd of February. I consider myself like someone polyvalent with programming languages and autonomous because of my <b>semester in Australia.</b></p>
                    <p><b>I made</b> this website in complement of my resume to allow you have <b>more infos</b> about me, my experiences and my projects.</p>
                </div>
                <p className='title'> Have a pleasant visit ! </p>
            </Jumbotron>
        </React.Fragment>
    );
}


export default IntroPage;