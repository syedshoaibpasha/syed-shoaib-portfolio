import './App.css'

function App() {
  const projects = [
  {
    title: 'Mini E-Commerce Store',
    description:
      'A full-stack e-commerce application with product management, shopping flow, order management and an admin dashboard.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    live: 'https://mini-ecommerce-frontend-8606.onrender.com',
    github: 'https://github.com/syedshoaibpasha/mini-ecommerce-store',
    icon: '🛒',
  },
  {
    title: 'AI Resume Analyzer',
    description:
      'An AI-powered web application that analyzes resumes against job descriptions and identifies matching and missing skills.',
    tech: ['Python', 'Flask', 'AI', 'NLP', 'SQLite'],
    live: 'http://ai-resume-analyzer-tccq.onrender.com',
    github: 'https://github.com/syedshoaibpasha/AI-Resume-Analyzer',
    icon: '🤖',
  },
  {
    title: 'Job Tracker',
    description:
      'A job application tracking system to manage applications, interview status, companies, job roles and application details.',
    tech: ['Python', 'Flask', 'SQLite', 'HTML', 'CSS'],
    live: 'https://job-tracker-no6g.onrender.com',
    github: 'https://github.com/syedshoaibpasha/job-tracker',
    icon: '📋',
  },
]

  const skills = [
    'Python',
    'JavaScript',
    'React',
    'HTML5',
    'CSS3',
    'Node.js',
    'Express.js',
    'MongoDB',
    'MySQL',
    'Flask',
    'SQL',
    'Git & GitHub',
    'Power BI',
    'AWS',
    'Machine Learning',
    'Data Analysis',
  ]

  return (
    <div className="portfolio">
      {/* NAVBAR */}
      <header className="navbar">
        <a href="#home" className="logo">
          <span>SS</span>
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>

       <a
  href="/Syed_Shoaib_Pasha_Resume.pdf"
  download="Syed_Shoaib_Pasha_Resume.pdf"
  className="secondary-button"
  onClick={async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/Syed_Shoaib_Pasha_Resume.pdf");

      if (!response.ok) {
        throw new Error("Resume file not found");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "Syed_Shoaib_Pasha_Resume.pdf";

      document.body.appendChild(link);
      link.click();
      link.remove();

      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Resume download failed:", error);
      window.location.href = "/Syed_Shoaib_Pasha_Resume.pdf";
    }
  }}
>
  Download Resume ↓
</a>
      </header>

      {/* HERO */}
      <main>
        <section id="home" className="hero-section">
          <div className="hero-content">
            <p className="eyebrow">WELCOME TO MY PORTFOLIO</p>
<h1>
  <span className="hero-greeting">Hi, I'm</span>
  <span className="hero-name">Syed Shoaib Pasha</span>
</h1>
           

            <h2>
              Full Stack Developer <span>·</span> AI/ML Enthusiast
            </h2>

            <p className="hero-description">
              I build modern web applications and intelligent solutions
              using full-stack development, data and AI technologies.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-button">
                View My Work →
              </a>

              <a href="#contact" className="secondary-button">
                Contact Me
              </a>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/syedshoaibpasha"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/syed-shoaib-pasha-a77301427"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="glow"></div>

            <div className="code-card">
              <div className="code-header">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="code-content">
                <p>
                  <span className="purple">const</span>{' '}
                  <span className="blue">developer</span> = {'{'}
                </p>

                <p className="indent">
                  name: <span className="green">'Shoaib'</span>,
                </p>

                <p className="indent">
                  role: <span className="green">'Full Stack Developer'</span>,
                </p>

                <p className="indent">
                  passion: <span className="green">'AI & Technology'</span>
                </p>

                <p>{'}'}</p>
              </div>
            </div>

            <div className="floating-card card-one">
              <strong>3+</strong>
              <span>Projects</span>
            </div>

            <div className="floating-card card-two">
              <strong>AI</strong>
              <span>Focused</span>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section about-section">
          <div className="section-heading">
            <p>ABOUT ME</p>
            <h2>Building with curiosity & purpose.</h2>
          </div>

          <div className="about-grid">
            <div className="about-text">
              <p>
                I'm a BCA student specializing in Artificial Intelligence and
                Machine Learning, with a strong interest in full-stack
                development and modern technology.
              </p>

              <p>
                I enjoy turning ideas into practical applications — from
                e-commerce platforms and job tracking systems to AI-powered
                resume analysis tools.
              </p>

              <p>
                I'm continuously learning, building projects and improving my
                technical skills to start my career as a technology
                professional.
              </p>
            </div>

            <div className="about-stats">
              <div className="stat-card">
                <strong>2027</strong>
                <span>Expected Graduation</span>
              </div>

              <div className="stat-card">
                <strong>BCA</strong>
                <span>AI / ML Specialization</span>
              </div>

              <div className="stat-card">
                <strong>Full Stack</strong>
                <span>Development Focus</span>
              </div>

              <div className="stat-card">
                <strong>AI + Data</strong>
                <span>Areas of Interest</span>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section skills-section">
          <div className="section-heading center">
            <p>MY TOOLKIT</p>
            <h2>Skills & Technologies</h2>
            <span>
              Technologies I use to build, analyze and solve problems.
            </span>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-card" key={skill}>
                <span className="skill-dot"></span>
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
<section id="projects" className="section projects-section">
  <div className="section-heading">
    <p>MY WORK</p>
    <h2>Featured Projects</h2>
  </div>

  <div className="projects-grid">
    {projects.map((project) => (
      <article className="project-card" key={project.title}>
        <div className="project-top">
          <div className="project-icon">{project.icon}</div>

          <div className="project-number">
            {project.title === 'Mini E-Commerce Store' && '01'}
            {project.title === 'AI Resume Analyzer' && '02'}
            {project.title === 'Job Tracker' && '03'}
          </div>
        </div>

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="tech-list">
          {project.tech.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <div className="project-buttons">
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="project-button"
          >
            Live Demo ↗
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="project-button"
          >
            GitHub ↗
          </a>
        </div>
      </article>
    ))}
  </div>
</section>

        {/* EXPERIENCE */}
        <section id="experience" className="section experience-section">
          <div className="section-heading center">
            <p>EXPERIENCE</p>
            <h2>Professional Journey</h2>
          </div>

          <div className="experience-card">
            <div className="experience-date">AUG 2026 — SEP 2026</div>

            <div className="experience-content">
              <h3>Full Stack Development Intern</h3>
              <h4>Eduphoenix Solutions Pvt. Ltd.</h4>

              <p>
                Worked on practical web development tasks and gained
                hands-on exposure to building and improving full-stack
                applications.
              </p>

              <div className="tech-list">
                <span>Web Development</span>
                <span>Frontend</span>
                <span>Backend</span>
                <span>Full Stack</span>
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section className="section education-section">
          <div className="section-heading">
            <p>EDUCATION</p>
            <h2>Academic Background</h2>
          </div>

          <div className="education-card">
            <div className="education-icon">🎓</div>

            <div>
              <h3>Bachelor of Computer Applications</h3>
              <h4>Artificial Intelligence & Machine Learning</h4>
              <p>HKBK Degree College</p>
              <span>Expected Graduation: 2027</span>
            </div>
          </div>
        </section>

       {/* CONTACT */}
<section id="contact" className="section contact-section">
  <div className="contact-card">
    <p className="eyebrow">GET IN TOUCH</p>

    <h2>
      Let's build something
      <span> meaningful.</span>
    </h2>

    <p>
      I'm open to internship opportunities, entry-level roles,
      collaborations and interesting technology projects.
    </p>

    <div className="contact-info">
     <a
  href="mailto:ssyedshoaibpasha@gmail.com"
  className="contact-item"
>
  <span className="contact-icon">📧</span>

  <div>
    <strong>Email</strong>
    <span>ssyedshoaibpasha@gmail.com</span>
  </div>
</a>

      <a
        href="https://www.linkedin.com/in/syed-shoaib-pasha-a77301427"
        target="_blank"
        rel="noreferrer"
        className="contact-item"
      >
        <span className="contact-icon">💼</span>
        <div>
          <strong>LinkedIn</strong>
          <span>View LinkedIn Profile ↗</span>
        </div>
      </a>
    </div>

    <div className="contact-buttons">
      <a
        href="https://github.com/syedshoaibpasha"
        target="_blank"
        rel="noreferrer"
        className="primary-button"
      >
        GitHub ↗️
      </a>

      <a
        href="https://www.linkedin.com/in/syed-shoaib-pasha-a77301427"
        target="_blank"
        rel="noreferrer"
        className="secondary-button"
      >
        LinkedIn ↗️
      </a>
    </div>
  </div>
</section>
      </main>

      {/* FOOTER */}
      <footer>
        <div>
          <strong>Syed Shoaib Pasha</strong>
          <span> · </span>
          Built with React & passion.
        </div>

        <p>©️ 2026 Syed Shoaib Pasha. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App