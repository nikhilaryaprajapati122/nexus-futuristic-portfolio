// =========================================================
// NEXUS // SYSTEM CORE
// =========================================================


// ---------------------------------------------------------
// LIVE CLOCK
// ---------------------------------------------------------

function updateClock() {

    const now = new Date();

    const time = now.toLocaleTimeString(
        "en-IN",
        {
            hour12: false
        }
    );

    const date = now.toLocaleDateString(
        "en-IN",
        {
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        }
    );

    document.getElementById("systemTime").textContent = time;

    document.getElementById("systemDate").textContent = date;
}

updateClock();

setInterval(updateClock, 1000);


// ---------------------------------------------------------
// SIMULATED SYSTEM LOAD
// ---------------------------------------------------------

function updateSystemLoad() {

    const cpu =
        Math.floor(
            Math.random() * 35 + 25
        );

    const memory =
        Math.floor(
            Math.random() * 30 + 40
        );

    document.getElementById("cpuLoad").textContent =
        cpu + "%";

    document.getElementById("memoryLoad").textContent =
        memory + "%";
}

updateSystemLoad();

setInterval(
    updateSystemLoad,
    2000
);


// ---------------------------------------------------------
// CORE STATUS
// ---------------------------------------------------------

const coreStatus =
    document.getElementById("coreStatus");

coreStatus.textContent = "ONLINE";


// ---------------------------------------------------------
// NEXUS BOOT MESSAGE
// ---------------------------------------------------------

console.log(
    "%c NEXUS // DEVELOPMENT CORE ",
    "color:#00e5ff;font-size:18px;font-weight:bold;"
);

console.log(
    "%c SYSTEM ONLINE ",
    "color:#00ff9d;font-size:13px;"
);

console.log(
    "%c JavaScript Core Initialized ",
    "color:#ffffff;font-size:12px;"
);

// =========================================================
// NEXUS // COMMAND TERMINAL
// =========================================================

const terminalForm =
    document.getElementById("terminalForm");

const terminalInput =
    document.getElementById("terminalInput");

const terminalOutput =
    document.getElementById("terminalOutput");


function terminalPrint(
    message,
    className = ""
) {

    const line =
        document.createElement("p");

    line.innerHTML = message;

    if (className) {
        line.className = className;
    }

    terminalOutput.appendChild(line);

    terminalOutput.scrollTop =
        terminalOutput.scrollHeight;
}


function executeCommand(command) {

    const cmd =
        command
            .trim()
            .toLowerCase();

    if (!cmd) {
        return;
    }


    terminalPrint(
        `<span class="terminal-cyan">
        nikhil@nexus:~$
        </span> ${command}`
    );


    switch (cmd) {

        case "help":

            terminalPrint(
                "AVAILABLE COMMANDS",
                "terminal-green"
            );

            terminalPrint(
                "help &nbsp;&nbsp;&nbsp;&nbsp; → show commands",
                "terminal-muted"
            );

            terminalPrint(
                "system &nbsp;&nbsp; → system status",
                "terminal-muted"
            );

            terminalPrint(
                "skills &nbsp;&nbsp; → development stack",
                "terminal-muted"
            );

            terminalPrint(
                "projects &nbsp; → project modules",
                "terminal-muted"
            );

            terminalPrint(
                "about &nbsp;&nbsp;&nbsp; → developer profile",
                "terminal-muted"
            );

            terminalPrint(
                "clear &nbsp;&nbsp;&nbsp; → clear terminal",
                "terminal-muted"
            );

            break;


        case "system":

            terminalPrint(
                "NEXUS SYSTEM STATUS",
                "terminal-green"
            );

            terminalPrint(
                "CORE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ONLINE"
            );

            terminalPrint(
                "MODE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; DEVELOPMENT"
            );

            terminalPrint(
                "PRIMARY&nbsp;&nbsp;&nbsp; JAVA"
            );

            terminalPrint(
                "FRONTEND&nbsp;&nbsp; HTML / CSS"
            );

            terminalPrint(
                "AI CORE&nbsp;&nbsp;&nbsp; PYTHON"
            );

            break;


        case "skills":

            terminalPrint(
                "SKILL CORE MATRIX",
                "terminal-green"
            );

            terminalPrint(
                "JAVA → CORE / OOP"
            );

            terminalPrint(
                "PYTHON → PROGRAMMING / AI"
            );

            terminalPrint(
                "HTML → WEB STRUCTURE"
            );

            terminalPrint(
                "CSS → FUTURISTIC UI"
            );

            terminalPrint(
                "LINUX → SYSTEMS"
            );

            terminalPrint(
                "GIT → VERSION CONTROL"
            );

            break;


        case "projects":

            terminalPrint(
                "PROJECT COMMAND CENTER",
                "terminal-green"
            );

            terminalPrint(
                "01 → Java-Basic"
            );

            terminalPrint(
                "02 → Python-Practice"
            );

            terminalPrint(
                "03 → NEXUS // Futuristic UI"
            );

            terminalPrint(
                "STATUS → 2 ACTIVE / 1 BUILDING"
            );

            break;


        case "about":

            terminalPrint(
                "NIKHIL ARYA PRAJAPATI",
                "terminal-green"
            );

            terminalPrint(
                "Computer Science Student"
            );

            terminalPrint(
                "Focused on software engineering,"
            );

            terminalPrint(
                "Java development, AI and futuristic UI."
            );

            break;


        case "clear":

            terminalOutput.innerHTML = "";

            break;


        default:

            terminalPrint(
                `Command not found:
                <span class="terminal-cyan">
                ${command}
                </span>`,
                "terminal-muted"
            );

            terminalPrint(
                "Type 'help' for available commands.",
                "terminal-muted"
            );
    }
}


terminalForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

        executeCommand(
            terminalInput.value
        );

        terminalInput.value = "";
    }
);


// ==========================================
// NEXUS // FUTURISTIC BOOT SEQUENCE
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    const bootMessages = [
        "INITIALIZING NEXUS CORE...",
        "LOADING DEVELOPMENT MODULES...",
        "CONNECTING TERMINAL...",
        "CALIBRATING SKILL MATRIX...",
        "LOADING PROJECT COMMAND CENTER...",
        "SYSTEM CHECK COMPLETE...",
        "NEXUS CORE ONLINE"
    ];

    let index = 0;

    const bootScreen = document.createElement("div");

    bootScreen.id = "nexus-boot-screen";

    bootScreen.innerHTML = `
        <div class="boot-content">
            <div class="boot-title">NEXUS // SYSTEM BOOT</div>
            <div class="boot-line">
                <span id="boot-text">INITIALIZING...</span><span class="boot-cursor">█</span>
            </div>
            <div class="boot-progress">
                <div id="boot-progress-bar"></div>
            </div>
            <div id="boot-status">SYSTEM STARTING...</div>
        </div>
    `;

    document.body.prepend(bootScreen);

    const bootText = document.getElementById("boot-text");
    const progressBar = document.getElementById("boot-progress-bar");
    const bootStatus = document.getElementById("boot-status");

    function runBootSequence() {

        if (index < bootMessages.length) {

            bootText.textContent = bootMessages[index];

            const progress =
                ((index + 1) / bootMessages.length) * 100;

            progressBar.style.width = progress + "%";

            bootStatus.textContent =
                "CORE PROGRESS : " + Math.round(progress) + "%";

            index++;

            setTimeout(runBootSequence, 650);

        } else {

            bootText.textContent = "NEXUS CORE ONLINE";
            bootStatus.textContent = "SYSTEM STATUS : ONLINE";

            setTimeout(() => {
                bootScreen.classList.add("boot-complete");

                setTimeout(() => {
                    bootScreen.remove();
                }, 900);

            }, 700);
        }
    }

    runBootSequence();

});

// ==========================================
// NEXUS // TERMINAL CURSOR + INPUT EFFECT
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    const terminalInput = document.getElementById("terminalInput");

    if (!terminalInput) return;

    // Automatically focus terminal when user clicks anywhere
    document
        .getElementById("terminal")
        ?.addEventListener("click", () => {
            terminalInput.focus();
        });

    // Blinking cursor-style placeholder
    const placeholders = [
        "type a command...",
        "try: help",
        "try: system",
        "try: skills",
        "try: projects"
    ];

    let placeholderIndex = 0;

    setInterval(() => {

        if (document.activeElement !== terminalInput) {

            placeholderIndex =
                (placeholderIndex + 1) % placeholders.length;

            terminalInput.placeholder =
                placeholders[placeholderIndex];
        }

    }, 1800);

});

// ==========================================
// NEXUS // TERMINAL BOOT TYPING
// ==========================================

function startTerminalBoot() {

    const output = document.getElementById("terminalOutput");
    const input = document.getElementById("terminalInput");

    if (!output || !input) return;

    const bootLines = [
        "Connecting to NIKHIL-CORE...",
        "Loading terminal interface...",
        "Checking system modules...",
        "Terminal connection established.",
        "SYSTEM STATUS: ONLINE"
    ];

    let lineIndex = 0;

    function typeLine(text, callback) {

        const line = document.createElement("p");

        line.className = "terminal-boot-line";

        output.appendChild(line);

        let charIndex = 0;

        function typeCharacter() {

            if (charIndex < text.length) {

                line.textContent += text.charAt(charIndex);

                charIndex++;

                setTimeout(typeCharacter, 45);

            } else {

                setTimeout(callback, 350);
            }
        }

        typeCharacter();
    }

    function nextLine() {

        if (lineIndex >= bootLines.length) {

            input.focus();
            return;
        }

        typeLine(
            bootLines[lineIndex],
            () => {
                lineIndex++;
                nextLine();
            }
        );
    }

    setTimeout(nextLine, 1800);
}

startTerminalBoot();
