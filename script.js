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