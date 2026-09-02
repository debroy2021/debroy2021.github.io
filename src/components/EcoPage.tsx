import { Link } from "react-router-dom";
import teleDduRender from "../assets/3D Model.png";
import pcbLayout from "../assets/PCB_v1.0.png";
import { GitHubIcon, LinkedInIcon } from "./icons";

const boardFeatures = [
  "ESP32-S3-WROOM-1",
  "ISO1044BD isolated CAN transceiver",
  "MicroSD logging",
  "ISM330DHCX IMU",
  "MMC5983MA magnetometer",
  "Rotary encoder driver input",
  "USB-C programming interface",
  "12 V / 5 V / 3.3 V power rails",
  "Reset and boot controls",
];

const architectureData = [
  "Motor controller current",
  "Target and actual motor speed",
  "PWM duty cycle",
  "BMS voltage and cell data",
  "Battery / motor temperature",
  "Wheel speed",
  "GPS",
  "IMU",
  "Steering input",
];

const sensorRoadmap = [
  "GPS",
  "Hall-effect wheel-speed sensor",
  "Accelerometer / gyroscope",
  "Magnetometer",
  "Battery temperature",
  "Motor temperature",
  "Motor-controller CAN data",
  "BMS data",
  "Steering position",
  "Pitot tube / aerodynamic sensors",
];

const tools = [
  "ESP32-S3",
  "Embedded C/C++",
  "CAN",
  "Wi-Fi",
  "I2C",
  "SPI",
  "MicroSD",
  "KiCad",
  "MATLAB",
  "Simulink",
  "SavvyCAN",
  "CANable",
  "Git",
  "oscilloscopes",
  "electronics lab equipment",
];

export const EcoPage = () => (
  <main className="site-shell eco-shell">
    <header className="hero eco-hero" aria-labelledby="eco-heading">
      <nav className="topbar" aria-label="Eco navigation">
        <Link className="topbar-link" to="/">
          Home
        </Link>
        <Link className="topbar-link" to="/notes">
          Course Notes
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

      <div className="eco-page-shell">
        <section className="eco-hero-grid">
          <div className="eco-hero-copy">
            <p className="eyebrow">Eco Illini Supermileage</p>
            <h1 id="eco-heading">
              Telemetry, driver display, and vehicle data
            </h1>
            <p className="intro eco-intro">
              I lead Telemetry, Driver Display, and Testing/Characterization for
              Eco Illini, building the systems that turn raw vehicle data into
              information we can use during a race and engineering insight we
              can use after it.
            </p>
            <div className="eco-highlight-grid">
              <div className="eco-stat-box">
                <span className="eco-stat-value">186.5 km/kWh</span>
                <span className="eco-stat-label">2026 Shell Eco-marathon</span>
              </div>
              <div className="eco-stat-box">
                <span className="eco-stat-value">ESP32-S3</span>
                <span className="eco-stat-label">Telemetry controller</span>
              </div>
              <div className="eco-stat-box">
                <span className="eco-stat-value">CAN + Wi-Fi</span>
                <span className="eco-stat-label">Vehicle comms</span>
              </div>
            </div>
          </div>

          <div className="eco-image-card">
            <img src={teleDduRender} alt="TeleDDU Rev. 1.0 render" />
            <p>TeleDDU Rev. 1.0 — custom telemetry and data-acquisition PCB</p>
          </div>
        </section>
      </div>
    </header>

    <section
      className="eco-section"
      aria-labelledby="telemetry-matters-heading"
    >
      <div className="section-header">
        <p className="eyebrow">Why telemetry matters</p>
        <h2 id="telemetry-matters-heading">Two jobs: race now, learn later</h2>
      </div>

      <div className="eco-two-column">
        <div className="eco-card">
          <h3>Live race strategy</h3>
          <p>
            During a run, the telemetry system is intended to provide the driver
            and pit team with useful information such as vehicle speed, lap
            timing, track position, battery and motor temperatures,
            motor-control data, battery voltage/current, efficiency information,
            and eventually optimal speed or accelerate-coast recommendations.
          </p>
          <p>
            At any point in the race, we want to understand how efficiently the
            car is operating and adjust strategy based on driving conditions and
            track position.
          </p>
        </div>

        <div className="eco-card">
          <h3>Post-run engineering</h3>
          <p>
            After the race, logged data is used to compare runs, understand
            losses, validate vehicle models, improve mechanical and electrical
            designs, support race simulation, and improve future efficiency.
          </p>
          <p>
            The main idea is that the telemetry system is both a race tool and
            an engineering-development tool.
          </p>
        </div>
      </div>
    </section>

    <section className="eco-section" aria-labelledby="hardware-heading">
      <div className="section-header">
        <p className="eyebrow">TeleDDU hardware</p>
        <h2 id="hardware-heading">TeleDDU Rev. 1.0</h2>
      </div>

      <div className="eco-hardware-layout">
        <div className="eco-image-card eco-image-card-compact">
          <img src={pcbLayout} alt="TeleDDU PCB layout" />
        </div>

        <div className="eco-card">
          <p>
            A custom ESP32-S3-based telemetry and data-acquisition board
            integrating vehicle communication, local logging, inertial sensing,
            driver inputs, power management, and wireless communication.
          </p>
          <ul className="feature-list">
            {boardFeatures.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    <section className="eco-section" aria-labelledby="architecture-heading">
      <div className="section-header">
        <p className="eyebrow">System architecture</p>
        <h2 id="architecture-heading">From the car to the driver and pit</h2>
      </div>

      <div
        className="eco-flow"
        aria-label="Vehicle to driver and pit architecture"
      >
        <div className="flow-node">Vehicle</div>
        <span className="flow-arrow">→</span>
        <div className="flow-node">TeleDDU</div>
        <span className="flow-arrow">→</span>
        <div className="flow-node">Driver display / pit laptop</div>
      </div>

      <div className="eco-two-column eco-architecture-grid">
        <div className="eco-card">
          <h3>Vehicle side</h3>
          <p>
            TeleDDU communicates with the rest of the car through CAN and is
            responsible for acquiring CAN and sensor data, logging to microSD,
            communicating wirelessly, and forwarding data toward the pit-side
            system.
          </p>
          <ul className="feature-list">
            {architectureData.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="eco-card">
          <h3>Driver display and pit side</h3>
          <p>
            The current architecture uses an ESP32 Wi-Fi access point/server
            with a phone as the display. A laptop receives telemetry for live
            monitoring, analysis, and later validation.
          </p>
          <p>
            Information envisioned for the driver display includes speed, lap
            timer, lap count, throttle setting, dead-man status, battery and
            motor temperature, and eventually simple accelerate/coast
            recommendations.
          </p>
          <p>
            Wi-Fi was selected initially because it is easy to implement and
            works well with a phone-based display. ESP-NOW was also considered
            as a lower power alternative, though it requires more custom
            hardware.
          </p>
        </div>
      </div>
    </section>

    <section className="eco-section" aria-labelledby="roadmap-heading">
      <div className="section-header">
        <p className="eyebrow">Data / sensor roadmap</p>
        <h2 id="roadmap-heading">What we measure</h2>
      </div>

      <div className="eco-card eco-roadmap-card">
        <div className="roadmap-columns">
          <div>
            <h3>Sensors and data sources</h3>
            <ul className="feature-list">
              {sensorRoadmap.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Derived quantities</h3>
            <ul className="feature-list">
              <li>GPS: position, velocity, acceleration</li>
              <li>Wheel sensor: revolutions and speed</li>
              <li>IMU: acceleration and vehicle dynamics</li>
              <li>
                Motor controller / BMS: electrical power and energy consumption
              </li>
              <li>
                Potential future sensor fusion: wheel-speed + GPS with Kalman
                filtering
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section className="eco-section" aria-labelledby="modeling-heading">
      <div className="section-header">
        <p className="eyebrow">Data analysis and modeling</p>
        <h2 id="modeling-heading">Turning measurements into decisions</h2>
      </div>

      <div className="eco-card">
        <p>
          I use MATLAB and Simulink to model vehicle performance and race
          strategy, including longitudinal vehicle dynamics, rolling resistance,
          aerodynamic drag, acceleration, voltage sag, energy consumption, and
          burn-and-coast strategy.
        </p>
        <p>
          The broader goal is to compare real measured vehicle data against
          simulations so the model becomes more accurate over time. Long-term,
          the intent is to use current state and race progress to calculate an
          optimal speed or strategy and send a simple recommendation back to the
          driver, such as <strong>accelerate</strong> or <strong>coast</strong>.
        </p>
        <p>
          This is intended to evolve into a closed-loop workflow: measure →
          analyze → model → recommend → test again.
        </p>
      </div>
    </section>

    <section className="eco-section" aria-labelledby="testing-heading">
      <div className="section-header">
        <p className="eyebrow">Testing & characterization</p>
        <h2 id="testing-heading">
          Closing the loop between design and reality
        </h2>
      </div>

      <div className="eco-card">
        <p>
          Testing and characterization are a major part of the project. The
          philosophy is simple: do not rely only on datasheets or theory.
          Measure the actual car and components.
        </p>
        <ul className="feature-list">
          <li>Coast-down testing</li>
          <li>Rolling resistance estimation</li>
          <li>Aerodynamic drag estimation</li>
          <li>Sensor validation</li>
          <li>Electrical efficiency testing</li>
          <li>Power-electronics characterization</li>
          <li>MOSFET characterization and switching losses</li>
          <li>Thermal behavior and PWM effects</li>
          <li>Future benchtop motor and drivetrain testing</li>
        </ul>
      </div>
    </section>

    <section className="eco-section" aria-labelledby="power-heading">
      <div className="section-header">
        <p className="eyebrow">Related electrical work</p>
        <h2 id="power-heading">Power electronics contribution</h2>
      </div>

      <div className="eco-card">
        <p>
          Last year, I engineered a 97%-efficient buck converter that converts
          approximately 32–42 V to 12 V at 5 A as part of the vehicle’s Power
          Distribution Unit.
        </p>
        <p>
          This work supports the broader electrical system and complements the
          telemetry, data-acquisition, and testing effort.
        </p>
      </div>
    </section>

    <section className="eco-section" aria-labelledby="timeline-heading">
      <div className="section-header">
        <p className="eyebrow">Project timeline</p>
        <h2 id="timeline-heading">Development process</h2>
      </div>

      <div className="eco-timeline">
        <div className="eco-timeline-item">
          <span className="timeline-label">Summer 2026</span>
          <ul className="feature-list">
            <li>Telemetry architecture planning</li>
            <li>ESP32 learning and prototyping</li>
            <li>Wi-Fi server proof of concept</li>
            <li>CAN compatibility work and onboarding material</li>
          </ul>
        </div>
        <div className="eco-timeline-item">
          <span className="timeline-label">Fall 2026</span>
          <ul className="feature-list">
            <li>Sensor and extension projects</li>
            <li>PCB manufacturing and bring-up</li>
            <li>Testing and validation</li>
          </ul>
        </div>
        <div className="eco-timeline-item">
          <span className="timeline-label">Winter/Spring 2027</span>
          <ul className="feature-list">
            <li>Vehicle integration and wiring</li>
            <li>On-car testing</li>
            <li>Efficiency optimization and race strategy work</li>
          </ul>
        </div>
      </div>
    </section>

    <section className="eco-section" aria-labelledby="tech-heading">
      <div className="section-header">
        <p className="eyebrow">Technologies</p>
        <h2 id="tech-heading">Tools and systems</h2>
      </div>

      <div className="eco-tag-list" aria-label="Eco technology stack">
        {tools.map((tool) => (
          <span key={tool}>{tool}</span>
        ))}
      </div>
    </section>
  </main>
);
