import "../Styles/Home.css"
import { FaGithub, FaLinkedin, FaAngleDoubleDown, FaAngleUp } from "react-icons/fa"
import { useEffect, useState } from "react"
import Astronaut from "../assets/astronot.gif"

export default function Home() {
  const [visible, setVisible] = useState(false)

  const scrolled = document.documentElement.scrollTop

  useEffect(() => {
    if (scrolled > 300) {
      setVisible(true)
    } else if (scrolled <= 300) {
      setVisible(false)
    }
  }, [scrolled])

  return (
    <main className="main" id="home">
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
          <h3>Hi there, I am</h3>
          <h1>Wilfredo Diaz</h1>
          <p>
            A Software Engineer focused on crafting web applications that offer seamless user
            experiences and visually appealing interfaces.
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
    </main>
  )
}
