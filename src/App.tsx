import "./App.css";
import profilePhoto from "./assets/pfp.png";
import resumeUrl from "./assets/Resume May 2026.pdf";
import { useState } from "react";

type IconProps = {
  className?: string;
};

type Project = {
  label: string;
  title: string;
  meta: string;
  points: string[];
  tags: string[];
  href?: string;
};

const email = "debroy2021@gmail.com";

const GitHubIcon = ({ className = "" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.2c-5.5 0-9.9 4.4-9.9 9.9 0 4.4 2.9 8.1 6.8 9.4.5.1.7-.2.7-.5v-1.9c-2.8.6-3.4-1.2-3.4-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 0 1.6 1.1 1.6 1.1.9 1.5 2.4 1.1 2.9.8.1-.7.4-1.1.7-1.4-2.2-.2-4.5-1.1-4.5-4.9 0-1.1.4-2 1.1-2.7-.1-.3-.5-1.3.1-2.7 0 0 .9-.3 2.8 1 .8-.2 1.7-.3 2.6-.3s1.8.1 2.6.3c1.9-1.3 2.8-1 2.8-1 .6 1.4.2 2.4.1 2.7.7.8 1.1 1.6 1.1 2.7 0 3.8-2.3 4.6-4.5 4.9.4.3.7.9.7 1.8V21c0 .3.2.6.7.5 4-1.3 6.8-5 6.8-9.4.1-5.5-4.4-9.9-9.8-9.9Z" />
  </svg>
);

const LinkedInIcon = ({ className = "" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5.5 8.7H2.6v12h2.9v-12ZM4 3.2C3 3.2 2.3 4 2.3 4.9S3 6.6 4 6.6s1.7-.7 1.7-1.7S5 3.2 4 3.2Zm16.9 10.6c0-3.2-1.7-5.3-4.5-5.3-1.7 0-2.7.9-3.1 1.7V8.7h-2.9v12h2.9v-6.4c0-1.7.9-2.8 2.4-2.8s2.3 1 2.3 2.8v6.4h2.9v-6.9Z" />
  </svg>
);

const MailIcon = ({ className = "" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M3.6 5.2h16.8v13.6H3.6V5.2Zm8.4 7.6 6.2-5.6H5.8l6.2 5.6Zm-1.1 1.4-5.5-5v7.6h13.2V9.2l-5.5 5a1.7 1.7 0 0 1-2.2 0Z" />
  </svg>
);

const CopyIcon = ({ className = "" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M8 3.6h10.4V14H16V6H8V3.6Zm-2.4 4h10.8v12.8H5.6V7.6Zm2.4 2.4v8h6v-8H8Z" />
  </svg>
);

const FileIcon = ({ className = "" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M6.8 2.8h7.4L19.8 8v13.2H6.8V2.8Zm7 1.9v4h4.3l-4.3-4Zm-4.7 8.1h7.8v-1.6H9.1v1.6Zm0 3.3h7.8v-1.6H9.1v1.6Zm0 3.3h5.1v-1.6H9.1v1.6Z" />
  </svg>
);

const ArrowIcon = ({ className = "" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M13.2 5.6 19.6 12l-6.4 6.4-1.4-1.4 4-4H4.4v-2h11.4l-4-4 1.4-1.4Z" />
  </svg>
);

const projects: Project[] = [
  {
    label: "vehicle electronics",
    title: "Eco Illini Supermileage power system",
    meta: "Electrical team member, Aug. 2025 - present",
    points: [
      "Engineered a 97%-efficient buck converter stepping 32-42V down to 12V at 5A for the vehicle's Power Distribution Unit.",
      "Implemented isolated power architecture, kill-switch safety, and real-time energy monitoring with INA228, STM32G0B1, and CAN FD.",
      "Contributed to a 2026 Shell Eco Marathon run measuring 186.47 km/kWh.",
    ],
    tags: ["power electronics", "STM32", "CAN FD", "EV systems"],
    href: "https://github.com/debroy2021/eco_illini_PDU",
  },
  {
    label: "nanofabrication",
    title: "Illinois MicroTech lithography stepper",
    meta: "Optics and electronics team member, Oct. 2025 - present",
    points: [
      "Worked on the CMU-based Hackerfab effort to make nanofabrication more accessible to students.",
      "Investigated UV lithography imaging artifacts and tested optical resolution down to 0.2 um/pixel.",
      "Helped troubleshoot operational challenges in the lithography stepper.",
    ],
    tags: ["optics", "electronics", "lithography", "Hackerfab"],
  },
  {
    label: "machine learning research",
    title: "CNNs for Alzheimer's disease classification",
    meta: "Science Reach researcher, Aug. 2023 - May 2025",
    points: [
      "Authored a comparative analysis of convolutional neural networks for Alzheimer's disease classification.",
      "Reached 95% accuracy with a VGG16 model using the Convolutional Block Attention Mechanism.",
      "Earned the Jay and Jeremy Hoffman Memorial Award and Gold Honors at the Illinois Junior Academy of Sciences State Science Fair.",
    ],
    tags: ["TensorFlow", "VGG16", "CBAM", "medical imaging"],
    href: "https://github.com/debroy2021/Alzheimers-Classification",
  },
  {
    label: "software internship",
    title: "Parabole.ai website and API migration",
    meta: "Intern, May 2024 - Aug. 2024",
    points: [
      "Led four interns migrating the company website from Flask to React.",
      "Integrated the TRAIN platform API to generate causal inference graphs for 100+ users.",
      "Collaborated with project leads to deliver production-ready features in two months.",
    ],
    tags: ["React", "API integration", "causal inference", "frontend"],
  },
  {
    label: "design lab",
    title: "ECE 145 automatic lighting system",
    meta: "First-Year Design Laboratory honors project, Aug. 2025 - Dec. 2025",
    points: [
      "Built a remote-controlled, multicolor automatic lighting system that responds to ambient light using analog circuitry.",
      "Maintained a project journal and proposal to document the complete design process.",
    ],
    tags: ["analog circuits", "prototyping", "controls", "documentation"],
  },
];

const skillGroups = [
  "C",
  "React",
  "Java",
  "Python",
  "TensorFlow",
  "Scikit-learn",
  "Pandas",
  "NumPy",
  "Unix/Linux shell",
  "KiCad",
  "Raspberry Pi",
  "STM32CubeIDE",
  "Git",
];

const softSkills = [
  "Team leadership",
  "Research communication",
  "Technical documentation",
  "Tutoring and mentorship",
  "Cross-functional collaboration",
  "Problem decomposition",
];

const App = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    window.setTimeout(() => setCopiedEmail(false), 1600);
  };

  return (
    <main className="site-shell">
      <header className="hero" aria-labelledby="intro-heading">
        <nav className="topbar" aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href={`mailto:${email}`}>Email</a>
        </nav>

        <div className="hero-grid">
          <section className="hero-copy">
            <p className="eyebrow">Electrical Engineering @ UIUC</p>
            <h1 id="intro-heading">Debarghya Roy</h1>
            <p className="intro">
              Sophomore student who enjoys turning technical ideas into working
              systems.
            </p>
            <div className="hero-actions" aria-label="Contact links">
              <div className="email-action">
                <a className="primary-link" href={`mailto:${email}`}>
                  <MailIcon className="button-icon" />
                  {email}
                </a>
                <button
                  className="copy-email"
                  type="button"
                  onClick={copyEmail}
                  aria-label="Copy email address"
                  title="Copy email"
                >
                  <CopyIcon className="button-icon" />
                </button>
                <span className="copy-status" aria-live="polite">
                  {copiedEmail ? "Copied" : ""}
                </span>
              </div>
              <a
                className="secondary-link"
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
              >
                <FileIcon className="button-icon" />
                Resume
              </a>
            </div>
          </section>

          <aside className="blueprint-card" aria-label="Profile snapshot">
            <div className="profile-photo-frame">
              <img src={profilePhoto} alt="Debarghya Roy" />
            </div>
            <dl>
              <div>
                <dt>School</dt>
                <dd>University of Illinois Urbana-Champaign</dd>
              </div>
              <div>
                <dt>Track</dt>
                <dd>
                  Electrical Engineering, exploring Dual Major in CompE + Math
                </dd>
              </div>
              <div>
                <dt>Focus</dt>
                <dd>Power, optics, embedded systems, and ML research</dd>
              </div>
            </dl>
          </aside>
        </div>
      </header>

      <section
        className="about-band"
        id="about"
        aria-labelledby="about-heading"
      >
        <div className="about-copy">
          <p className="eyebrow">About</p>
          <h2 id="about-heading">
            I like technical problems with a practical edge.
          </h2>
          <p>
            I am a college sophomore at UIUC studying Electrical Engineering and
            exploring a dual degree in Computer Engineering and Mathematics,
            with a focus on optimization. I am especially interested in how
            electrical engineering, computer science, physics, and mathematics
            connect to solve practical problems in technology, sustainability,
            and engineering.
          </p>
          <p>
            Right now, I am looking for hands-on projects and research
            opportunities where I can build practical skills, learn from people
            doing meaningful work, and contribute to ideas that can make a real
            difference.
          </p>
        </div>
      </section>

      <section
        className="work-section"
        id="work"
        aria-labelledby="work-heading"
      >
        <div className="section-kicker">
          <p className="eyebrow">Selected work</p>
          <h2 id="work-heading">Projects from my resume</h2>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className="project-row" key={project.title}>
              <div className="project-index">
                <span>{project.label}</span>
              </div>
              <div className="project-body">
                <div className="project-heading">
                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.meta}</p>
                  </div>
                  {project.href && (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} on GitHub`}
                    >
                      <GitHubIcon className="inline-icon" />
                    </a>
                  )}
                </div>
                <ul>
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div
                  className="tag-list"
                  aria-label={`${project.title} skills`}
                >
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="skills-band" aria-labelledby="skills-heading">
        <div>
          <p className="eyebrow">Toolkit</p>
          <h2 id="skills-heading">Languages, and skills</h2>
        </div>
        <div className="skill-cloud">
          {skillGroups.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
        <div className="soft-skills" aria-label="Soft skills">
          <p>Also comfortable with</p>
          <div>
            {softSkills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div>
          <strong>Debarghya Roy</strong>
          <span>Buffalo Grove, IL | U.S. Citizen</span>
        </div>
        <div className="footer-links">
          <a href={`mailto:${email}`} aria-label="Email Debarghya Roy">
            <MailIcon className="footer-icon" />
          </a>
          <a
            href="https://github.com/debroy2021"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <GitHubIcon className="footer-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/debroy2024/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="footer-icon" />
          </a>
          <a href={resumeUrl} target="_blank" rel="noreferrer">
            Resume
            <ArrowIcon className="footer-icon" />
          </a>
        </div>
      </footer>
    </main>
  );
};

export default App;
