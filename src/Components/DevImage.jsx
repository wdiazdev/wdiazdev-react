import '../Styles/DevImage.css';
import myImage from '../assets/myimage.jpg';

export default function DevImage() {
    return (
        <div className='circle'>
            <div className='box'>
                <img src={myImage} alt='Developer Image' />
                <a href='#contact'>let's get in touch!</a>
            </div>
        </div>
    )
}