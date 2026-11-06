
import { useEffect, useRef, useState } from "react";
import "./TechVault.css";

const commandResponses = {
  help: [
    "Welcome to my Tech Vault.",
    "",
    "Available commands:",
    "  about         Learn about me",
    "  skills        Explore my technical skills",
    "  projects      See what I have built",
    "  achievements  Explore my milestones",
    "  superpower    Discover how I approach problems",
    "  beyond-code   See what I enjoy outside technology",
    "  contact       Find ways to connect",
    "  clear         Clear the terminal",
  ],

  about: [
    "Nidhi Shah | Information Technology",
    "",
    "A third-year IT student interested in building",
    "useful, secure and scalable technology.",
    "",
    "Currently exploring fintech, AI and cybersecurity.",
    "Incoming Technology Intern at Barclays.",
  ],

  skills: [
    "MY TECH STACK",
    "",
    "Languages: Java, Python, C, SQL",
    "Backend: Spring Boot, FastAPI, REST APIs",
    "Databases: PostgreSQL, MySQL, Supabase",
    "AI/ML: Scikit-learn, XGBoost, LightGBM, SHAP",
    "Tools: Kafka, Docker, Git, GitHub",
    "Core CS: DSA, OOP, DBMS, OS, Computer Networks",
  ],

  projects: [
    "SELECTED PROJECTS",
    "",
    "01. ANVAYA",
    "    Pre-Delinquency Intervention Engine",
    "    Banking risk intelligence and early intervention.",
    "",
    "02. PRISM",
    "    Privacy-Preserving PII Detection & Redaction",
    "    Detect and redact sensitive information in documents.",
    "",
    "03. CARESYNC",
    "    AI-enabled healthcare support platform.",
    "",
    "Explore the Projects section for more details and links.",
  ],

  achievements: [
    "MILESTONES",
    "",
    "Barclays Hack-O-Hire - Top 42 teams",
    "Sparkulate Business Hackathon - Winner",
    "RIT Hackathon - 2nd Runner-Up",
    "Smart India Hackathon - Semifinalist",
    "Cummins Water Innovation Challenge - Top 13",
  ],

  superpower: [
    "MY SUPERPOWER",
    "",
    "Turning complex problems into practical systems.",
    "",
    "I enjoy connecting different areas of technology",
    "to build solutions that are useful, explainable",
    "and mindful of security.",
    "",
    "FINTECH  x  AI  x  CYBERSECURITY",
  ],

  "beyond-code": [
    "BEYOND THE SCREEN",
    "",
    "Not everything happens behind a keyboard.",
    "",
    "When I am away from technology:",
    "- I enjoy playing chess.",
    "- I enjoy playing badminton.",
    "- I like exploring new ideas and learning.",
  ],

  contact: [
    "LET'S CONNECT",
    "",
    "LinkedIn: linkedin.com/in/nidhi-s-86a45026a",
    "GitHub: github.com/Nidhi116Shah",
    "",
    "Use the Contact section below to reach me.",
  ],
};

const suggestedCommands = [
  "help",
  "about",
  "skills",
  "projects",
  "achievements",
  "superpower",
  "beyond-code",
  "contact",
];

function TechVault() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    {
      command: "system",
      output: [
        "TECH VAULT v1.0",
        "An interactive look into my world of technology.",
        "",
        "Type 'help' to see available commands.",
      ],
    },
  ]);

  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [history]);

  function runCommand(commandText) {
    const command = commandText.trim().toLowerCase();

    if (!command) return;

    if (command === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    const output = commandResponses[command] || [
      `Command not found: ${command}`,
      "",
      "Type 'help' to see available commands.",
    ];

    setHistory((previous) => [
      ...previous,
      {
        command,
        output,
      },
    ]);

    setInput("");

    requestAnimationFrame(() => {
      inputRef.current?.focus();
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    runCommand(input);
  }

  return (
    <section className="tech-vault-section" id="tech-vault">
      <div className="vault-heading">
        <div className="vault-kicker">
          <span className="vault-kicker-line"></span>
          BEYOND THE RESUME
          <span className="vault-kicker-line"></span>
        </div>

        <h2>
          Welcome to my <span>Tech Vault.</span>
        </h2>

        <p>
          Don't just read about me. Explore.
          Type a command and discover my work,
          skills and the person behind them.
        </p>
      </div>

      <div className="vault-container">
        <div className="vault-topbar">
          <div className="vault-window-controls">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="vault-window-name">
            <span className="vault-lock">⌘</span>
            nidhi@tech-vault:~
          </div>

          <div className="vault-live">
            <span></span>
            LIVE SESSION
          </div>
        </div>

        <div
          className="vault-screen"
          onClick={() => inputRef.current?.focus()}
        >
          <div className="vault-welcome">
            <p className="vault-green">
              NIDHI SHAH // INTERACTIVE PORTFOLIO
            </p>

            <p>
              System initialized. Welcome, visitor.
            </p>

            <p className="vault-muted">
              Type <span>help</span> to get started.
            </p>
          </div>

          <div className="vault-history">
            {history.map((entry, index) => (
              <div className="vault-entry" key={index}>
                {entry.command !== "system" && (
                  <p className="vault-command-line">
                    <span>visitor@nidhi:~$</span>{" "}
                    {entry.command}
                  </p>
                )}

                <div className="vault-output">
                  {entry.output.map((line, lineIndex) => (
                    <p
                      key={lineIndex}
                      className={
                        line === ""
                          ? "vault-empty-line"
                          : line.includes("MY SUPERPOWER") ||
                            line.includes("SELECTED PROJECTS") ||
                            line.includes("MILESTONES")
                          ? "vault-highlight"
                          : ""
                      }
                    >
                      {line || "\u00A0"}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <form
            className="vault-input-form"
            onSubmit={handleSubmit}
          >
            <label
              htmlFor="vault-command"
              className="vault-prompt"
            >
              visitor@nidhi:~$
            </label>

            <input
              ref={inputRef}
              id="vault-command"
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Type a command..."
              autoComplete="off"
              spellCheck="false"
              aria-label="Enter a Tech Vault command"
            />

            <button type="submit" aria-label="Run command">
              ↵
            </button>
          </form>

          <div ref={terminalEndRef}></div>
        </div>

        <div className="vault-bottom-bar">
          <span>UTF-8</span>
          <span>INTERACTIVE MODE</span>
          <span>PORTFOLIO.EXE</span>
        </div>
      </div>

      <div className="vault-suggestions">
        <span>TRY A COMMAND</span>

        {suggestedCommands.map((command) => (
          <button
            type="button"
            key={command}
            onClick={() => runCommand(command)}
          >
            {command}
          </button>
        ))}
      </div>

      <p className="vault-note">
        A small interactive experiment. No actual system
        commands are executed.
      </p>
    </section>
  );
}

export default TechVault;
