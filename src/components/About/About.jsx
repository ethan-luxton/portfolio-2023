import json from '../../content/content.json'
import React from "react";
import './about.scss';

let text = [json.header.keywordWheel[1],json.header.keywordWheel[2],json.header.keywordWheel[3],json.header.keywordWheel[4]]

const About = () => {
    return (
    <section className='aboutSection'>
        <div className='wrapper'>
            <p className='text'>I am a</p>
            <div className='words'>
                <span className='spin'>&nbsp;{text[0]}&nbsp;</span>
                <span className='spin'>&nbsp;{text[1]}&nbsp;</span>
                <span className='spin'>&nbsp;{text[2]}&nbsp;</span>
                <span className='spin'>&nbsp;{text[3]}&nbsp;</span>
                <span className='spin'>&nbsp;{text[0]}&nbsp;</span>
            </div>
            <p className='text'>Software Engineer</p>
        </div>
    </section>
        
    )
}

export default About