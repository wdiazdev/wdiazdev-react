import '../Styles/DevImage.css';
import myImage from '../assets/myimage.jpg';

export default function DevImage() {
    return (
        <div className='circle' data-aos="fade-down-left" data-aos-duration='1000'>
            <div className='box'>
                <img src={myImage} alt='Developer Image' />
                <a href='#contact'>let's get in touch!</a>
            </div>
        </div>
    )
}