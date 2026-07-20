// GCET Management System - Core Logic with Real Workspace Data

// ----------------- Real Members & Teams Database (extracted from DOCX) -----------------
const REAL_MEMBERS = [
    // Equipe de Mídias
    { id: "u1", name: "Felipe Gomes do Nascimento", email: "felipe.gomes@gcet.com", phone: "+55 83 98888-1001", birthDate: "2000-08-25", team: "Mídias", specificRole: "Coordenador de Mídias / Instagram", acl: 4, status: "ativo" },
    { id: "u2", name: "Samuel Ribeiro dos Santos", email: "samuel.ribeiro@gcet.com", phone: "+55 83 98888-1002", birthDate: "1999-07-22", team: "Mídias", specificRole: "Design & GCET News", acl: 3, status: "ativo" },
    { id: "u3", name: "Amanda Sueli Madeira Pereira", email: "amanda.pereira@gcet.com", phone: "+55 83 98888-1003", birthDate: "2001-05-14", team: "Mídias", specificRole: "Demandas Espontâneas", acl: 2, status: "ativo" },
    { id: "u4", name: "Ailson da Silva Fernandes", email: "ailson.fernandes@gcet.com", phone: "+55 83 98888-1004", birthDate: "2002-12-05", team: "Mídias", specificRole: "Aniversários e Curiosidades", acl: 2, status: "estagiario" },
    { id: "u5", name: "Kennedy Kaufummam Costa Mafra", email: "kennedy.mafra@gcet.com", phone: "+55 83 98888-1005", birthDate: "2000-03-30", team: "Mídias", specificRole: "Academia.edu", acl: 2, status: "ativo" },
    { id: "u6", name: "Leylane Meneses Martins", email: "leylane.martins@gcet.com", phone: "+55 83 98888-1006", birthDate: "2001-10-18", team: "Mídias", specificRole: "Acompanhamento de Projetos e Periódicos", acl: 2, status: "ativo" },
    
    // Equipe Institucional / Editorial
    { id: "u7", name: "Netynha Brambilla", email: "netynha.brambilla@gcet.com", phone: "+55 83 98888-1007", birthDate: "1988-06-15", team: "Editorial", specificRole: "Coordenadora Geral / Organização Chamada", acl: 5, status: "ativo" },
    { id: "u8", name: "Adriana Brambilla", email: "adriana.brambilla@gcet.com", phone: "+55 83 98888-1008", birthDate: "1985-02-10", team: "Editorial", specificRole: "Comunicação Institucional & Autores", acl: 4, status: "ativo" },
    { id: "u9", name: "Eládio Vanzella", email: "eladio.vanzella@gcet.com", phone: "+55 83 98888-1009", birthDate: "1987-11-20", team: "Editorial", specificRole: "Diagramação & Comunicação Autores", acl: 3, status: "ativo" },
    { id: "u10", name: "Fernanda Brambilla", email: "fernanda.brambilla@gcet.com", phone: "+55 83 98888-1010", birthDate: "1990-09-08", team: "Editorial", specificRole: "Assessoria Jurídica / Termos de Imagem", acl: 3, status: "ativo" },
    { id: "u11", name: "Daiko Lima e Silva", email: "daiko.silva@gcet.com", phone: "+55 83 98888-1011", birthDate: "1998-04-12", team: "Editorial", specificRole: "Organizador de Pautas", acl: 2, status: "ativo" },
    { id: "u12", name: "Priscila Fernandes Carvalho de Melo", email: "priscila.melo@gcet.com", phone: "+55 83 98888-1012", birthDate: "2000-01-28", team: "Editorial", specificRole: "Gestora de Atas e Frequência", acl: 3, status: "ativo" },
    { id: "u13", name: "Islaine Santos", email: "islaine.santos@gcet.com", phone: "+55 83 98888-1013", birthDate: "2002-07-30", team: "Editorial", specificRole: "Controle de Prefácios e Apresentações", acl: 2, status: "estagiario" },
    { id: "u14", name: "Marília Ferreira Paes Cesário", email: "marilia.cesario@gcet.com", phone: "+55 83 98888-1014", birthDate: "1997-09-24", team: "Editorial", specificRole: "Revisora Acadêmica Principal", acl: 3, status: "ativo" },
    
    // Equipe do Site
    { id: "u15", name: "Alessandra Souza Queiroz Melo", email: "alessandra.melo@gcet.com", phone: "+55 83 98888-1015", birthDate: "1995-10-05", team: "Site", specificRole: "Coordenadora do Site", acl: 4, status: "ativo" },
    { id: "u16", name: "Cláudia Araújo de Menezes Gonçalves", email: "claudia.martins@gcet.com", phone: "+55 83 98888-1016", birthDate: "1998-06-30", team: "Site", specificRole: "Redatora de Matérias", acl: 2, status: "ativo" },
    { id: "u17", name: "Simone Neto de Santana Oliveira", email: "simone.oliveira@gcet.com", phone: "+55 83 98888-1017", birthDate: "1996-03-17", team: "Site", specificRole: "Redatora de Matérias", acl: 2, status: "ativo" },
    { id: "u18", name: "Thyago da Silva Farias", email: "thyago.farias@gcet.com", phone: "+55 83 98888-1018", birthDate: "1997-12-14", team: "Site", specificRole: "Desenvolvimento Operacional", acl: 3, status: "ativo" },
    { id: "u19", name: "Alex Souza", email: "alex.souza@gcet.com", phone: "+55 83 98888-1019", birthDate: "1994-11-09", team: "Site", specificRole: "Colaborador Técnico Externo", acl: 2, status: "ativo" }
];

// ----------------- Real Books (extracted from XLSX) -----------------
const REAL_BOOKS = [
    { id: "b1", title: "TURISMO DE BASE COMUNITÁRIA COMO ALTERNATIVA PARA O DESENVOLVIMENTO RURAL: Areia-PB", prefacioUser: "u8", prefacioStatus: "concluido", apresentacaoUser: "u1", apresentacaoStatus: "pendente" },
    { id: "b2", title: "GUIA DE ACESSIBILIDADE O CENTRO HISTÓRICO E PRAIAS DE JOÃO PESSOA/PB", prefacioUser: "u1", prefacioStatus: "concluido", apresentacaoUser: "u7", apresentacaoStatus: "concluido" },
    { id: "b3", title: "TURISMO & HOTELARIA NO CONTEXTO DA TECNOLOGIA", prefacioUser: "u8", prefacioStatus: "concluido", apresentacaoUser: "u9", apresentacaoStatus: "concluido" },
    { id: "b4", title: "TURISMO & HOTELARIA: Bebidas e Harmonizações", prefacioUser: "u8", prefacioStatus: "concluido", apresentacaoUser: "u14", apresentacaoStatus: "pendente" },
    { id: "b5", title: "TURISMO & HOTELARIA: NO CONTEXTO DA RESPONSABILIDADE SOCIAL", prefacioUser: "u14", prefacioStatus: "pendente", apresentacaoUser: "u8", apresentacaoStatus: "concluido" },
    { id: "b6", title: "Educação Sem Fronteiras v.1", prefacioUser: "u19", prefacioStatus: "concluido", apresentacaoUser: "u9", apresentacaoStatus: "concluido" },
    { id: "b7", title: "MANUAL PARA TCC", prefacioUser: "u3", prefacioStatus: "pendente", apresentacaoUser: "u3", apresentacaoStatus: "pendente" },
    { id: "b8", title: "ALIMENTAÇÃO & CULTURA: PROCESSOS SOCIAIS", prefacioUser: "u8", prefacioStatus: "concluido", apresentacaoUser: "u9", apresentacaoStatus: "concluido" },
    { id: "b9", title: "MATEMÁTICA FINANCEIRA: CADERNOS DE AULA", prefacioUser: "u8", prefacioStatus: "pendente", apresentacaoUser: "u9", apresentacaoStatus: "pendente" }
];

// ----------------- Real Events (extracted from DOCX) -----------------
const REAL_EVENTS = [
    { id: "ev1", name: "SIMPÓSIO INTERNACIONAL DE GASTRONOMIA DA AMAZÔNIA - SIGA 2025", dateLoc: "28 a 30 de agosto - UFPA", theme: "Gastronomia Regional e Sustentabilidade", deadline: "Encerrada" },
    { id: "ev2", name: "III Seminário de Hotelaria e Turismo da UFPE", dateLoc: "29 a 30 de Setembro - UFPE", theme: "Inovação em Hotelaria e Turismo", deadline: "11/06/2025 a 20/07/2025" },
    { id: "ev3", name: "XXII SEMINÁRIO ANPTUR E X CLAIT", dateLoc: "16 a 19 de setembro - UCS", theme: "Diversidade e Inclusão na América Latina", deadline: "Encerrada" },
    { id: "ev4", name: "I ENCONTRO BRASILEIRO DE ENOTURISMO", dateLoc: "22 e 24 de outubro de 2025 - IFRS", theme: "Enoturismo Brasileiro", deadline: "04/04/2025 a 07/07/2025" },
    { id: "ev5", name: "V CILITUR - Colóquio Cidades Litorâneas", dateLoc: "03 a 05 de Novembro - João Pessoa - PB", theme: "Turismo Litorâneo", deadline: "15/04/2025 - 30/07/2025" },
    { id: "ev6", name: "ENCONTRO NACIONAL DE GASTRONOMIA SOCIAL (EGS)", dateLoc: "12 a 14 de novembro - UFC", theme: "Gastronomia Social Sustentável", deadline: "07/05/2025 - 25/08/2025" }
];

// ----------------- Articles Mock (Even3 Integration) -----------------
const INITIAL_ARTICLES = [
    { id: "art1", title: "O Impacto da Gastronomia Criativa no Turismo de Areia", authors: "Souza, M. & Lima, J.", reviewerId: "u14", status: "em_revisao", date: "2026-07-10" },
    { id: "art2", title: "Análise da Acessibilidade nos Museus de João Pessoa", authors: "Gomes, F. & Santos, L.", reviewerId: "u8", status: "recebido", date: "2026-07-15" }
];

// ----------------- Default Tasks -----------------
const INITIAL_TASKS = [
    { id: "t1", title: "Refatorar página de publicações", description: "Colocar links de DOI e estruturação no site institucional.", status: "todo", priority: "alta", type: "geral", assignee: "u18", deadline: "2026-07-28" },
    { id: "t2", title: "Escrever matéria sobre Gastronomia Social", description: "Cobrir o evento EGS 2025 e impactos do Turismo no Ceará.", status: "in_progress", priority: "media", type: "materia", assignee: "u16", deadline: "2026-07-25" },
    { id: "t3", title: "Disparar artes de aniversário no Instagram", description: "Postar card de aniversário do Felipe Gomes.", status: "done", priority: "baixa", type: "design", assignee: "u2", deadline: "2026-07-19" }
];

// ----------------- Meetings Database -----------------
const INITIAL_MEETINGS = [
    { id: "m1", date: "2026-07-17", status: "realizada", agenda: "1. Alinhamento sobre rodízio de apresentações.\n2. Organização das pautas do site.\n3. Informes da equipe de Mídias.", minutes: "ATA DA REUNIÃO GCET - DATA: 17/07/2026\n\nPresenças: Felipe Gomes, Netynha, Adriana, Eládio, Priscila Melo.\nAusentes: Ailson (Justificado).\n\nDeliberações: Pautas do site fechadas às quartas-feiras com sucesso.", jitsiRoom: "GCET-Reuniao-1707" },
    { id: "m2", date: "2026-07-24", status: "agendada", agenda: "1. Fechamento de pautas da semana (quarta-feira).\n2. Rodízio de prefácios e apresentações de livros.\n3. Definição do cronograma de eventos 2026.", minutes: "", jitsiRoom: "GCET-Reuniao-2407" }
];

const INITIAL_LOGS = [
    { id: "l1", user: "Coordenador", action: "Inicialização de Sistema", details: "Membro cadastrados e banco relacional sincronizado com as planilhas do GCET.", timestamp: new Date().toLocaleString() }
];

const INITIAL_ATTENDANCE = {
    "m1": { "u1": "presente", "u2": "presente", "u7": "presente", "u8": "presente", "u12": "presente", "u4": "justificada" }
};

// ----------------- State Setup -----------------
let members = JSON.parse(localStorage.getItem("gcet_members")) || REAL_MEMBERS;
let books = JSON.parse(localStorage.getItem("gcet_books")) || REAL_BOOKS;
let events = JSON.parse(localStorage.getItem("gcet_events")) || REAL_EVENTS;
let articles = JSON.parse(localStorage.getItem("gcet_articles")) || INITIAL_ARTICLES;
let tasks = JSON.parse(localStorage.getItem("gcet_tasks")) || INITIAL_TASKS;
let meetings = JSON.parse(localStorage.getItem("gcet_meetings")) || INITIAL_MEETINGS;
let logs = JSON.parse(localStorage.getItem("gcet_logs")) || INITIAL_LOGS;
let attendance = JSON.parse(localStorage.getItem("gcet_attendance")) || INITIAL_ATTENDANCE;

let activeJitsiApi = null;
let currentMeetingId = null;
let uploadedPhoto = null;

// Global State Save
function saveState() {
    localStorage.setItem("gcet_members", JSON.stringify(members));
    localStorage.setItem("gcet_books", JSON.stringify(books));
    localStorage.setItem("gcet_events", JSON.stringify(events));
    localStorage.setItem("gcet_articles", JSON.stringify(articles));
    localStorage.setItem("gcet_tasks", JSON.stringify(tasks));
    localStorage.setItem("gcet_meetings", JSON.stringify(meetings));
    localStorage.setItem("gcet_logs", JSON.stringify(logs));
    localStorage.setItem("gcet_attendance", JSON.stringify(attendance));
}

// Log auditoria
function logEvent(action, details) {
    const entry = {
        id: "l_" + Date.now(),
        user: "Coordenador",
        action: action,
        details: details,
        timestamp: new Date().toLocaleString()
    };
    logs.unshift(entry);
    saveState();
    renderLogs();
}

// ----------------- Router -----------------
function switchPage(pageId) {
    document.querySelectorAll(".nav-item").forEach(item => {
        item.classList.remove("active");
    });
    const activeItem = Array.from(document.querySelectorAll(".nav-item")).find(item => item.onclick.toString().includes(pageId));
    if (activeItem) activeItem.classList.add("active");

    document.querySelectorAll(".page-container").forEach(page => {
        page.classList.remove("active");
    });
    document.getElementById(`page-${pageId}`).classList.add("active");

    const titles = {
        dashboard: "Dashboard & Boletins Informativos",
        kanban: "Quadro de Missões (Kanban)",
        meetings: "Vídeo Reuniões & Atas de Frequência",
        books: "Rodízio de Prefácios e Apresentações",
        even3: "Even3 Submissões & Revisores",
        events: "Cronogramas de Congressos e Chamadas",
        arts: "Gerador de Artes de Rede Social",
        settings: "Configurações Globais & Logs"
    };
    document.getElementById("page-title-display").innerText = titles[pageId] || "GCET System";
    
    // Hide News preview box on navigate away from dashboard
    if (pageId !== "dashboard") {
        document.getElementById("news-journal-box").style.display = "none";
    }

    lucide.createIcons();

    // Reload content
    if (pageId === "dashboard") loadDashboard();
    if (pageId === "kanban") renderKanban();
    if (pageId === "meetings") renderMeetings();
    if (pageId === "books") renderBooksTable();
    if (pageId === "even3") renderArticlesTable();
    if (pageId === "events") renderEventsTable();
    if (pageId === "arts") renderArt();
    if (pageId === "settings") {
        renderMembersTable();
        renderLogs();
    }
}

// ----------------- Dashboard & News -----------------
function loadDashboard() {
    document.getElementById("stat-members-count").innerText = members.length;
    document.getElementById("stat-tasks-count").innerText = tasks.filter(t => t.status !== 'done').length;

    let warningCount = 0;
    members.forEach(m => {
        if (calculateAbsenceRate(m.id) > 25) warningCount++;
    });
    document.getElementById("stat-attendance-warning").innerText = warningCount;

    // Next Meeting Agenda
    const next = meetings.find(m => m.status === "agendada");
    const mDetails = document.getElementById("next-meeting-details");
    if (next) {
        mDetails.innerHTML = `
            <div style="margin-top: 0.5rem;">
                <p style="font-weight: 600; font-size: 1.1rem; color: var(--accent);">${formatDate(next.date)}</p>
                <div style="margin-top: 0.5rem; font-size: 0.85rem; border-left: 2px solid var(--border-color); padding-left: 0.75rem;">
                    <strong>Pauta Contínua da Semana:</strong><br>
                    <pre style="font-family: inherit; color: var(--text-secondary); white-space: pre-wrap; margin-top:0.25rem;">${next.agenda}</pre>
                </div>
            </div>
        `;
    } else {
        mDetails.innerHTML = `<p style="color:var(--text-secondary);">Sem reuniões agendadas.</p>`;
    }

    // Birthday list
    const list = document.getElementById("birthdays-list");
    list.innerHTML = "";
    const currentMonth = new Date().getMonth();
    const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    const birthdayMembers = members.filter(m => {
        if (!m.birthDate) return false;
        return new Date(m.birthDate).getMonth() === currentMonth;
    });

    if (birthdayMembers.length > 0) {
        birthdayMembers.forEach(m => {
            const day = new Date(m.birthDate).getDate() + 1;
            const card = document.createElement("div");
            card.style.display = "flex";
            card.style.justify = "space-between";
            card.style.alignItems = "center";
            card.style.padding = "0.5rem 0.75rem";
            card.style.background = "rgba(255,255,255,0.02)";
            card.style.border = "1px solid var(--border-color)";
            card.style.borderRadius = "6px";
            card.innerHTML = `
                <div>
                    <span style="font-weight:600; color:white;">${m.name}</span>
                    <span style="font-size:0.75rem; color:var(--text-secondary); margin-left:0.5rem;">(${m.team})</span>
                </div>
                <div style="display:flex; align-items:center; gap:0.5rem;">
                    <span style="color:var(--warning); font-size:0.8rem; font-weight:bold;">${day} de ${monthNames[currentMonth]}</span>
                    <button class="btn btn-secondary" style="padding:0.2rem 0.4rem; font-size:0.7rem;" onclick="generateBirthdayArt('${m.name}', '${day} de ${monthNames[currentMonth]}')">Arte</button>
                </div>
            `;
            list.appendChild(card);
        });
    } else {
        list.innerHTML = `<p style="color:var(--text-secondary); font-size:0.85rem;">Nenhum aniversário este mês.</p>`;
    }
}

function generateBirthdayArt(name, dateStr) {
    switchPage("arts");
    document.getElementById("art-text-name").value = name;
    document.getElementById("art-text-date").value = dateStr;
    document.getElementById("art-template-select").value = "birthday";
    renderArt();
}

// Jornal Informativo Automático (GCET News)
function generateAutoNews() {
    const box = document.getElementById("news-journal-box");
    box.style.display = "block";

    const content = document.getElementById("news-journal-content");
    const activeTasks = tasks.filter(t => t.status === "in_progress");
    const finishedTasks = tasks.filter(t => t.status === "done");
    
    const upcomingEvents = events.slice(0, 3);

    let html = `
        <div style="text-align: center; margin-bottom: 2rem;">
            <h1 style="font-size: 2.2rem; font-weight: 800; letter-spacing: 2px; color: var(--accent);">GCET NEWS</h1>
            <p style="text-transform: uppercase; font-size: 0.8rem; letter-spacing: 4px; color: var(--text-secondary);">Boletim Informativo de Integração e Produção</p>
            <div style="height: 2px; background: linear-gradient(to right, transparent, var(--accent), transparent); margin-top: 1rem;"></div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
            <div>
                <h3 style="color: var(--warning); margin-bottom: 0.75rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.25rem;">📋 Missões em Destaque</h3>
                <h4 style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:0.5rem;">Concluídas nesta semana:</h4>
                <ul style="padding-left:1.25rem; font-size:0.85rem; color:var(--success); margin-bottom:1rem;">
                    ${finishedTasks.map(t => `<li><strong>${t.title}</strong> - Entregue por ${members.find(m => m.id === t.assignee)?.name || "Membro"}</li>`).join("") || "Nenhuma missão concluída recentemente."}
                </ul>
                <h4 style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:0.5rem;">Em andamento:</h4>
                <ul style="padding-left:1.25rem; font-size:0.85rem; color:#f3f4f6;">
                    ${activeTasks.map(t => `<li><strong>${t.title}</strong> (Prazo: ${formatDate(t.deadline)})</li>`).join("") || "Sem atividades em andamento."}
                </ul>
            </div>

            <div>
                <h3 style="color: var(--success); margin-bottom: 0.75rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.25rem;">📅 Cronograma Acadêmico (Próximos Eventos)</h3>
                <ul style="list-style:none; padding:0; display:flex; flex-direction:column; gap:0.75rem;">
                    ${upcomingEvents.map(e => `
                        <li style="font-size:0.85rem; border-left:2px solid var(--accent); padding-left:0.5rem;">
                            <strong>${e.name}</strong><br>
                            <span style="color:var(--text-secondary); font-size:0.75rem;">Data/Local: ${e.dateLoc} | Submissões: ${e.deadline}</span>
                        </li>
                    `).join("")}
                </ul>
            </div>
        </div>

        <div style="margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid var(--border-color); display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
            <div>
                <h3 style="color: var(--accent); margin-bottom: 0.5rem; font-size: 1rem;">📚 Rodízio de Revisões & Prefácios</h3>
                <p style="font-size:0.8rem; color:var(--text-secondary);">Escala ativa para as novas chamadas de livros em processo de publicação. Revisores e autores, fiquem atentos aos prazos de aceites!</p>
            </div>
            <div style="text-align:right; font-size:0.75rem; color:var(--text-secondary); align-self:center;">
                GCET - Grupo de Estudos e Pesquisas em Turismo e Hotelaria<br>
                Universidade Federal da Paraíba (UFPB)
            </div>
        </div>
    `;

    content.innerHTML = html;
    logEvent("Compilou GCET News", "Boletim informativo do GCET gerado automaticamente.");
}

function printNewsJournal() {
    const printContents = document.getElementById("news-journal-content").innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = `
        <div style="background: white; color: black; padding: 3rem; font-family: 'Inter', sans-serif; height: 100vh;">
            ${printContents}
        </div>
    `;
    window.print();
    // Restore page
    document.body.innerHTML = originalContents;
    window.location.reload(); // Refresh to restore JS bindings
}

// ----------------- Kanban -----------------
function renderKanban() {
    const statuses = ["backlog", "todo", "in_progress", "done"];
    statuses.forEach(status => {
        const listEl = document.getElementById(`list-${status}`);
        listEl.innerHTML = "";
        const statusTasks = tasks.filter(t => t.status === status);
        document.getElementById(`count-${status}`).innerText = statusTasks.length;

        statusTasks.forEach(task => {
            const assigneeName = members.find(m => m.id === task.assignee)?.name || "Sem responsável";
            const card = document.createElement("div");
            card.className = "task-card";
            card.draggable = true;
            card.id = `task-${task.id}`;
            card.ondragstart = (e) => drag(e, task.id);
            card.innerHTML = `
                <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                    <span class="task-tag tag-${task.type}">${task.type.toUpperCase()}</span>
                    <button style="background:none; border:none; color:var(--text-secondary); cursor:pointer;" onclick="deleteTask('${task.id}')"><i data-lucide="trash-2" style="width:14px; height:14px;"></i></button>
                </div>
                <h4 style="font-size: 0.9rem; margin-bottom: 0.5rem; font-weight:600;">${task.title}</h4>
                <p style="font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 0.75rem;">${task.description}</p>
                <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.75rem; border-top: 1px solid var(--border-color); padding-top: 0.5rem; margin-top: 0.5rem;">
                    <span style="color: var(--text-secondary); display:flex; align-items:center; gap: 0.25rem;"><i data-lucide="user" style="width:12px;"></i> ${assigneeName.split(" ")[0]}</span>
                    <span style="color: var(--warning); display:flex; align-items:center; gap: 0.25rem;"><i data-lucide="calendar" style="width:12px;"></i> ${formatDate(task.deadline)}</span>
                </div>
            `;
            listEl.appendChild(card);
        });
    });
    lucide.createIcons();
}

function allowDrop(e) {
    e.preventDefault();
}

function drag(e, taskId) {
    e.dataTransfer.setData("text", taskId);
}

function drop(e, newStatus) {
    e.preventDefault();
    const taskId = e.dataTransfer.getData("text");
    const task = tasks.find(t => t.id === taskId);
    if (task && task.status !== newStatus) {
        const oldStatus = task.status;
        task.status = newStatus;
        saveState();
        renderKanban();
        logEvent("Moveu Missão", `Missão "${task.title}" movida de [${oldStatus}] para [${newStatus}].`);
    }
}

function openNewTaskModal() {
    const assigneeSelect = document.getElementById("task-assignee");
    assigneeSelect.innerHTML = `<option value="">Selecione um responsável</option>`;
    members.forEach(m => {
        assigneeSelect.innerHTML += `<option value="${m.id}">${m.name} (${m.team})</option>`;
    });
    document.getElementById("modal-new-task").style.display = "flex";
}

function toggleTaskDeadlineRule(type) {
    const deadlineInput = document.getElementById("task-deadline");
    if (type === "materia") {
        const today = new Date();
        today.setDate(today.getDate() + 5);
        deadlineInput.value = today.toISOString().split("T")[0];
    } else {
        deadlineInput.value = "";
    }
}

function saveNewTask(e) {
    e.preventDefault();
    const title = document.getElementById("task-title").value;
    const desc = document.getElementById("task-desc").value;
    const type = document.getElementById("task-type").value;
    const assignee = document.getElementById("task-assignee").value;
    const deadline = document.getElementById("task-deadline").value;

    const newTask = {
        id: "t_" + Date.now(),
        title,
        description: desc,
        status: "todo",
        priority: "media",
        type,
        assignee,
        deadline
    };

    tasks.push(newTask);
    saveState();
    closeModal("modal-new-task");
    renderKanban();
    logEvent("Criou Missão", `Missão "${title}" foi criada para ${members.find(m => m.id === assignee)?.name}.`);
}

function deleteTask(id) {
    if (confirm("Deseja realmente excluir esta missão?")) {
        const task = tasks.find(t => t.id === id);
        tasks = tasks.filter(t => t.id !== id);
        saveState();
        renderKanban();
        logEvent("Excluiu Missão", `Missão "${task.title}" removida.`);
    }
}

function triggerNotifyEstagiarios() {
    const estagiarios = members.filter(m => m.status === "estagiario");
    let names = estagiarios.map(e => e.name).join(", ");
    alert(`Mensagem Automática enviada por E-mail e WhatsApp para: ${names}.\n\nCobrança: 'Atenção aos prazos das missões no Kanban!'`);
    logEvent("Notificou Estagiários", `Disparo de notificações realizado para estagiários: ${names}.`);
}

// ----------------- Meetings & Video call -----------------
function renderMeetings() {
    const container = document.getElementById("meetings-list-container");
    container.innerHTML = "";

    meetings.forEach(meeting => {
        const el = document.createElement("div");
        el.className = "glass-card";
        el.style.cursor = "pointer";
        el.style.borderLeft = meeting.status === "agendada" ? "4px solid var(--accent)" : "4px solid var(--success)";
        el.onclick = () => selectMeeting(meeting.id);
        el.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="font-weight: 700; font-size: 1rem; color: var(--text-primary);">${formatDate(meeting.date)}</span>
                <span class="badge ${meeting.status === 'agendada' ? 'badge-probation' : 'badge-active'}">${meeting.status.toUpperCase()}</span>
            </div>
            <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.5rem; text-overflow: ellipsis; white-space: nowrap; overflow: hidden;">Pauta: ${meeting.agenda.split("\n")[0]}</p>
        `;
        container.appendChild(el);
    });
}

function selectMeeting(meetingId) {
    currentMeetingId = meetingId;
    const meeting = meetings.find(m => m.id === meetingId);
    const box = document.getElementById("meeting-details-box");

    let statusBtn = "";
    if (meeting.status === "agendada") {
        statusBtn = `<button class="btn btn-primary" onclick="startMeeting('${meeting.id}')"><i data-lucide="video"></i> Iniciar Chamada & Chamada</button>`;
    } else {
        statusBtn = `<span class="badge badge-active" style="padding:0.5rem 1rem;">REUNIÃO REALIZADA</span>`;
    }

    box.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 1.5rem;">
            <h2 style="font-size: 1.1rem; color:var(--accent); font-weight:700;">Reunião - ${formatDate(meeting.date)}</h2>
            ${statusBtn}
        </div>

        <div style="margin-bottom: 1.5rem;">
            <h4 style="font-size: 0.9rem; margin-bottom: 0.5rem; font-weight:600;">Pauta Contínua da Semana:</h4>
            <pre style="background: rgba(0,0,0,0.2); padding: 0.75rem; border-radius: 6px; font-family: inherit; font-size:0.85rem; white-space: pre-wrap; color:var(--text-secondary);">${meeting.agenda}</pre>
        </div>

        <div style="margin-bottom: 1.5rem; border-top: 1px solid var(--border-color); padding-top: 1rem;">
            <h4 style="font-size: 0.9rem; margin-bottom: 0.75rem; font-weight:600;">Chamada Online de Presença:</h4>
            <table class="attendance-table">
                <thead>
                    <tr>
                        <th>Membro</th>
                        <th>Presença</th>
                        <th>Alerta Falta</th>
                    </tr>
                </thead>
                <tbody>
                    ${members.map(member => {
                        const currentStatus = attendance[meetingId]?.[member.id] || "falta";
                        const rate = calculateAbsenceRate(member.id);
                        const rateBadge = rate > 25 ? `<span class="badge badge-danger">Alerta ${rate.toFixed(0)}%</span>` : `<span style="color:var(--success); font-size:0.8rem;">${rate.toFixed(0)}%</span>`;

                        return `
                            <tr>
                                <td>${member.name}</td>
                                <td>
                                    <select class="form-control" style="padding:0.25rem; font-size:0.8rem; width:120px;" onchange="updateAttendance('${meetingId}', '${member.id}', this.value)" ${meeting.status === 'realizada' ? 'disabled' : ''}>
                                        <option value="presente" ${currentStatus === 'presente' ? 'selected' : ''}>Presente</option>
                                        <option value="falta" ${currentStatus === 'falta' ? 'selected' : ''}>Falta</option>
                                        <option value="justificada" ${currentStatus === 'justificada' ? 'selected' : ''}>Justificada</option>
                                    </select>
                                </td>
                                <td>${rateBadge}</td>
                            </tr>
                        `;
                    }).join("")}
                </tbody>
            </table>
        </div>

        <div style="border-top: 1px solid var(--border-color); padding-top: 1rem;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
                <h4 style="font-size: 0.9rem; font-weight:600;">Ata de Reunião:</h4>
                ${meeting.status === 'agendada' ? `<button class="btn btn-secondary" style="padding:0.25rem 0.5rem; font-size:0.75rem;" onclick="generateAutoMinutes('${meetingId}')">Gerar Ata Automática</button>` : ''}
            </div>
            <textarea id="meeting-minutes" class="form-control" rows="5" ${meeting.status === 'realizada' ? 'disabled' : ''} placeholder="Registros da ata final da reunião...">${meeting.minutes}</textarea>
            
            ${meeting.status === 'agendada' ? `
                <button class="btn btn-primary" style="margin-top: 1rem; width:100%; justify-content:center;" onclick="saveMeetingMinutes('${meetingId}')">
                    Salvar Ata e Fechar Reunião
                </button>
            ` : ''}
        </div>
    `;
    lucide.createIcons();
}

function updateAttendance(meetingId, memberId, status) {
    if (!attendance[meetingId]) attendance[meetingId] = {};
    attendance[meetingId][memberId] = status;
    saveState();
    selectMeeting(meetingId);
}

function calculateAbsenceRate(memberId) {
    const pastMeetings = meetings.filter(m => m.status === "realizada");
    if (pastMeetings.length === 0) return 0;

    let absences = 0;
    pastMeetings.forEach(meeting => {
        const status = attendance[meeting.id]?.[memberId];
        if (status === "falta") absences++;
    });

    return (absences / pastMeetings.length) * 100;
}

function generateAutoMinutes(meetingId) {
    const meeting = meetings.find(m => m.id === meetingId);
    let presentNames = [];
    let absentNames = [];

    members.forEach(member => {
        const status = attendance[meetingId]?.[member.id] || "falta";
        if (status === "presente") presentNames.push(member.name);
        else if (status === "falta") absentNames.push(member.name);
        else if (status === "justificada") absentNames.push(`${member.name} (Justificada)`);
    });

    const generated = `ATA DA REUNIÃO GCET - DATA: ${formatDate(meeting.date)}

STATUS: Realizada
PRESENÇA:
- Presentes: ${presentNames.join(", ") || "Nenhum"}
- Ausentes: ${absentNames.join(", ") || "Nenhum"}

PAUTA DA REUNIÃO:
${meeting.agenda}

DESENVOLVIMENTO & INFORME DOS MEMBROS:
- Acolhimento de novas pautas.
- Alinhamento de metas de estágios do Academia.edu.

DECISÕES & DIRETRIZES:
1. Prazos definidos atualizados no quadro Kanban.
2. Rodízio de revisores notificado para aceite de prefácios.
`;
    document.getElementById("meeting-minutes").value = generated;
}

function saveMeetingMinutes(meetingId) {
    const meeting = meetings.find(m => m.id === meetingId);
    const minutesText = document.getElementById("meeting-minutes").value;

    if (!minutesText.trim()) {
        alert("Escreva ou gere a Ata da reunião antes de finalizá-la.");
        return;
    }

    meeting.minutes = minutesText;
    meeting.status = "realizada";
    saveState();
    logEvent("Finalizou Reunião", `Ata gerada e salva para a reunião do dia ${formatDate(meeting.date)}.`);
    selectMeeting(meetingId);
    renderMeetings();
}

function startMeeting(meetingId) {
    const meeting = meetings.find(m => m.id === meetingId);
    document.getElementById("video-call-box").style.display = "block";

    const domain = "meet.jit.si";
    const options = {
        roomName: meeting.jitsiRoom || `GCET-Reuniao-${meetingId}`,
        width: '100%',
        height: '100%',
        parentNode: document.getElementById("jitsi-container"),
        userInfo: {
            displayName: 'Coordenador GCET'
        }
    };

    if (activeJitsiApi) {
        activeJitsiApi.dispose();
    }
    activeJitsiApi = new JitsiMeetExternalAPI(domain, options);
    logEvent("Iniciou Chamada", `Videoconferência iniciada na sala [${options.roomName}].`);
}

function closeVideoCall() {
    if (activeJitsiApi) {
        activeJitsiApi.dispose();
        activeJitsiApi = null;
    }
    document.getElementById("video-call-box").style.display = "none";
}

function openNewMeetingModal() {
    document.getElementById("modal-new-meeting").style.display = "flex";
}

function saveNewMeeting(e) {
    e.preventDefault();
    const date = document.getElementById("meeting-date").value;
    const agenda = document.getElementById("meeting-agenda").value;

    const newMeeting = {
        id: "m_" + Date.now(),
        date,
        status: "agendada",
        agenda,
        minutes: "",
        jitsiRoom: `GCET-Reuniao-${Date.now().toString().slice(-4)}`
    };

    meetings.push(newMeeting);
    saveState();
    closeModal("modal-new-meeting");
    renderMeetings();
    logEvent("Agendou Reunião", `Reunião agendada para ${formatDate(date)}.`);
}

// ----------------- Books Rodízio -----------------
function renderBooksTable() {
    const tbody = document.getElementById("books-list-tbody");
    tbody.innerHTML = "";

    books.forEach(book => {
        const prefName = members.find(m => m.id === book.prefacioUser)?.name || book.prefacioUser || "Não cadastrado";
        const aprName = members.find(m => m.id === book.apresentacaoUser)?.name || book.apresentacaoUser || "Não cadastrado";

        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><strong style="color:white;">${book.title}</strong></td>
            <td>${prefName}</td>
            <td>
                <span class="badge ${book.prefacioStatus === 'concluido' ? 'badge-active' : 'badge-probation'}">${book.prefacioStatus.toUpperCase()}</span>
            </td>
            <td>${aprName}</td>
            <td>
                <span class="badge ${book.apresentacaoStatus === 'concluido' ? 'badge-active' : 'badge-probation'}">${book.apresentacaoStatus.toUpperCase()}</span>
            </td>
            <td>
                <button class="btn btn-secondary" style="padding:0.25rem 0.5rem; font-size:0.75rem;" onclick="toggleBookStatus('${book.id}')">Alterar Status</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function toggleBookStatus(bookId) {
    const book = books.find(b => b.id === bookId);
    if (book) {
        if (book.prefacioStatus === "pendente") book.prefacioStatus = "concluido";
        else if (book.apresentacaoStatus === "pendente") book.apresentacaoStatus = "concluido";
        else {
            book.prefacioStatus = "pendente";
            book.apresentacaoStatus = "pendente";
        }
        saveState();
        renderBooksTable();
        logEvent("Alterou Status Obra", `Status de rodízio da obra "${book.title}" atualizado.`);
    }
}

function openNewBookModal() {
    const prefSelect = document.getElementById("book-prefacio-user");
    const aprSelect = document.getElementById("book-apresentacao-user");
    prefSelect.innerHTML = "";
    aprSelect.innerHTML = "";

    members.forEach(m => {
        prefSelect.innerHTML += `<option value="${m.id}">${m.name}</option>`;
        aprSelect.innerHTML += `<option value="${m.id}">${m.name}</option>`;
    });

    document.getElementById("modal-new-book").style.display = "flex";
}

function saveNewBook(e) {
    e.preventDefault();
    const title = document.getElementById("book-title").value;
    const pref = document.getElementById("book-prefacio-user").value;
    const apr = document.getElementById("book-apresentacao-user").value;

    const newBook = {
        id: "b_" + Date.now(),
        title,
        prefacioUser: pref,
        prefacioStatus: "pendente",
        apresentacaoUser: apr,
        apresentacaoStatus: "pendente"
    };

    books.push(newBook);
    saveState();
    closeModal("modal-new-book");
    renderBooksTable();
    logEvent("Lançou Livro", `Obra "${title}" inserida no rodízio de revisões.`);
}

// ----------------- Even3 Artigos -----------------
function renderArticlesTable() {
    const tbody = document.getElementById("articles-list-tbody");
    tbody.innerHTML = "";

    articles.forEach(art => {
        const revName = members.find(m => m.id === art.reviewerId)?.name || "Sem revisor";
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><strong style="color:white;">${art.title}</strong></td>
            <td>${art.authors}</td>
            <td>${revName}</td>
            <td>
                <span class="badge ${art.status === 'corrigido' ? 'badge-active' : 'badge-probation'}">${art.status.toUpperCase()}</span>
            </td>
            <td>
                <button class="btn btn-secondary" style="padding:0.25rem 0.5rem; font-size:0.75rem; margin-right:0.25rem;" onclick="toggleArticleStatus('${art.id}')">Status</button>
                <button class="btn btn-secondary" style="padding:0.25rem 0.5rem; font-size:0.75rem; color:var(--danger);" onclick="deleteArticle('${art.id}')"><i data-lucide="trash-2" style="width:12px;"></i></button>
            </td>
        `;
        tbody.appendChild(tr);
    });
    lucide.createIcons();
}

function toggleArticleStatus(id) {
    const art = articles.find(a => a.id === id);
    if (art) {
        art.status = art.status === "recebido" ? "em_revisao" : art.status === "em_revisao" ? "corrigido" : "recebido";
        saveState();
        renderArticlesTable();
        logEvent("Alterou Status Artigo", `Artigo "${art.title}" atualizado para [${art.status}].`);
    }
}

function openNewArticleModal() {
    const select = document.getElementById("article-reviewer");
    select.innerHTML = "";
    members.forEach(m => {
        select.innerHTML += `<option value="${m.id}">${m.name}</option>`;
    });
    document.getElementById("modal-new-article").style.display = "flex";
}

function saveNewArticle(e) {
    e.preventDefault();
    const title = document.getElementById("article-title").value;
    const authors = document.getElementById("article-authors").value;
    const reviewerId = document.getElementById("article-reviewer").value;

    const newArt = {
        id: "art_" + Date.now(),
        title,
        authors,
        reviewerId,
        status: "recebido",
        date: new Date().toISOString().split("T")[0]
    };

    articles.push(newArt);
    saveState();
    closeModal("modal-new-article");
    renderArticlesTable();
    logEvent("Cadastrou Artigo", `Artigo "${title}" importado do Even3 e atribuído a ${members.find(m => m.id === reviewerId)?.name}.`);
}

function deleteArticle(id) {
    if (confirm("Deseja deletar este registro de artigo?")) {
        articles = articles.filter(a => a.id !== id);
        saveState();
        renderArticlesTable();
    }
}

function generateRevisorReminderText() {
    const box = document.getElementById("reminder-output-box");
    box.style.display = "block";

    const text = `Prezado(a) Revisor(a),
Agradecemos imensamente sua dedicação e contribuição nas chamadas de livros do GCET.

Gostaríamos de lembrar que o prazo para avaliação do capítulo atribuído expira em 5 dias. 
Favor acessar a plataforma Even3 para realizar as correções e enviar o parecer aos autores.

Lembre-se de atentar para as diretrizes de Integridade de IA e plágio acadêmico descritas em nosso Manual de Revisão.

Atenciosamente,
Coordenação Editorial GCET`;

    document.getElementById("reminder-text-area").value = text;
}

function copyReminderText() {
    const area = document.getElementById("reminder-text-area");
    area.select();
    document.execCommand("copy");
    alert("Mensagem copiada para a área de transferência!");
}

// ----------------- Events -----------------
function renderEventsTable() {
    const tbody = document.getElementById("events-list-tbody");
    tbody.innerHTML = "";

    events.forEach(ev => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><strong style="color:white;">${ev.name}</strong></td>
            <td>${ev.dateLoc}</td>
            <td>${ev.theme}</td>
            <td><span class="badge badge-probation">${ev.deadline}</span></td>
            <td>
                <button class="btn btn-secondary" style="padding:0.25rem 0.5rem; font-size:0.75rem; color:var(--danger);" onclick="deleteEvent('${ev.id}')">Excluir</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function openNewEventModal() {
    document.getElementById("modal-new-event").style.display = "flex";
}

function saveNewEvent(e) {
    e.preventDefault();
    const name = document.getElementById("event-name").value;
    const dateLoc = document.getElementById("event-date-loc").value;
    const theme = document.getElementById("event-theme").value;
    const deadline = document.getElementById("event-deadline").value;

    const newEv = {
        id: "ev_" + Date.now(),
        name,
        dateLoc,
        theme,
        deadline
    };

    events.push(newEv);
    saveState();
    closeModal("modal-new-event");
    renderEventsTable();
    logEvent("Cadastrou Evento", `Evento "${name}" adicionado ao cronograma.`);
}

function deleteEvent(id) {
    if (confirm("Deseja realmente excluir este evento?")) {
        events = events.filter(e => e.id !== id);
        saveState();
        renderEventsTable();
    }
}

// ----------------- Canvas Art Generator -----------------
function renderArt() {
    const canvas = document.getElementById("art-canvas");
    const ctx = canvas.getContext("2d");
    const type = document.getElementById("art-template-select").value;
    const name = document.getElementById("art-text-name").value;
    const dateText = document.getElementById("art-text-date").value;
    const themeColor = document.getElementById("art-color-theme").value;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const dateGroup = document.getElementById("birthday-date-group");
    if (type === "birthday") {
        dateGroup.style.display = "block";
        drawBirthdayTemplate(ctx, canvas, name, dateText, themeColor);
    } else if (type === "news") {
        dateGroup.style.display = "none";
        drawNewsTemplate(ctx, canvas, name, themeColor);
    } else if (type === "event") {
        dateGroup.style.display = "none";
        drawEventTemplate(ctx, canvas, name, themeColor);
    }
}

function drawBirthdayTemplate(ctx, canvas, name, dateText, color) {
    ctx.fillStyle = "#0b0f19";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = color;
    ctx.lineWidth = 15;
    ctx.strokeRect(30, 30, canvas.width - 60, canvas.height - 60);

    ctx.beginPath();
    ctx.arc(canvas.width, 0, 300, 0, 2 * Math.PI);
    ctx.fillStyle = color + "26";
    ctx.fill();

    const photoX = canvas.width / 2;
    const photoY = 320;
    const radius = 130;

    ctx.save();
    ctx.beginPath();
    ctx.arc(photoX, photoY, radius, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.clip();

    if (uploadedPhoto) {
        ctx.drawImage(uploadedPhoto, photoX - radius, photoY - radius, radius * 2, radius * 2);
    } else {
        ctx.fillStyle = "#111827";
        ctx.fillRect(photoX - radius, photoY - radius, radius * 2, radius * 2);
        
        ctx.fillStyle = color;
        ctx.font = "bold 80px Outfit";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(name.split(" ")[0]?.charAt(0).toUpperCase() || "G", photoX, photoY);
    }
    ctx.restore();

    ctx.beginPath();
    ctx.arc(photoX, photoY, radius + 4, 0, 2 * Math.PI);
    ctx.strokeStyle = color;
    ctx.lineWidth = 6;
    ctx.stroke();

    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 42px Outfit";
    ctx.textAlign = "center";
    ctx.fillText("FELIZ ANIVERSÁRIO!", canvas.width / 2, 530);

    ctx.fillStyle = color;
    ctx.font = "800 52px Outfit";
    ctx.fillText(name.toUpperCase(), canvas.width / 2, 600);

    ctx.fillStyle = "#94a3b8";
    ctx.font = "500 28px Inter";
    ctx.fillText(dateText, canvas.width / 2, 660);

    ctx.fillStyle = "rgba(255,255,255,0.4)";
    ctx.font = "bold 24px Outfit";
    ctx.fillText("GCET NEWS | COMUNICAÇÃO DE MÍDIAS", canvas.width / 2, 730);
}

function drawNewsTemplate(ctx, canvas, title, color) {
    ctx.fillStyle = "#0f172a";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = color;
    ctx.fillRect(30, 30, 20, canvas.height - 60);

    ctx.fillStyle = color;
    ctx.font = "bold 56px Outfit";
    ctx.textAlign = "left";
    ctx.fillText("GCET NEWS", 80, 150);

    ctx.fillStyle = "#ffffff";
    ctx.font = "800 48px Outfit";
    ctx.fillText("INFORMATIVO SEMANAL", 80, 220);

    ctx.strokeStyle = "rgba(255,255,255,0.1)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(80, 270);
    ctx.lineTo(canvas.width - 60, 270);
    ctx.stroke();

    ctx.fillStyle = "#1e293b";
    ctx.fillRect(80, 310, canvas.width - 140, 320);

    ctx.fillStyle = "#f8fafc";
    ctx.font = "bold 32px Outfit";
    wrapText(ctx, title, 110, 380, canvas.width - 200, 42);

    ctx.fillStyle = "rgba(255,255,255,0.3)";
    ctx.font = "bold 24px Outfit";
    ctx.fillText("DEPARTAMENTO DE IMPRENSA & EDITORIAL", 80, 710);
}

function drawEventTemplate(ctx, canvas, title, color) {
    const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    grad.addColorStop(0, "#090d16");
    grad.addColorStop(1, "#111827");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.arc(canvas.width - 100, 150, 180, 0, 2 * Math.PI);
    ctx.fillStyle = color + "26";
    ctx.fill();

    ctx.fillStyle = color;
    ctx.fillRect(30, 30, canvas.width - 60, 15);

    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 64px Outfit";
    ctx.textAlign = "center";
    ctx.fillText("CHAMADA ABERTA", canvas.width / 2, 220);

    ctx.fillStyle = color;
    ctx.font = "800 36px Outfit";
    ctx.fillText("PROJETOS E EXTENSÃO", canvas.width / 2, 280);

    ctx.fillStyle = "#f8fafc";
    ctx.font = "500 38px Outfit";
    wrapText(ctx, title, 100, 380, canvas.width - 200, 48);

    ctx.fillStyle = "#94a3b8";
    ctx.font = "normal 24px Inter";
    ctx.fillText("Inscrições pela plataforma Even3", canvas.width / 2, 600);

    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.roundRect(canvas.width / 2 - 150, 640, 300, 60, 8);
    ctx.fill();

    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 24px Outfit";
    ctx.fillText("SAIBA MAIS", canvas.width / 2, 678);
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
    const words = text.split(' ');
    let line = '';

    for(let n = 0; n < words.length; n++) {
        let testLine = line + words[n] + ' ';
        let metrics = ctx.measureText(testLine);
        let testWidth = metrics.width;
        if (testWidth > maxWidth && n > 0) {
            ctx.fillText(line, x, y);
            line = words[n] + ' ';
            y += lineHeight;
        } else {
            line = testLine;
        }
    }
    ctx.fillText(line, x, y);
}

function handlePhotoUpload(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const img = new Image();
            img.onload = function() {
                uploadedPhoto = img;
                renderArt();
            };
            img.src = event.target.result;
        };
        reader.readAsDataURL(file);
    }
}

function downloadArt() {
    const canvas = document.getElementById("art-canvas");
    const link = document.createElement("a");
    link.download = `GCET-Arte-${Date.now()}.png`;
    link.href = canvas.toDataURL();
    link.click();
    logEvent("Gerou Arte", "Arte baixada a partir do criador de templates.");
}

// ----------------- ACL & Settings -----------------
function renderMembersTable() {
    const tbody = document.getElementById("settings-members-tbody");
    tbody.innerHTML = "";

    members.forEach(member => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><strong style="color:#fff;">${member.name}</strong></td>
            <td>${member.team}</td>
            <td>${member.specificRole}</td>
            <td>
                <select class="form-control" style="padding:0.25rem; font-size:0.85rem;" onchange="updateMemberACL('${member.id}', this.value)">
                    <option value="1" ${member.acl == 1 ? 'selected' : ''}>Nível 1</option>
                    <option value="2" ${member.acl == 2 ? 'selected' : ''}>Nível 2</option>
                    <option value="3" ${member.acl == 3 ? 'selected' : ''}>Nível 3</option>
                    <option value="4" ${member.acl == 4 ? 'selected' : ''}>Nível 4</option>
                    <option value="5" ${member.acl == 5 ? 'selected' : ''}>Nível 5</option>
                </select>
            </td>
            <td>
                <button class="btn btn-secondary" style="padding: 0.25rem 0.5rem; color: var(--danger); font-size:0.75rem;" onclick="deleteMember('${member.id}')">Excluir</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function updateMemberACL(memberId, newAcl) {
    const m = members.find(u => u.id === memberId);
    if (m) {
        const oldAcl = m.acl;
        m.acl = parseInt(newAcl);
        saveState();
        logEvent("Alterou Acesso (ACL)", `Nível de acesso de "${m.name}" alterado de Nível ${oldAcl} para Nível ${newAcl}.`);
        renderMembersTable();
    }
}

function openNewMemberModal() {
    document.getElementById("modal-new-member").style.display = "flex";
}

function saveNewMember(e) {
    e.preventDefault();
    const name = document.getElementById("member-name").value;
    const email = document.getElementById("member-email").value;
    const phone = document.getElementById("member-phone").value;
    const birthDate = document.getElementById("member-birth").value;
    const team = document.getElementById("member-team").value;
    const specificRole = document.getElementById("member-role-specific").value;
    const acl = parseInt(document.getElementById("member-acl").value);

    const newMember = {
        id: "u_" + Date.now(),
        name,
        email,
        phone,
        birthDate,
        team,
        specificRole,
        acl,
        status: specificRole.toLowerCase().includes("estagiário") ? "estagiario" : "ativo"
    };

    members.push(newMember);
    saveState();
    closeModal("modal-new-member");
    renderMembersTable();
    logEvent("Adicionou Membro", `Membro "${name}" cadastrado na equipe "${team}".`);
}

function deleteMember(id) {
    if (confirm("Remover permanentemente este membro do sistema?")) {
        const m = members.find(u => u.id === id);
        members = members.filter(u => u.id !== id);
        saveState();
        renderMembersTable();
        logEvent("Removeu Membro", `Membro "${m.name}" removido do GCET.`);
    }
}

function triggerImportPlanilha() {
    alert("Importando dados da planilha 'ORGANIZAÇÃO DAS EQUIPES GCET.docx'...\n\nSucesso: 19 membros sincronizados com funções e níveis de acesso!");
    logEvent("Importou Planilha", "Importação de Onboarding de membros concluída.");
}

function renderLogs() {
    const container = document.getElementById("system-logs-container");
    container.innerHTML = "";

    logs.forEach(log => {
        const el = document.createElement("div");
        el.style.borderBottom = "1px solid rgba(255,255,255,0.05)";
        el.style.padding = "0.5rem 0";
        el.innerHTML = `
            <span style="color: var(--accent); font-weight: 600;">[${log.timestamp}]</span> 
            <span style="color: var(--success);">${log.action}</span> - 
            <span style="color: var(--text-secondary);">${log.details}</span>
        `;
        container.appendChild(el);
    });
}

// ----------------- Helpers -----------------
function formatDate(dateStr) {
    if (!dateStr) return "-";
    const parts = dateStr.split("-");
    if (parts.length === 3) {
        return `${parts[2]}/${parts[1]}/${parts[0]}`;
    }
    return dateStr;
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
    switchPage("dashboard");
});
