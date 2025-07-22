import DevImage from "../Components/DevImage"
import Header from "../Components/Header"
import "../Styles/About.css"

export default function About() {
  return (
    <>
      <div className="about" id="about">
        <Header header={"About Me"} subHeader={""} />
        <div className="about--container">
          <div className="info">
            <p data-aos="fade-up" data-aos-duration="1000">
              Hello, my name is <span>Wilfredo Diaz</span>. I'm a results-driven{" "}
              <span>Full Stack Software Engineer</span> passionate about creating elegant, intuitive{" "}
              <span>user interfaces</span> and seamless digital experiences. My background in both{" "}
              <span>design</span> and technology fuels my commitment to building modern, scalable
              solutions.
            </p>

            <p data-aos="fade-up" data-aos-duration="1000">
              Leveraging technologies like <span>TypeScript</span>, <span>React.js</span>,{" "}
              <span>React Native</span>, <span>Node/Express</span>, <span>ASP .Net Core</span>,{" "}
              <span>SQL</span>, and <span>RESTful APIs</span> integration, I specialize in
              delivering high-quality, maintainable applications. I also explore{" "}
              <span>AI technologies</span> to enhance productivity and development workflows.
            </p>

            <p data-aos="fade-up" data-aos-duration="1000">
              My approach is highly collaborative. I believe effective <span>communication</span>{" "}
              and <span>teamwork</span> are essential for project success. I'm experienced working
              in <span>Agile environments</span>, partnering closely with <span>clients</span> and{" "}
              <span>stakeholders</span> to align technical solutions with their vision and goals.
            </p>

            <p data-aos="fade-up" data-aos-duration="1000">
              Thank you for taking the time to learn about me, I look forward to the{" "}
              <span>opportunity</span> to collaborate on your next project.
            </p>
          </div>

          <div>
            <DevImage />
          </div>
        </div>
      </div>
    </>
  )
}
