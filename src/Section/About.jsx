import Header from '../Components/Header';
import '../Styles/About.css';
import myImage from '../assets/myimage.jpg';

export default function About() {
    return (
        <div className='about' id='about'>
            <Header
                header={'About Me'}
                subHeader={''}
            />
            <div className='about--container'>

                <div className='info'>

                    <p>
                        Hi, my name is <span>Wilfredo Diaz</span>. My interest in web
                        development started back in 2020 when I discovered my passion
                        for technology, from software engineering to UI/UX. I decided to
                        learn Python as my first programming language and managed to
                        continue to learn other languages, frameworks, and libraries.
                    </p>

                    <p>
                        My goal is to stay on the cutting edge of technological advancements.
                        I have enhanced my <span>technical abilities</span> and cultivated a
                        reputation as a major contributor through <span>problem-solving</span>
                        and <span>teamwork</span>.
                    </p>

                    <p>
                        My focus these days is building responsive websites that are easy
                        to use and built with the best practices. My main area of expertise
                        is front-end development. I spend my free time on travel
                        adventures, health and fitness, and learning about new technologies.
                    </p>
                </div>

                <img src={myImage} alt="Developer image" className='developer--img' />

            </div>


        </div>
    )
}
