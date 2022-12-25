import '../Styles/Skills.css';
import Header from "../Components/Header";
import IconData from '../Data/IconData';

export default function Skills() {
    return (
        <div className='skills' id='skills'>

            <Header
                header={'Toolbox'}
                subHeader={'Tools and technologies I use to bring your products to life.'}
            />

            <div>

                <div className="skills--container">

                    {
                        IconData.map((item, index) => {
                            return (
                                <div key={index} className='icon'>
                                    <i>{item.icon}</i>
                                    <span>{item.name}</span>
                                </div>
                            )
                        })
                    }

                </div>

                <div className='skills--titles'>

                    <span>Frontend</span>
                    <span>Backend</span>
                    <span>UI/UX</span>

                </div>

            </div>

        </div>
    )
}

