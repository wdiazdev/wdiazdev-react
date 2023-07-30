import "../Styles/Contact.css"
import Header from "../Components/Header"
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa"
import emailjs from "@emailjs/browser"
import { toast } from "sonner"
import { useRef, useState } from "react"

const SmallLoader = () => {
  return <div className="small--Loader"></div>
}

export default function Contact() {
  const [sending, setSending] = useState(null)
  const form = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()

    setSending(true)
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE,
        import.meta.env.VITE_EMAILJS_TEMPLATE,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            setSending(false)
            toast.success("Message sent successfully!")
          }
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
          toast.success("Unable to send message, please try again!")
        },
      )
    e.target.reset()
  }

  return (
    <div className="contact" id="contact">
      <Header
        header={"Get in Touch"}
        subHeader={"I am available to work on your projects and bring your ideas to life."}
      />

      <div className="contact--container">
        <div className="contact--info" data-aos="fade-right" data-aos-duration="1000">
          <div className="contact--icon">
            <FaMapMarkerAlt />
            <span>Tampa, Florida</span>
          </div>

          <div className="contact--icon">
            <FaEnvelope />
            <span>wdiazdev@gmail.com</span>
          </div>

          <div className="contact--icon">
            <FaPhone />
            <span>407-437-8084</span>
          </div>
        </div>

        <form ref={form} onSubmit={handleSubmit} className="form" data-aos="fade-up" data-aos-duration="1000">
          <div className="input--container">
            <input type="text" name="from_name" required="required" />
            <span>Name</span>
          </div>

          <div className="input--container">
            <input type="email" name="user_email" required="required" />
            <span>Email</span>
          </div>

          <div className="input--container">
            <input type="text" name="subject" required="required" />
            <span>Subject</span>
          </div>

          <div className="input--container">
            <textarea name="message" required="required" placeholder="" />
          </div>
          <button type="submit" id="contact--btn">
            {sending ? <SmallLoader /> : "SEND"}
          </button>
        </form>
      </div>
    </div>
  )
}
