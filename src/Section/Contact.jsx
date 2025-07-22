import "../Styles/Contact.css"
import Header from "../Components/Header"
import { FaEnvelope } from "react-icons/fa"
import emailjs from "@emailjs/browser"
import { toast } from "sonner"
import { useRef, useState } from "react"
import AppLoader from "../Components/AppLoader"
import AppInputField from "../Components/AppInputField"

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false)
  const form = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then((result) => {
        if (result.text === "OK") {
          toast.success("Message sent successfully!")
          e.target.reset()
        }
      })
      .catch((error) => {
        console.error(error.text)
        toast.error("Unable to send message, please try again!")
      })
      .finally(() => {
        setIsLoading(false)
      })

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
            <FaEnvelope />
            <span>wdiazdev@gmail.com</span>
          </div>
        </div>

        <form
          ref={form}
          onSubmit={handleSubmit}
          className="form"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <AppInputField className="input--container" name="from_name" required label="Name" />
          <AppInputField
            className="input--container"
            name="user_email"
            type="email"
            required
            label="Email"
          />
          <AppInputField className="input--container" name="subject" required label="Subject" />

          <div className="input--container">
            <textarea name="message" required="required" placeholder="" />
          </div>
          <button type="submit" id="contact--btn">
            {isLoading ? <AppLoader /> : "SEND"}
          </button>
        </form>
      </div>
    </div>
  )
}
