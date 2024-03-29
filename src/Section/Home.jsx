import "../Styles/Home.css"
import { FaGithub, FaLinkedin, FaAngleDoubleDown, FaAngleUp } from "react-icons/fa"
import { useEffect, useState } from "react"
import Astronaut from "../assets/astronot.gif"
import { Atropos } from "atropos"

export default function Home() {
  const [visible, setVisible] = useState(false)

  const scrolled = document.documentElement.scrollTop

  // const myAtropos = Atropos({
  //   el: ".main--info",
  //   // rest of parameters
  // })

  useEffect(() => {
    if (scrolled > 300) {
      setVisible(true)
    } else if (scrolled <= 300) {
      setVisible(false)
    }
  }, [scrolled])

  return (
    <div className="main" id="home">
      <div className="main--container">
        <a href="#" className="fixed--email text-focus-in">
          wdiazdev@gmail.com
        </a>
        <div className="divider--right text-focus-in"></div>
        <div className="divider--left text-focus-in"></div>

        <div className="fixed--icons text-focus-in">
          <ul>
            <li>
              <a href="https://github.com/WDiazDev" target="_blank">
                <FaGithub />
              </a>
            </li>

            <li>
              <a href="https://www.linkedin.com/in/wdiazdev/" target="_blank">
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>

        <div className="main--info text-focus-in">
          <h3>Hi there, I'm</h3>
          <h1>Wilfredo Diaz</h1>
          <p>I am a Software Engineer based in Florida.</p>
          <p>
            I'm passionate about creating web applications with a great user experience and an eye-catching user
            interface.
          </p>
          <img src={Astronaut} alt="Astronaut" className="astronaut text-focus-in" />
        </div>
      </div>

      {!visible && (
        <div className="welcome--to text-focus-in" id="welcome--to">
          <FaAngleDoubleDown className="bounce" />
          <span>Welcome to my little corner of the internet</span>
          <FaAngleDoubleDown className="bounce" />
        </div>
      )}

      <div className="top--icon text-focus-in" style={{ display: visible ? "inline" : "none" }}>
        <ul>
          <li>
            <a href="#" className="bounce" id="top--icon">
              <FaAngleUp />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
