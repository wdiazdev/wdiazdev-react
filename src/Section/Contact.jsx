import '../Styles/Contact.css';
import Header from '../Components/Header';
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from "react-icons/si";

export default function Contact() {
    return (
        <div className='contact' id='contact'>

            <Header
                header={'Get in Touch'}
                subHeader={'I am available to work on your projects and bring your ideas to life.'}
            />

            <div className='contact--container'>

                <div className='contact--info'>

                    <div className='contact--icon'>

                        <FaMapMarkerAlt />
                        <span>Tampa, Florida</span>

                    </div>

                    <div className='contact--icon'>

                        <FaEnvelope />
                        <span>wdiazdev@gmail.com</span>

                    </div>

                    <div className='contact--icon'>

                        <FaPhone />
                        <span>407-437-8084</span>

                    </div>

                </div>

            </div>

        </div>
    )
}
