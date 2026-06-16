// =====================================================
//  SAD Master — app.js
// =====================================================

const studyTopics = {
    ch1: [
        { question: "SAD Fundamentals", acronymHint: "", chapter: "ch1", answers: [{ keyword: "processes", fullText: "Improve business processes" }, { keyword: "information", fullText: "Improve information quality" }, { keyword: "service", fullText: "Improve service" }, { keyword: "Consultant", fullText: "Consultant (role)" }, { keyword: "Supporting", fullText: "Supporting Expert (role)" }, { keyword: "Agent", fullText: "Agent of Change (role)" }] },
        { question: "The Systems Analyst & CASE", acronymHint: "", chapter: "ch1", answers: [{ keyword: "Problem", fullText: "Problem solver" }, { keyword: "Communicator", fullText: "Communicator" }, { keyword: "ethics", fullText: "Strong ethics" }, { keyword: "Productivity", fullText: "Increase Analyst Productivity (CASE)" }, { keyword: "communication", fullText: "Improve analyst-user communication (CASE)" }, { keyword: "development", fullText: "Accelerate development (CASE)" }] },
        { question: "SDLC Phases", acronymHint: "IDADDTI", chapter: "ch1", answers: [{ keyword: "Identify", fullText: "Identify problems/opportunities" }, { keyword: "Determine", fullText: "Determine human information requirements" }, { keyword: "Analyze", fullText: "Analyze system needs" }, { keyword: "Design", fullText: "Design the system" }, { keyword: "Develop", fullText: "Develop software" }, { keyword: "Test", fullText: "Test and maintain" }, { keyword: "Implement", fullText: "Implement and evaluate" }] },
        { question: "Determining Requirements", acronymHint: "", chapter: "ch1", answers: [{ keyword: "Interviewing", fullText: "Interviewing" }, { keyword: "Sampling", fullText: "Sampling hard data" }, { keyword: "Questionnaires", fullText: "Questionnaires" }, { keyword: "Observing", fullText: "Observing behavior" }, { keyword: "Prototyping", fullText: "Prototyping" }, { keyword: "Users", fullText: "Understand how users accomplish work" }] },
        { question: "Agile Approach & Values", acronymHint: "", chapter: "ch1", answers: [{ keyword: "Values", fullText: "Values" }, { keyword: "Principles", fullText: "Principles" }, { keyword: "Core", fullText: "Core practices" }, { keyword: "Communication", fullText: "Communication (value)" }, { keyword: "Simplicity", fullText: "Simplicity (value)" }, { keyword: "Feedback", fullText: "Feedback (value)" }, { keyword: "Courage", fullText: "Courage (value)" }] },
        { question: "Cloud Computing & Services", acronymHint: "", chapter: "ch1", answers: [{ keyword: "Scalability", fullText: "Scalability" }, { keyword: "Cost", fullText: "Cost-effectiveness" }, { keyword: "Accessibility", fullText: "Accessibility" }, { keyword: "Reliability", fullText: "Reliability" }, { keyword: "SaaS", fullText: "SaaS (Software as a Service)" }, { keyword: "PaaS", fullText: "PaaS (Platform as a Service)" }, { keyword: "IaaS", fullText: "IaaS (Infrastructure as a Service)" }] },
        { question: "Cloud Deployment Models", acronymHint: "PCPH", chapter: "ch1", answers: [{ keyword: "Public", fullText: "Public" }, { keyword: "Community", fullText: "Community" }, { keyword: "Private", fullText: "Private" }, { keyword: "Hybrid", fullText: "Hybrid" }] }
    ],
    ch2: [
        { question: "3 Main Forces Shaping Organizations", acronymHint: "", chapter: "ch2", answers: [{ keyword: "management", fullText: "Levels of management" }, { keyword: "design", fullText: "Design of organizations" }, { keyword: "cultures", fullText: "Organizational cultures" }] },
        { question: "3 Management Levels", acronymHint: "", chapter: "ch2", answers: [{ keyword: "Operations", fullText: "Operations control" }, { keyword: "Managerial", fullText: "Managerial planning and control (Middle)" }, { keyword: "Strategic", fullText: "Strategic management" }] },
        { question: "E-R Diagrams: Entities & Relationships", acronymHint: "", chapter: "ch2", answers: [{ keyword: "Fundamental", fullText: "Fundamental entity" }, { keyword: "Associative", fullText: "Associative entity" }, { keyword: "Attributive", fullText: "Attributive entity" }, { keyword: "one-to-one", fullText: "One-to-one relationship" }, { keyword: "one-to-many", fullText: "One-to-many relationship" }, { keyword: "many-to-many", fullText: "Many-to-many relationship" }] },
        { question: "4 Elements of Use Case Modeling", acronymHint: "", chapter: "ch2", answers: [{ keyword: "Actor", fullText: "Actor" }, { keyword: "symbols", fullText: "Use case symbols" }, { keyword: "Connecting", fullText: "Connecting lines" }, { keyword: "scope", fullText: "System scope / boundaries" }] }
    ],
    ch3: [
        { question: "3 Elements of Feasibility", acronymHint: "TEO", chapter: "ch3", answers: [{ keyword: "Technical", fullText: "Technical feasibility" }, { keyword: "Economic", fullText: "Economic feasibility" }, { keyword: "Operational", fullText: "Operational feasibility" }] },
        { question: "5 Steps in Choosing Hardware & Software", acronymHint: "", chapter: "ch3", answers: [{ keyword: "Inventory", fullText: "Inventory computer hardware" }, { keyword: "Estimate", fullText: "Estimate workloads" }, { keyword: "Evaluate", fullText: "Evaluate available hardware/software" }, { keyword: "vendor", fullText: "Choose the vendor" }, { keyword: "Acquire", fullText: "Acquire the equipment" }] },
        { question: "3 Software Alternatives", acronymHint: "", chapter: "ch3", answers: [{ keyword: "custom", fullText: "Created custom software" }, { keyword: "COTS", fullText: "Purchased COTS (commercial off-the-shelf)" }, { keyword: "SaaS", fullText: "Software as a service (SaaS)" }] },
        { question: "4 EVM Measures (Earned Value Management)", acronymHint: "", chapter: "ch3", answers: [{ keyword: "BAC", fullText: "Budget at completion (BAC)" }, { keyword: "PV", fullText: "Planned value (PV)" }, { keyword: "AC", fullText: "Actual Cost (AC)" }, { keyword: "EV", fullText: "Earned value (EV)" }] }
    ]
};

const chapterColors = { ch1: '#7c5cfc', ch2: '#22d3ee', ch3: '#f472b6' };
const chapterNames  = { ch1: 'Chapter 1', ch2: 'Chapter 2', ch3: 'Chapter 3' };

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
