import Header from '../Components/Header';
import '../Styles/Work.css';
import WorkData from '../Data/WorkData';
import { FaGithub } from 'react-icons/fa';

export default function Work() {
    return (
        <div className='work' id='work'>

            <Header header={'My Work'}
                subHeader={"Some things I've built."} />

            <div className='card--container'>

                {
                    WorkData.map((item, index) => {
                        return (
                            <div key={index} className='card'>

                                <img src={item.img} alt='Card' />

                                <div className='card--info'>

                                    <h3>{item.name}</h3>

                                    <p>{item.description}</p>

                                    <div>
                                        <a
                                            href={item.projectUrl}
                                            target='_blank'
                                            className='card--icon'
                                        >
                                            <FaGithub />
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