import Header from '../Components/Header';
import '../Styles/About.css';

export default function About() {
    return (
        <div className='about'>
            <Header
                header={'About Me'}
                subHeader={'I am a test'}
            />
            <h1>Content</h1>
        </div>
    )
}
