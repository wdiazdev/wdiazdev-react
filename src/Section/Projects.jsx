import Header from '../Components/Header';
import '../Styles/Projects.css';
import WorkData from '../Data/WorkData';
import { FaGithubAlt, FaCode } from 'react-icons/fa';

export default function Work() {
    return (
        <div className='work' id='projects'>

            <Header header={'My Work'}
                subHeader={"Some things I've built."} />

            <div className='card--container' data-aos="fade-up" data-aos-duration='1000'>

                {
                    WorkData.map((item) => {
                        return (
                            <div key={item.id} className='card'>

                                <img src={item.img} alt='Card' />

                                <div className='card--info'>


                                    <h3>{item.name}</h3>

                                    <span>{item.tech}</span>

                                    <p>{item.description}</p>

                                    <div className='work--icons'>
                                        <a
                                            href={item.projectUrl}
                                            target='_blank'
                                            className='card--icon'
                                        >
                                            <FaCode />
                                        </a>
                                        <a
                                            href={item.ghPagesUrl}
                                            target='_blank'
                                            className='card--icon'
                                        >
                                            <FaGithubAlt />
                                        </a>
                                    </div>

                                </div>

                            </div>
                        )
                    })
                }

            </div >
        </div >
    )
}