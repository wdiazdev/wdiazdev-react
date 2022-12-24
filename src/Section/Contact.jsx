import { useRef, useState } from 'react';
import '../Styles/Contact.css';
import Header from '../Components/Header';
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

export default function Contact() {

    const [sent, setSent] = useState(false);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_s6vj00j', 'template_x9wlhdd', e.target, '5Ov3pj3qqAysxs7SO')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
        setSent(true);
    };

    setTimeout(() => {
        setSent(false)
    }, 5000)

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


                <div className='form--container'>

                    <form ref={form} onSubmit={sendEmail}>

                        <label>Name</label>
                        <input type='text' name='from_name' required />

                        <label>Email</label>
                        <input type='email' name='user_email' required />

                        <label>Subject</label>
                        <input type='text' name='subject' required />

                        <label>Message</label>
                        <textarea name='message' required />

                        <input type='submit' value='Send' />

                    </form>

                    {sent ?
                        <p className='msg--sent'>
                            The message has been sent!
                        </p> : null
                    }

                </div>

            </div>

        </div>
    )
}
