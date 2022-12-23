import React from 'react';
import './AboutMe.css'
import myImg from '../../resource/my photo.jpg'

const AboutMe = () => {

    // Function will execute on click of button
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('MERN Stack Developer Resume of Injamam Islam Chowdhury.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'MERN Stack Developer Resume of Injamam Islam Chowdhury.pdf';
                alink.click();
            })
        })
    }
    return (
        <div className='aboutMeMain' id='about'>
            <br />
            <h2 className='aboutMeMain-h2'>ABOUT ME</h2>
            <br />
            <p className='aboutMeMain-p'>My Introduction</p>
            <div className='aboutMeContainer'>

                <div data-aos="zoom-in" data-aos-duration="1000" className='aboutMeImage'>
                    <img src={myImg} alt="" />
                </div>

                <div className='aboutMeDetail'>
                    <div data-aos="fade-right" data-aos-duration="1000" >
                        <p>Hi! this is Injamam Islam Chowdhury. I am a MERN stack Developer. From Last year I have been coding with javascript, reactJs, redux, nodeJs, expressJs, mongoDB, Nextjs. I have done more projects with that technologies. I have also completed a full course with the technologies. I have got lots of experience doing those project. I am confident about my skills. So Now I am ready to deliver.    </p>
                        <br />
                        <p>
                            I am used to take any challenges for doing any type of project. I am quick learner with heard worker, have dedication for problem solving. I am comfortable and confident to make successfull any mission.
                        </p>
                        <br />
                        <p>
                            I am very dedicated, passionate dynamic, punctual and time-concern about building my carrer in this sector.
                        </p>
                    </div>
                    <br /><br />
                    <div data-aos="fade-up" data-aos-duration="1000" className='aboutMe-button'>
                        <button onClick={onButtonClick}>Download CV <i class="uil uil-file"></i> </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutMe;