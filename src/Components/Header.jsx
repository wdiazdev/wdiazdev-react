import '../Styles/Header.css';

export default function Header(props) {
    return (
        <div className='header' data-aos="zoom-out-right" data-aos-duration='1000'>
            <h2>{props.header}</h2>
            <p>{props.subHeader}</p>
        </div>
    )
}
