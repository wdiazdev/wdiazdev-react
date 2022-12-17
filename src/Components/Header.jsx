import '../Styles/Header.css';

export default function Header(props) {
    return (
        <div className='header'>
            <h2>{props.header}</h2>
            <p>{props.subHeader}</p>
        </div>
    )
}
