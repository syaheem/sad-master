// =====================================================
//  SAD Master — app.js
// =====================================================

const studyTopics = {
    ch1: [
        { question: "SAD Fundamentals", acronymHint: "", chapter: "ch1", answers: [{ keyword: "processes", fullText: "Systematically analyze and redesign business processes to maximize efficiency, reduce operational costs, and align with corporate strategy." }, { keyword: "information", fullText: "Enhance information quality by ensuring data accuracy, timeliness, relevance, and security across the enterprise." }, { keyword: "service", fullText: "Improve customer and internal service delivery through streamlined workflows and intuitive user interfaces." }, { keyword: "Consultant", fullText: "Consultant: An external expert offering unbiased perspectives and specialized skills to solve specific organizational problems." }, { keyword: "Supporting", fullText: "Supporting Expert: An internal resource providing technical knowledge and guidance without managing the entire project." }, { keyword: "Agent", fullText: "Agent of Change: A catalyst for organizational transformation, actively managing the transition and addressing resistance from users." }] },
        { question: "The Systems Analyst & CASE", acronymHint: "", chapter: "ch1", answers: [{ keyword: "Problem", fullText: "A strategic problem solver who bridges the gap between complex business needs and technical solutions." }, { keyword: "Communicator", fullText: "An effective communicator who acts as an interpreter between non-technical stakeholders and software developers." }, { keyword: "ethics", fullText: "Maintains strong ethical standards to protect sensitive corporate data and ensure fair, unbiased system recommendations." }, { keyword: "Productivity", fullText: "CASE tools significantly increase analyst productivity by automating repetitive tasks like diagramming and code generation." }, { keyword: "communication", fullText: "CASE tools improve analyst-user communication through standardized, easy-to-understand visual models." }, { keyword: "development", fullText: "CASE tools accelerate the overall development lifecycle, allowing for faster time-to-market for critical business applications." }] },
        { question: "SDLC Phases", acronymHint: "IDADDTI", chapter: "ch1", answers: [{ keyword: "Identify", fullText: "Phase 1: Identify critical business problems, emerging opportunities, and core objectives that justify the project." }, { keyword: "Determine", fullText: "Phase 2: Determine comprehensive human information requirements through interviews, observation, and document analysis." }, { keyword: "Analyze", fullText: "Phase 3: Analyze system needs using data flow diagrams, data dictionaries, and process specifications." }, { keyword: "Design", fullText: "Phase 4: Design the recommended system architecture, database structure, and user interfaces." }, { keyword: "Develop", fullText: "Phase 5: Develop and document the software, writing custom code or integrating commercial-off-the-shelf solutions." }, { keyword: "Test", fullText: "Phase 6: Rigorously test the system for bugs and maintain it post-deployment to adapt to changing business needs." }, { keyword: "Implement", fullText: "Phase 7: Implement the system via direct cutover, parallel, or phased approaches, and formally evaluate its success." }] },
        { question: "Determining Requirements", acronymHint: "", chapter: "ch1", answers: [{ keyword: "Interviewing", fullText: "Conducting structured or unstructured interviews to extract deep qualitative insights from key stakeholders." }, { keyword: "Sampling", fullText: "Sampling hard data, such as forms and reports, to understand historical workflows and quantifiable metrics." }, { keyword: "Questionnaires", fullText: "Deploying standardized questionnaires to gather broad, quantitative data from a large, geographically dispersed user base." }, { keyword: "Observing", fullText: "Observing user behavior and the physical work environment to identify discrepancies between what is said and what is done." }, { keyword: "Prototyping", fullText: "Developing rapid, interactive prototypes to elicit immediate user feedback and clarify ambiguous requirements." }, { keyword: "Users", fullText: "Gaining a profound understanding of how users actually accomplish their daily work, identifying pain points and inefficiencies." }] },
        { question: "Agile Approach & Values", acronymHint: "", chapter: "ch1", answers: [{ keyword: "Values", fullText: "Embracing core values that prioritize individuals and interactions over rigid processes and heavy documentation." }, { keyword: "Principles", fullText: "Following principles that advocate for early, continuous delivery of valuable software to satisfy the customer." }, { keyword: "Core", fullText: "Implementing core practices like pair programming, test-driven development, and continuous integration." }, { keyword: "Communication", fullText: "Communication: Ensuring transparent, continuous dialogue between the development team and business stakeholders." }, { keyword: "Simplicity", fullText: "Simplicity: Focusing on the simplest possible solution that works, avoiding unnecessary features or over-engineering." }, { keyword: "Feedback", fullText: "Feedback: Adapting the product rapidly based on frequent, short iterative cycles and user testing." }, { keyword: "Courage", fullText: "Courage: Having the bravery to refactor code, throw away bad designs, and speak truthfully about project risks." }] },
        { question: "Cloud Computing & Services", acronymHint: "", chapter: "ch1", answers: [{ keyword: "Scalability", fullText: "Unmatched scalability, allowing organizations to instantly spin up or down computing resources based on demand." }, { keyword: "Cost", fullText: "High cost-effectiveness through a pay-as-you-go model, eliminating the need for massive upfront capital expenditures." }, { keyword: "Accessibility", fullText: "Universal accessibility, enabling employees to securely access enterprise systems from any location or device." }, { keyword: "Reliability", fullText: "Enhanced reliability and disaster recovery through redundant, globally distributed data centers." }, { keyword: "SaaS", fullText: "Software as a Service (SaaS): Fully functional applications hosted and managed entirely by the vendor (e.g., Salesforce)." }, { keyword: "PaaS", fullText: "Platform as a Service (PaaS): Provides a framework and environment for developers to build applications without managing infrastructure." }, { keyword: "IaaS", fullText: "Infrastructure as a Service (IaaS): Fundamental computing resources like virtual machines, storage, and networking (e.g., AWS EC2)." }] },
        { question: "Cloud Deployment Models", acronymHint: "PCPH", chapter: "ch1", answers: [{ keyword: "Public", fullText: "Public Cloud: Infrastructure is owned by a third-party provider and shared among multiple tenants over the public internet." }, { keyword: "Community", fullText: "Community Cloud: Infrastructure is shared by several organizations with common concerns, such as compliance or security requirements." }, { keyword: "Private", fullText: "Private Cloud: Cloud infrastructure operated solely for a single organization, offering maximum control and security." }, { keyword: "Hybrid", fullText: "Hybrid Cloud: A strategic combination of public and private clouds, allowing data and applications to be shared between them." }] }
    ],
    ch2: [
        { question: "3 Main Forces Shaping Organizations", acronymHint: "", chapter: "ch2", answers: [{ keyword: "management", fullText: "Levels of Management: How strategic, managerial, and operational tiers influence decision-making and information flow." }, { keyword: "design", fullText: "Organizational Design: The structural boundaries, departments, and interconnected systems that define how the business operates." }, { keyword: "cultures", fullText: "Organizational Cultures: The shared values, beliefs, and unwritten rules that dictate employee behavior and system adoption." }] },
        { question: "3 Management Levels", acronymHint: "", chapter: "ch2", answers: [{ keyword: "Operations", fullText: "Operations Control: Focuses on daily execution, requiring detailed, real-time data to monitor routine transactions." }, { keyword: "Managerial", fullText: "Managerial Planning (Middle): Requires summarized historical data to allocate resources and measure performance against goals." }, { keyword: "Strategic", fullText: "Strategic Management: Relies on highly summarized, external, and predictive data to formulate long-term corporate direction." }] },
        { question: "E-R Diagrams: Entities & Relationships", acronymHint: "", chapter: "ch2", answers: [{ keyword: "Fundamental", fullText: "Fundamental Entity: A real-world person, place, or thing that the system needs to store data about (e.g., Customer)." }, { keyword: "Associative", fullText: "Associative Entity: Created to resolve a many-to-many relationship, containing attributes of both connecting entities." }, { keyword: "Attributive", fullText: "Attributive Entity: Used to represent repeating groups of data that belong to a fundamental entity (e.g., multiple phone numbers)." }, { keyword: "one-to-one", fullText: "One-to-One Relationship (1:1): A single record in Entity A corresponds to exactly one record in Entity B." }, { keyword: "one-to-many", fullText: "One-to-Many Relationship (1:M): A single record in Entity A can relate to multiple records in Entity B." }, { keyword: "many-to-many", fullText: "Many-to-Many Relationship (M:N): Multiple records in Entity A can relate to multiple records in Entity B." }] },
        { question: "4 Elements of Use Case Modeling", acronymHint: "", chapter: "ch2", answers: [{ keyword: "Actor", fullText: "Actor: An external entity (person, system, or device) that interacts directly with the system to achieve a goal." }, { keyword: "symbols", fullText: "Use Case Symbols: Ovals representing the specific functions, processes, or actions the system provides to the actors." }, { keyword: "Connecting", fullText: "Connecting Lines: Solid lines that indicate communication or interaction between an actor and a specific use case." }, { keyword: "scope", fullText: "System Boundary: A rectangular box defining the system's scope, clarifying what is inside the system vs. the external environment." }] }
    ],
    ch3: [
        { question: "3 Elements of Feasibility", acronymHint: "TEO", chapter: "ch3", answers: [{ keyword: "Technical", fullText: "Technical Feasibility: Assessing if the required technology exists and if the organization has the IT expertise to build/maintain it." }, { keyword: "Economic", fullText: "Economic Feasibility: Performing a rigorous cost-benefit analysis to ensure the project's financial return justifies the investment." }, { keyword: "Operational", fullText: "Operational Feasibility: Evaluating if the proposed system will actually be used by employees and if it aligns with the business culture." }] },
        { question: "5 Steps in Choosing Hardware & Software", acronymHint: "", chapter: "ch3", answers: [{ keyword: "Inventory", fullText: "Inventory Computer Hardware: Document all existing physical assets, their age, capabilities, and depreciation status." }, { keyword: "Estimate", fullText: "Estimate Workloads: Project future system demands, including data storage needs, concurrent users, and processing volume." }, { keyword: "Evaluate", fullText: "Evaluate Alternatives: Compare available hardware and software against performance benchmarks, security needs, and budget constraints." }, { keyword: "vendor", fullText: "Choose the Vendor: Select a vendor based on technical support, financial stability, training options, and warranty terms." }, { keyword: "Acquire", fullText: "Acquire Equipment: Decide whether to purchase, lease, or rent the equipment based on financial strategy and obsolescence risk." }] },
        { question: "3 Software Alternatives", acronymHint: "", chapter: "ch3", answers: [{ keyword: "custom", fullText: "Custom Software: Built completely from scratch to meet highly unique, strategic business requirements that offer a competitive edge." }, { keyword: "COTS", fullText: "Purchased COTS: Commercial Off-The-Shelf software that is bought and installed, offering faster deployment but less customization." }, { keyword: "SaaS", fullText: "Software as a Service (SaaS): Cloud-based subscription software, minimizing local IT maintenance but requiring reliable internet." }] },
        { question: "4 EVM Measures (Earned Value Management)", acronymHint: "", chapter: "ch3", answers: [{ keyword: "BAC", fullText: "Budget at Completion (BAC): The total estimated cost of the project when it is fully completed." }, { keyword: "PV", fullText: "Planned Value (PV): The authorized budget assigned to the work that was scheduled to be completed by a specific date." }, { keyword: "AC", fullText: "Actual Cost (AC): The real, realized cost incurred for the work actually performed up to a specific date." }, { keyword: "EV", fullText: "Earned Value (EV): The quantified value of the work actually completed to date, expressed in terms of the approved budget." }] }
    ],
    ch4: [
        { question: "3 Key Interactive Methods", acronymHint: "", chapter: "ch4", answers: [{ keyword: "Interviewing", fullText: "Interviewing: Direct, one-on-one dialogue with stakeholders to uncover deep qualitative insights, personal opinions, and complex political realities." }, { keyword: "JAD", fullText: "Joint Application Design (JAD): Highly structured, collaborative workshop sessions involving users, analysts, and executives to rapidly define requirements." }, { keyword: "Questionnaires", fullText: "Questionnaires: Standardized surveys distributed to a broad audience to gather statistically significant, quantifiable data efficiently." }] },
        { question: "5 Steps in Interview Preparation", acronymHint: "", chapter: "ch4", answers: [{ keyword: "Read", fullText: "Read Background Material: Thoroughly study the organization's history, jargon, current systems, and the interviewee's role before meeting." }, { keyword: "Objectives", fullText: "Establish Interview Objectives: Define precisely what critical information or decisions need to be extracted from this specific conversation." }, { keyword: "Decide", fullText: "Decide Whom to Interview: Carefully select individuals with the right authority, knowledge, and diverse perspectives across the organization." }, { keyword: "Prepare", fullText: "Prepare the Interviewee: Contact them in advance to explain the purpose, expected duration, and topics to allow them time to gather thoughts." }, { keyword: "Questions", fullText: "Structure Questions: Carefully design a mix of open-ended, closed-ended, and probing questions arranged logically (e.g., funnel or pyramid structure)." }] },
        { question: "JAD Benefits", acronymHint: "", chapter: "ch4", answers: [{ keyword: "Time", fullText: "Saves Time: Compresses months of iterative interviews into a few intensive, highly focused days of collaborative workshops." }, { keyword: "Development", fullText: "Rapid Development: Speeds up the entire SDLC by achieving immediate consensus on system requirements directly from key decision-makers." }, { keyword: "Ownership", fullText: "Improved Ownership: Fosters a strong sense of user investment and buy-in since users actively help design the solution." }, { keyword: "Creative", fullText: "Creative Idea Production: The group dynamic sparks brainstorming and innovative solutions that might not emerge in isolated interviews." }] },
        { question: "Questionnaire Uses", acronymHint: "", chapter: "ch4", answers: [{ keyword: "Geographically", fullText: "Geographically Dispersed: Ideal for gathering requirements from employees spread across multiple global offices where travel is impractical." }, { keyword: "Large", fullText: "Large Audiences: The most cost-effective way to gather feedback from hundreds or thousands of users simultaneously." }, { keyword: "Anonymous", fullText: "Need for Anonymity: Allows users to honestly report system flaws or organizational issues without fear of political backlash." }] }
    ],
    ch5: [
        { question: "3 Unobtrusive Methods", acronymHint: "", chapter: "ch5", answers: [{ keyword: "Sampling", fullText: "Sampling: The systematic process of selecting representative documents or data points to analyze without reading every single file." }, { keyword: "Investigation", fullText: "Investigation: Deeply examining hard data like financial reports, procedure manuals, and system logs to uncover hidden operational truths." }, { keyword: "Observation", fullText: "Observation: Silently watching decision-makers and end-users in their natural work environment to see how tasks are genuinely performed." }] },
        { question: "4 Steps of Sampling", acronymHint: "", chapter: "ch5", answers: [{ keyword: "Data", fullText: "Determine Data to Collect: Clearly define what specific variables or metrics you are looking for in the documents (e.g., error rates on invoices)." }, { keyword: "Population", fullText: "Determine Population: Identify the total, overarching set of all possible documents or events that could theoretically be examined." }, { keyword: "Type", fullText: "Choose Sample Type: Decide between convenience, purposive, simple random, or complex random sampling based on research rigor required." }, { keyword: "Size", fullText: "Decide Sample Size: Calculate the exact number of items needed to achieve a statistically valid and confident conclusion." }] },
        { question: "Types of Sampling", acronymHint: "", chapter: "ch5", answers: [{ keyword: "Convenience", fullText: "Convenience Sample: Unrestricted, non-probability sampling where items are chosen simply because they are the easiest to access." }, { keyword: "Purposive", fullText: "Purposive Sample: The analyst uses their expert judgment to deliberately select specific documents that represent 'typical' or 'extreme' cases." }, { keyword: "Simple", fullText: "Simple Random Sample: A strict probability method where every single document in the population has an absolutely equal chance of being selected." }, { keyword: "Complex", fullText: "Complex Random Sample: Advanced probability methods, like stratified or cluster sampling, used to capture specific sub-groups accurately." }] },
        { question: "STROBE Elements", acronymHint: "", chapter: "ch5", answers: [{ keyword: "Location", fullText: "Office Location: Who has the corner office? Physical location indicates power, accessibility, and communication flow within the company." }, { keyword: "Desk", fullText: "Desk Placement: A desk facing the door suggests a welcoming, open-door policy, while a desk facing the wall indicates a focus on deep, isolated work." }, { keyword: "Equipment", fullText: "Stationary Equipment: The presence of advanced computers, filing cabinets, or specialized tools reveals what information is stored and processed locally." }, { keyword: "Props", fullText: "Props: Personal items like calculators, manuals, or industry awards hint at the decision-maker's daily tasks and professional priorities." }, { keyword: "Lighting", fullText: "Lighting and Color: The ambiance of the workspace affects employee mood, productivity, and how information is physically gathered." }, { keyword: "Clothing", fullText: "Clothing: Attire (formal vs. casual) demonstrates the organizational culture, authoritative structure, and level of external client interaction." }] }
    ],
    ch6: [
        { question: "4 Kinds of Prototypes", acronymHint: "", chapter: "ch6", answers: [{ keyword: "Patched-Up", fullText: "Patched-Up Prototype: A working model that has all necessary features but is inefficiently stitched together, intended only as a temporary proof-of-concept." }, { keyword: "Nonoperational", fullText: "Nonoperational Prototype: A non-functioning scale model or wireframe used solely to test the visual design and layout of the user interface." }, { keyword: "First-of-a-Series", fullText: "First-of-a-Series Prototype: A fully functional pilot system deployed at a single location to test its viability before a massive enterprise-wide rollout." }, { keyword: "Selected", fullText: "Selected Features Prototype: An operational model that includes only the most critical, core features, allowing users to test basic workflows early." }] },
        { question: "Guidelines for Developing a Prototype", acronymHint: "", chapter: "ch6", answers: [{ keyword: "Manageable", fullText: "Work in Manageable Modules: Break the system down into small, distinct components so the prototype can be built and tested incrementally." }, { keyword: "Rapidly", fullText: "Build the Prototype Rapidly: Speed is essential; use rapid application development (RAD) tools to get a tangible model in front of users quickly." }, { keyword: "Modify", fullText: "Modify the Prototype: Expect and embrace constant changes based on immediate user feedback; the prototype is meant to evolve rapidly." }, { keyword: "Stress", fullText: "Stress the User Interface: Focus heavily on the UI, as users will judge the entire system's usability based on how easily they can interact with the prototype." }] },
        { question: "Agile Core Practices", acronymHint: "", chapter: "ch6", answers: [{ keyword: "Release", fullText: "Short Releases: Deliver working, tested software to the customer in very tight iterations (usually 1 to 4 weeks) to gather rapid feedback." }, { keyword: "Week", fullText: "40-Hour Work Week: Maintain a sustainable, humane pace of development; chronic overtime leads to burnout, low morale, and poor code quality." }, { keyword: "Onsite", fullText: "Onsite Customer: A dedicated business expert must be physically or virtually present with the team daily to answer questions and clarify requirements instantly." }, { keyword: "Pair", fullText: "Pair Programming: Two developers work side-by-side at one computer—one typing, one reviewing—resulting in higher quality code and instant knowledge sharing." }] },
        { question: "Scrum Roles", acronymHint: "", chapter: "ch6", answers: [{ keyword: "Master", fullText: "Scrum Master: A servant-leader who fiercely protects the team from external distractions and works to remove any blockers impeding their progress." }, { keyword: "Owner", fullText: "Product Owner: The single voice of the customer; responsible for managing the product backlog, prioritizing features, and maximizing ROI." }, { keyword: "Team", fullText: "Scrum Team: A cross-functional, highly self-organizing group of 5-9 members who actually write, test, and deliver the software." }] }
    ]
};

const chapterColors = { ch1: '#7c5cfc', ch2: '#22d3ee', ch3: '#f472b6', ch4: '#fbbf24', ch5: '#34d399', ch6: '#a78bfa' };
const chapterNames  = { ch1: 'Chapter 1', ch2: 'Chapter 2', ch3: 'Chapter 3', ch4: 'Chapter 4', ch5: 'Chapter 5', ch6: 'Chapter 6' };

let topicQueue = [];
let masteredCount = 0;
let totalTopics = 0;
let currentTopic = null;

// ── UI REFS ──────────────────────────────────────────
const screenSelect  = document.getElementById('screen-select');
const screenStudy   = document.getElementById('screen-study');

const chapterCheckboxes = document.querySelectorAll('.chapter-checkbox');
const btnStartSession   = document.getElementById('btn-start-session');
const btnSelectAll      = document.getElementById('btn-select-all');
const btnDeselectAll    = document.getElementById('btn-deselect-all');

const questionTitle  = document.getElementById('question-title');
const questionHint   = document.getElementById('question-hint');
const phaseBadge     = document.getElementById('phase-badge');
const encodingList   = document.getElementById('encoding-list');
const feedbackList   = document.getElementById('feedback-list');
const masteryScore   = document.getElementById('mastery-score');
const masteryRing    = document.getElementById('mastery-ring');
const feynmanInput   = document.getElementById('feynman-input');
const aiLoading      = document.getElementById('ai-loading');
const evalResults    = document.getElementById('evaluation-results');

const phaseEncoding     = document.getElementById('phase-encoding');
const phaseRecall       = document.getElementById('phase-recall');
const phaseMetacognition = document.getElementById('phase-metacognition');

const ringFill       = document.getElementById('ring-fill');
const ringMastered   = document.getElementById('ring-mastered');
const ringTotal      = document.getElementById('ring-total');
const completionOverlay = document.getElementById('completion-overlay');
const activeChapterTagsEl = document.getElementById('active-chapter-tags');

const phaseIndicatorDots = document.querySelectorAll('.phase-dot');

const btnStartRecall  = document.getElementById('btn-start-recall');
const btnEvaluate     = document.getElementById('btn-evaluate');
const btnProceedMeta  = document.getElementById('btn-proceed-meta');
const btnMetaHard     = document.getElementById('btn-meta-hard');
const btnMetaEasy     = document.getElementById('btn-meta-easy');
const btnRestart      = document.getElementById('btn-restart');
const btnChangeChapter = document.getElementById('btn-change-chapter');
const btnBack         = document.getElementById('btn-back-to-select');

// Settings
const settingsModal   = document.getElementById('settings-modal');
const btnSettings     = document.getElementById('btn-settings');
const btnCloseSettings = document.getElementById('btn-close-settings');
const btnCancelSettings = document.getElementById('btn-cancel-settings');
const btnSaveSettings = document.getElementById('btn-save-settings');
const apiKeyInput     = document.getElementById('api-key-input');

// ── API TRACKER ──────────────────────────────────────
function initApiTracker() {
    const todayStr = new Date().toLocaleDateString();
    if (localStorage.getItem('api_request_date') !== todayStr) {
        localStorage.setItem('api_request_date', todayStr);
        localStorage.setItem('api_request_count', '0');
    }
    const count = localStorage.getItem('api_request_count') || '0';
    document.getElementById('stat-requests').textContent = count;
    document.getElementById('sidebar-stat-requests').textContent = count;
}

function incrementApiCount() {
    let count = parseInt(localStorage.getItem('api_request_count') || '0') + 1;
    localStorage.setItem('api_request_count', count.toString());
    document.getElementById('stat-requests').textContent = count;
    document.getElementById('sidebar-stat-requests').textContent = count;
}

// ── CHAPTER SELECTION SCREEN ─────────────────────────
chapterCheckboxes.forEach(cb => {
    cb.addEventListener('change', () => {
        const anyChecked = [...chapterCheckboxes].some(c => c.checked);
        btnStartSession.disabled = !anyChecked;
    });
});

btnSelectAll.addEventListener('click', () => {
    chapterCheckboxes.forEach(cb => cb.checked = true);
    btnStartSession.disabled = false;
});

btnDeselectAll.addEventListener('click', () => {
    chapterCheckboxes.forEach(cb => cb.checked = false);
    btnStartSession.disabled = true;
});

btnStartSession.addEventListener('click', () => {
    const selected = [...chapterCheckboxes].filter(c => c.checked).map(c => c.value);
    if (!selected.length) return;
    startSession(selected);
});

// ── SESSION INIT ─────────────────────────────────────
function startSession(selectedChapters) {
    // Build queue from selected chapters
    let combined = [];
    selectedChapters.forEach(ch => {
        if (studyTopics[ch]) combined = combined.concat(JSON.parse(JSON.stringify(studyTopics[ch])));
    });

    // Shuffle
    for (let i = combined.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [combined[i], combined[j]] = [combined[j], combined[i]];
    }

    topicQueue = combined;
    masteredCount = 0;
    totalTopics = combined.length;

    // Build sidebar chapter tags
    activeChapterTagsEl.innerHTML = '';
    selectedChapters.forEach(ch => {
        const div = document.createElement('div');
        div.className = 'sidebar-chapter-tag';
        div.innerHTML = `<div class="sidebar-chapter-dot" style="background:${chapterColors[ch]}"></div>${chapterNames[ch]}`;
        activeChapterTagsEl.appendChild(div);
    });

    ringMastered.textContent = '0';
    ringTotal.textContent = totalTopics;
    updateProgressRing();

    // Switch screens
    screenSelect.style.display = 'none';
    screenStudy.style.display = 'flex';
    completionOverlay.classList.add('hidden');

    loadNextTopic();
}

// ── TOPIC LOADING ─────────────────────────────────────
function loadNextTopic() {
    if (topicQueue.length === 0) {
        completionOverlay.classList.remove('hidden');
        return;
    }

    currentTopic = topicQueue.shift();
    questionTitle.textContent = currentTopic.question;
    questionHint.textContent = currentTopic.acronymHint ? `Hint: ${currentTopic.acronymHint}` : '';

    // Color phase chip by chapter
    phaseBadge.style.color = chapterColors[currentTopic.chapter] || '';
    phaseBadge.style.borderColor = chapterColors[currentTopic.chapter] || '';
    phaseBadge.style.background = (chapterColors[currentTopic.chapter] || '#7c5cfc') + '22';

    startPhase1();
}

// ── PHASE 1: ENCODING ────────────────────────────────
function startPhase1() {
    phaseBadge.textContent = 'Phase 1: Encoding';
    setPhaseIndicator(0);

    phaseEncoding.classList.remove('hidden');
    phaseRecall.classList.add('hidden');
    phaseMetacognition.classList.add('hidden');

    encodingList.innerHTML = '';
    currentTopic.answers.forEach((ans, i) => {
        const div = document.createElement('div');
        div.className = 'encoding-item';
        div.style.animationDelay = `${i * 0.07}s`;
        div.innerHTML = `<span class="encoding-item-num">${i + 1}</span><span>${ans.fullText}</span>`;
        encodingList.appendChild(div);
    });
}

btnStartRecall.addEventListener('click', startPhase2);

// ── PHASE 2: RECALL ──────────────────────────────────
function startPhase2() {
    phaseBadge.textContent = 'Phase 2: Feynman Recall';
    setPhaseIndicator(1);

    phaseEncoding.classList.add('hidden');
    phaseRecall.classList.remove('hidden');
    phaseMetacognition.classList.add('hidden');

    feynmanInput.value = '';
    feynmanInput.disabled = false;
    btnEvaluate.disabled = false;
    aiLoading.classList.add('hidden');
    evalResults.classList.add('hidden');
    feedbackList.innerHTML = '';
    feynmanInput.focus();
}

btnEvaluate.addEventListener('click', async () => {
    const text = feynmanInput.value.trim();
    if (text.length < 5) { alert('Please write a longer explanation!'); return; }

    const apiKey = localStorage.getItem('gemini_api_key');
    if (!apiKey) {
        alert('Click the ⚙️ Settings button and enter your free Gemini API Key first!');
        settingsModal.classList.remove('hidden');
        return;
    }

    incrementApiCount();

    feynmanInput.disabled = true;
    btnEvaluate.disabled = true;
    aiLoading.classList.remove('hidden');
    evalResults.classList.add('hidden');

    const expectedAnswers = currentTopic.answers.map(a => a.fullText).join(', ');
    const promptText = `You are a strict grading assistant evaluating a student studying Systems Analysis and Design.
Topic: "${currentTopic.question}".
Expected concepts: ${expectedAnswers}.
Student's explanation: "${text}"

Rate comprehension 0-100. Return ONLY pure JSON (no markdown):
{
  "score": <number>,
  "feedback": [
    {"type":"success","message":"..."},
    {"type":"missed","message":"..."}
  ]
}`;

    try {
        const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: promptText }] }],
                generationConfig: { temperature: 0.2 }
            })
        });

        if (!res.ok) {
            let errMsg = `API Error ${res.status}`;
            try { const e = await res.json(); if (e.error?.message) errMsg = e.error.message; } catch (_) {}
            throw new Error(errMsg);
        }

        const data = await res.json();
        let aiText = data.candidates[0].content.parts[0].text.replace(/```json/g, '').replace(/```/g, '').trim();
        const result = JSON.parse(aiText);

        // Animate mastery ring
        const circumference = 157.08;
        const offset = circumference - (result.score / 100) * circumference;
        masteryRing.style.strokeDashoffset = offset;
        masteryScore.textContent = `${result.score}%`;

        // Color ring by score
        const ringColor = result.score >= 75 ? '#10b981' : result.score >= 50 ? '#f59e0b' : '#ef4444';
        masteryRing.style.stroke = ringColor;
        masteryScore.style.color = ringColor;

        feedbackList.innerHTML = '';
        result.feedback.forEach(item => {
            const li = document.createElement('li');
            li.className = `feedback-item ${item.type === 'success' ? 'feedback-success' : 'feedback-missed'}`;
            li.innerHTML = `${item.type === 'success' ? '✅' : '❌'} ${item.message}`;
            feedbackList.appendChild(li);
        });

    } catch (err) {
        console.error(err);
        alert(`Evaluation Failed:\n${err.message}`);
        feynmanInput.disabled = false;
        btnEvaluate.disabled = false;
        aiLoading.classList.add('hidden');
        return;
    }

    aiLoading.classList.add('hidden');
    evalResults.classList.remove('hidden');
});

btnProceedMeta.addEventListener('click', startPhase3);

// ── PHASE 3: METACOGNITION ────────────────────────────
function startPhase3() {
    phaseBadge.textContent = 'Phase 3: Reflect';
    setPhaseIndicator(2);

    phaseEncoding.classList.add('hidden');
    phaseRecall.classList.add('hidden');
    phaseMetacognition.classList.remove('hidden');
}

btnMetaHard.addEventListener('click', () => {
    topicQueue.push(currentTopic); // re-queue
    loadNextTopic();
});

btnMetaEasy.addEventListener('click', () => {
    masteredCount++;
    ringMastered.textContent = masteredCount;
    updateProgressRing();
    loadNextTopic();
});

// ── PROGRESS RING ─────────────────────────────────────
function updateProgressRing() {
    const circumference = 207.35;
    const pct = totalTopics > 0 ? masteredCount / totalTopics : 0;
    ringFill.style.strokeDashoffset = circumference - pct * circumference;
}

// ── PHASE INDICATOR ───────────────────────────────────
function setPhaseIndicator(activeIndex) {
    phaseIndicatorDots.forEach((dot, i) => {
        dot.classList.toggle('active', i === activeIndex);
    });
}

// ── NAVIGATION ────────────────────────────────────────
btnBack.addEventListener('click', goToSelect);
btnChangeChapter.addEventListener('click', goToSelect);
btnRestart.addEventListener('click', () => {
    completionOverlay.classList.add('hidden');
    const selected = [...chapterCheckboxes].filter(c => c.checked).map(c => c.value);
    startSession(selected);
});

function goToSelect() {
    screenStudy.style.display = 'none';
    screenSelect.style.display = 'flex';
    completionOverlay.classList.add('hidden');
}

// ── SETTINGS ──────────────────────────────────────────
btnSettings.addEventListener('click', () => {
    apiKeyInput.value = localStorage.getItem('gemini_api_key') || '';
    settingsModal.classList.remove('hidden');
});

[btnCloseSettings, btnCancelSettings].forEach(btn => {
    btn?.addEventListener('click', () => settingsModal.classList.add('hidden'));
});

btnSaveSettings.addEventListener('click', () => {
    localStorage.setItem('gemini_api_key', apiKeyInput.value.trim());
    settingsModal.classList.add('hidden');
});

// ── INIT ──────────────────────────────────────────────
initApiTracker();
