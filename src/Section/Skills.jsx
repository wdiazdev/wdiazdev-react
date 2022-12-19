import '../Styles/Skills.css';
import Header from "../Components/Header";
import IconData from '../Data/IconData';
import * as FaIcons from 'react-icons/fa';

export default function Skills() {
    return (
        <div className='skills' id='skills'>

            <Header
                header={'Toolbox'}
                subHeader={'Tools and technologies I use to bring your products to life.'}
            />

            <div className="icons--container">
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

        </div>
    )
}
