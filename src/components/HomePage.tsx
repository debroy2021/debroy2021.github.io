import { Link } from "react-router-dom";
import profilePhoto from "../assets/pfp.jpeg";
import resumeUrl from "../assets/Resume Sep 26.pdf";
import { useState } from "react";
import { type CourseNoteGroup } from "../courseNotesData";
import {
  ArrowIcon,
  CopyIcon,
  FileIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from "./icons";

type Project = {
  label: string;
  title: string;
  meta: string;
  points: string[];
  tags: string[];
  href?: string;
  routeHref?: string;
};

const email = "debroy2021@gmail.com";

const projects: Project[] = [
  {
    label: "vehicle systems",
    title: "Eco Illini Supermileage telemetry and driver display",
    meta: "Driver Display, Telemetry & Testing/Characterization Lead | Aug. 2025 – Present",
    points: [
      "Developed a custom ESP32-based telemetry and driver display system with CAN, Wi-Fi, data logging, and sensors.",
      "Used MATLAB Simulink to model vehicle performance and support efficiency optimization and race strategy development.",
      "Participated in the 2026 Shell Eco Marathon Competition and achieved an efficiency of 186.5 km/kWh.",
      "Engineered a 97%-efficient buck converter (32–42V to 12V @ 5A) as part of an electric vehicle’s Power Distribution Unit.",
    ],
    tags: ["ESP32", "CAN", "MATLAB", "power systems"],
    href: "https://github.com/debroy2021/eco_illini_PDU",
    routeHref: "/eco",
  },
  {
    label: "education",
    title: "ECE 145: First-Year Design Laboratory",
    meta: "Classroom Assistant | Aug. 2026 – Present",
    points: [
      "Mentoring freshmen through semester-long honors projects, providing guidance on design, prototyping, and debugging.",
      "Supporting students with hands-on troubleshooting using oscilloscopes, multimeters, and other electronics lab equipment.",
    ],
    tags: ["mentorship", "debugging", "prototyping", "lab support"],
  },
  {
    label: "nanofabrication",
    title: "Illinois MicroTech optics and electronics team",
    meta: "Optics and Electronics Team Member | Oct. 2025 – May 2026",
    points: [
      "Member of the CMU-based Hackerfab project, a student-led initiative created to make nanofabrication more accessible.",
      "Strategized and implemented solutions to resolve key operational challenges with the lithography stepper.",
      "Investigated and mitigated UV lithography imaging artifacts and experimentally determined optical resolution and feature size accuracy down to 0.2 um/pixel.",
    ],
    tags: ["optics", "electronics", "lithography", "Hackerfab"],
  },
  {
    label: "machine learning research",
    title: "Comparative Analysis of CNNs for Classifying Alzheimer’s Disease",
    meta: "Researcher | Aug. 2023 – May 2025",
    points: [
      "Authored a comparative analysis of convolutional neural networks for Alzheimer's disease classification.",
      "Achieved 95% accuracy using a VGG16 model with the Convolutional Block Attention Mechanism.",
      "Improved early detection of Alzheimer’s for more than 55 million patients with dementia.",
      "Earned the Jay and Jeremy Hoffman Memorial Award and Gold Honors at the Illinois Junior Academy of Sciences State Science Fair.",
    ],
    tags: ["TensorFlow", "VGG16", "CBAM", "medical imaging"],
    href: "https://github.com/debroy2021/Alzheimers-Classification",
  },
  {
    label: "software internship",
    title: "Parabole.ai",
    meta: "Intern | May 2024 – Aug. 2024",
    points: [
      "Led a team of four interns to migrate the company’s website from Flask to React, improving site responsiveness.",
      "Integrated the company’s TRAIN platform API to generate causal inference graphs, enhancing usability for 100+ users.",
      "Collaborated with project leaders to deliver production-ready features in 2 months.",
    ],
    tags: ["React", "API integration", "causal inference", "frontend"],
  },
];

const skillGroups = [
  "C",
  "ReactJS",
  "Java",
  "Python",
  "TensorFlow",
  "Scikit Learn",
  "Pandas",
  "NumPy",
  "Unix/Linux Shell",
  "KiCad",
  "Raspberry Pi",
  "STM32CubeIDE",
  "Git",
  "MATLAB",
  "Oscilloscopes",
  "Function Generators",
];

const softSkills = [
  "Team leadership",
  "Research communication",
  "Technical documentation",
  "Tutoring and mentorship",
  "Cross-functional collaboration",
  "Problem decomposition",
];

type HomePageProps = {
  courseNoteGroups: CourseNoteGroup[];
};

export const HomePage = ({ courseNoteGroups }: HomePageProps) => {
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
          <Link className="topbar-link" to="/notes">
            Course Notes
          </Link>
          <Link className="topbar-link" to="/eco">
            Eco
          </Link>
          <div className="topbar-social">
            <a
              href="https://github.com/debroy2021"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <GitHubIcon className="topbar-icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/debroy2024/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="topbar-icon" />
            </a>
          </div>
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
                <dd>University of Illinois at Urbana-Champaign</dd>
              </div>
              <div>
                <dt>Track</dt>
                <dd>Bachelor of Science in Electrical Engineering</dd>
              </div>
              <div>
                <dt>Focus</dt>
                <dd>
                  PCB Design, embedded systems, mechatronics, automotive systems
                </dd>
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
          <p className="eyebrow">About me</p>
          <h2 id="about-heading">Engineering systems with real-world impact</h2>
          <p>
            I’m a sophomore at the University of Illinois at Urbana-Champaign,
            studying Electrical Engineering with a 3.88 GPA and honors from the
            James Scholar program and Dean’s List. My coursework spans digital
            signal processing, analog signal processing, quantum and thermal
            physics, and linear algebra and differential equations.
          </p>
          <p>
            I am especially interested in the intersection of power systems,
            embedded systems, optics, and applied machine learning. Through my
            work in vehicle telemetry, lithography research, and machine
            learning for medical imaging, I’ve built practical experience
            solving technical problems that connect engineering design with
            measurable outcomes.
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
          <h2 id="work-heading">Projects</h2>
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
                {project.routeHref && (
                  <Link to={project.routeHref} className="project-more-info">
                    More Info
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        className="notes-preview"
        aria-labelledby="notes-preview-heading"
      >
        <div className="notes-preview-header">
          <div>
            <p className="eyebrow">Course notes</p>
            <h2 id="notes-preview-heading">Selected Coursework</h2>
          </div>
          <Link className="secondary-link notes-link" to="/notes">
            Open full notes
          </Link>
        </div>

        <div className="note-groups note-preview-grid">
          {courseNoteGroups.slice(0, 3).map((group) => (
            <div key={group.label} className="note-group">
              <h3>{group.label}</h3>
              <div className="course-note-grid">
                {group.courses.slice(0, 2).map((course) => (
                  <article key={course.name} className="course-note-card">
                    <h4>{course.name}</h4>
                    <div className="course-note-list">
                      {course.notes.slice(0, 2).map((note) => (
                        <a
                          key={note.name}
                          className="course-note-link"
                          href={note.href}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {note.name}
                        </a>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
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
