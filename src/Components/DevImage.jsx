import '../Styles/DevImage.css';
import myImage from '../assets/myimage.jpg';
import { FaLinkedin } from 'react-icons/fa';


export default function DevImage() {
    return (
        <div className='circle'>
            <div className='box'>
                <img src={myImage} alt="Developer Image" />
                <h2>Wilfredo Diaz</h2>
                <a href='#contact'>Contact me</a>
            </div>
        </div>
    )
}