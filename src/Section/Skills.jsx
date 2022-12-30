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

                <div className='skills--container' data-aos="zoom-in" data-aos-duration='1000'>

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

                <div className='skills--titles' >

                    <span data-aos="zoom-in-right">Frontend</span>
                    <span data-aos="zoom-out">Backend</span>
                    <span data-aos="zoom-in-left">UI/UX</span>

                </div>

            </div>

        </div>
    )
}

