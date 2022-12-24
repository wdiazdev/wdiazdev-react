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
    }, 6000)

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

                <form ref={form} onSubmit={sendEmail} className='form'>

                    <div className='input--container'>
                        <input type='text' name='from_name' required='required' />
                        <span>Name</span>
                    </div>

                    <div className='input--container'>
                        <input type='email' name='user_email' required='required' />
                        <span>Email</span>
                    </div>

                    <div className='input--container'>
                        <input type='text' name='subject' required='required' />
                        <span>Subject</span>
                    </div>

                    <div className='input--container'>
                        <textarea name='message' required='required' />
                    </div>

                    <input type='submit' value='Send' />

                    {sent ?
                        <p className='msg--sent tracking-in-expand-fwd-top'>
                            Your message has been sent!
                        </p> : null
                    }

                </form>

            </div>

        </div>
    )
}
