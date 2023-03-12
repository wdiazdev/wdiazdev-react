import DevImage from '../Components/DevImage';
import Header from '../Components/Header';
import '../Styles/About.css';

export default function About() {
    return (
        <>
            <div className='about' id='about'>

                <Header
                    header={'About Me'}
                    subHeader={''}
                />

                <div className='about--container'>

                    <div className='info'>

                        <p data-aos="fade-up" data-aos-duration='1000'>
                            Hello, my name is <span>Wilfredo Diaz</span> and I am a software engineer
                            with a strong passion for creating elegant
                            and intuitive <span>user interfaces</span> that deliver seamless
                            experiences for users. I am driven by my love for <span>design </span>
                            and technology, which has led me to pursue a career in
                            web development where I can use my skills to bring
                            creative ideas to life.
                        </p>

                        <p data-aos="fade-up" data-aos-duration='1000'>
                            My approach to development is highly collaborative,
                            and I firmly believe that effective <span>communication</span> and
                            <span> teamwork</span> are essential for delivering successful projects.
                            I am committed to gaining a deep understanding of each
                            project's unique requirements, working closely with
                            <span> clients</span> and <span>stakeholders</span> to ensure that their vision
                            is fully realized.
                        </p>

                        <p data-aos="fade-up" data-aos-duration='1000'>
                            I am also an avid attendee of tech <span>meetups</span> and
                            conferences, constantly seeking to expand my knowledge
                            and stay up-to-date on the latest trends and best
                            practices in the industry. Whether I'm learning
                            about new <span>technologies</span> or networking with other
                            developers, I am always eager to discover new ways
                            to improve my craft.
                        </p>

                        <p data-aos="fade-up" data-aos-duration='1000'>
                            Thank you for taking the time to learn a little bit about
                            me, and I look forward to the <span>opportunity</span> to collaborate
                            with you on your next project.
                        </p>

                    </div>

                    <div>
                        <DevImage />
                    </div>

                </div>

            </div>
        </>
    )
}
