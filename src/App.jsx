import React, { useState } from "react";
import { Mail, Github, Linkedin } from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="p-4 max-w-5xl mx-auto font-sans">
      {/* Header Section */}
      <header className="text-center mb-8">
        <img src="/rehan-profile.jpg" alt="Rehan Mokashi" className="rounded-full w-28 h-28 mx-auto" />
        <h1 className="text-3xl font-bold mt-4">Rehan Imran Mokashi</h1>
        <p className="text-gray-600">IoT & Embedded Systems Developer | AI/ML & Blockchain Enthusiast</p>
        <div className="flex justify-center gap-4 mt-3 text-xl">
          <a href="mailto:rehanmokashi786@gmail.com" target="_blank" rel="noreferrer"><Mail /></a>
          <a href="https://github.com/rmokashi01" target="_blank" rel="noreferrer"><Github /></a>
          <a href="https://www.linkedin.com/in/rehan-mokashi-7b32472a2/" target="_blank" rel="noreferrer"><Linkedin /></a>
        </div>
        <a
          href="/Rehan_CV.pdf"
          download
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded mt-4"
        >
          Download Resume
        </a>
      </header>

      {/* Tab Menu */}
      <nav className="flex justify-center gap-4 mb-6">
        <button onClick={() => setActiveTab("home")} className="px-4 py-2 bg-gray-100 rounded hover:bg-blue-100">🏠 Home</button>
        <button onClick={() => setActiveTab("projects")} className="px-4 py-2 bg-gray-100 rounded hover:bg-blue-100">💻 Projects</button>
        <button onClick={() => setActiveTab("skills")} className="px-4 py-2 bg-gray-100 rounded hover:bg-blue-100">🛠️ Skills</button>
        <button onClick={() => setActiveTab("experience")} className="px-4 py-2 bg-gray-100 rounded hover:bg-blue-100">🧑‍💻 Experience</button>
        <button onClick={() => setActiveTab("contact")} className="px-4 py-2 bg-gray-100 rounded hover:bg-blue-100">📞 Contact</button>
      </nav>

      {/* Content Tabs */}
      {activeTab === "home" && (
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">About Me</h2>
          <p>I am a final-year B.Tech Computer Science student, specializing in IoT and Embedded Systems. Passionate about innovation, I explore AI/ML and Blockchain to build real-world solutions. My goal is to merge hardware with intelligent software systems to solve critical problems in automation, safety, and communication.</p>
        </section>
      )}

      {activeTab === "projects" && (
        <section className="space-y-6">
          <h2 className="text-xl font-semibold">Projects</h2>

          <div>
            <h3 className="font-bold">Railway Safety Automation using IoT-ML</h3>
            <p>Used Raspberry Pi, TensorFlow Lite, and object detection to automate railway crossing gates.</p>
            <p><strong>Tech:</strong> Raspberry Pi, Python, TensorFlow Lite, Embedded C</p>
            <a href="https://www.linkedin.com/posts/rehan-mokashi-7b32472a2_throwback-to-an-moment-in-innovation-flashback-activity-7178236187256500224-Rt41" target="_blank" className="text-blue-600">LinkedIn</a> | <a href="https://github.com/rmokashi01/Railway-Safety-Project" target="_blank" className="text-blue-600">GitHub</a>
          </div>

          <div>
            <h3 className="font-bold">BMI Calculator Web App</h3>
            <p>Developed a BMI calculator using HTML/CSS/JS with responsive UI.</p>
            <p><strong>Tech:</strong> JavaScript, HTML/CSS</p>
            <a href="https://www.linkedin.com/posts/rehan-mokashi-7b32472a2_webdevelopment-internship-technohacks-activity-7169251060815974400-qWv6" target="_blank" className="text-blue-600">LinkedIn</a> | <a href="https://github.com/rmokashi01/BMI-Calculator" target="_blank" className="text-blue-600">GitHub</a>
          </div>

          <div>
            <h3 className="font-bold">Social Media of Things (IoT Alerts)</h3>
            <p>Integrated Bolt IoT module with LM35 sensor to send alerts on Telegram, Gmail & SMS using Twilio.</p>
            <p><strong>Tech:</strong> Bolt IoT, Twilio API, Python</p>
            <a href="https://www.linkedin.com/posts/inventrom_wowrehan-mokashi-you-absolutely-nailed-activity-7166507359123537920-4Lv5" target="_blank" className="text-blue-600">LinkedIn</a> | <a href="https://github.com/rmokashi01/Bolt-IoT-Alert-System" target="_blank" className="text-blue-600">GitHub</a>
          </div>

          <div>
            <h3 className="font-bold">Hospital Helper Robot</h3>
            <p>Autonomous robot with RFID and facial recognition, finalist at e-Yantra IIT Bombay Hackathon.</p>
            <p><strong>Tech:</strong> Arduino, CNN, RFID</p>
            <a href="https://www.linkedin.com/posts/rehan-mokashi-7b32472a2_hackathon-innovation-robotics-activity-7179763522262769664-1Qe_" target="_blank" className="text-blue-600">LinkedIn</a> | <a href="https://github.com/rmokashi01/Hospital-Helper-Robot" target="_blank" className="text-blue-600">GitHub</a>
          </div>
        </section>
      )}

      {activeTab === "skills" && (
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Skills</h2>
          <ul className="list-disc list-inside">
            <li><strong>Languages:</strong> Python, Java, C/C++, JavaScript, SQL, Embedded C</li>
            <li><strong>Web:</strong> HTML/CSS, React, Node.js, Flask, REST APIs</li>
            <li><strong>Databases:</strong> MySQL, Firebase</li>
            <li><strong>Tools:</strong> Git, Docker, VS Code, AWS IoT, Kubernetes</li>
            <li><strong>Platforms:</strong> Linux, Windows, Google Cloud Platform</li>
            <li><strong>Soft Skills:</strong> Teamwork, Communication, Leadership</li>
          </ul>
        </section>
      )}

      {activeTab === "experience" && (
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Experience / Internships</h2>
          <ul className="list-disc list-inside">
            <li><strong>Bolt IoT Intern</strong> – Created IoT-based Temperature Monitoring System with alerts using Twilio.</li>
            <li><strong>Domain Computers Intern</strong> – Developed REST APIs using Flask and managed MySQL databases.</li>
            <li><strong>TechnoHacks Web Intern</strong> – Built small frontend projects with HTML/CSS/JS.</li>
            <li><strong>e-Yantra Lab Coordinator</strong> – Led robotics and embedded teams under IIT Bombay’s initiative.</li>
          </ul>
        </section>
      )}

      {activeTab === "contact" && (
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Contact Me</h2>
          <p>Email: <a href="mailto:rehanmokashi786@gmail.com" className="text-blue-600">rehanmokashi786@gmail.com</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/rehan-mokashi-7b32472a2/" className="text-blue-600">@rehan-mokashi</a></p>
          <p>GitHub: <a href="https://github.com/rmokashi01" className="text-blue-600">@rmokashi01</a></p>
        </section>
      )}
    </div>
  );
}
