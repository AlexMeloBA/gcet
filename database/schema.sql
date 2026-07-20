-- Tabela de Níveis de Acesso / Funções do Sistema (ACL)
CREATE TABLE IF NOT EXISTS roles (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE,
    access_level INTEGER NOT NULL CHECK(access_level BETWEEN 1 AND 5)
);

-- Tabela de Usuários (Membros)
CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY, -- UID do serviço de autenticação ou UUID
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    phone_whatsapp TEXT,
    birth_date TEXT, -- Formato: YYYY-MM-DD
    admission_date TEXT,
    status TEXT NOT NULL DEFAULT 'estagiario' CHECK(status IN ('ativo', 'estagiario', 'ausente', 'inativo')),
    role_id INTEGER,
    FOREIGN KEY (role_id) REFERENCES roles(id)
);

-- Tabela de Equipes
CREATE TABLE IF NOT EXISTS teams (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE, -- 'Site', 'Editorial', 'Mídias', 'Comissão'
    description TEXT
);

-- Tabela de Associação Membros-Equipes (N:N)
CREATE TABLE IF NOT EXISTS team_members (
    user_id TEXT,
    team_id INTEGER,
    role_in_team TEXT NOT NULL, -- Ex: 'Coordenador', 'Revisor', 'Designer'
    parent_role_id INTEGER, -- Permite subfunções hierárquicas
    PRIMARY KEY (user_id, team_id),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (team_id) REFERENCES teams(id) ON DELETE CASCADE,
    FOREIGN KEY (parent_role_id) REFERENCES team_members(user_id, team_id)
);

-- Tabela de Reuniões
CREATE TABLE IF NOT EXISTS meetings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    meeting_date TEXT NOT NULL, -- YYYY-MM-DD
    status TEXT NOT NULL DEFAULT 'agendada' CHECK(status IN ('agendada', 'pauta_fechada', 'realizada', 'cancelada')),
    agenda TEXT, -- Pauta em formato Markdown
    minutes TEXT, -- Ata em formato Markdown (gerada automaticamente ou editada)
    jitsi_room TEXT -- Nome da sala de videoconferência do Jitsi
);

-- Tabela de Presenças (Frequência)
CREATE TABLE IF NOT EXISTS attendance (
    meeting_id INTEGER,
    user_id TEXT,
    status TEXT NOT NULL CHECK(status IN ('presente', 'falta', 'justificada')),
    justification TEXT,
    PRIMARY KEY (meeting_id, user_id),
    FOREIGN KEY (meeting_id) REFERENCES meetings(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Tabela de Quadro de Missões (Kanban)
CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT,
    status TEXT NOT NULL DEFAULT 'backlog' CHECK(status IN ('backlog', 'todo', 'in_progress', 'review', 'done')),
    priority TEXT NOT NULL DEFAULT 'media' CHECK(priority IN ('baixa', 'media', 'alta')),
    due_date TEXT, -- YYYY-MM-DD
    created_at TEXT DEFAULT CURRENT_TIMESTAMP,
    assigned_to TEXT,
    task_type TEXT NOT NULL DEFAULT 'geral' CHECK(task_type IN ('materia', 'estagio', 'geral', 'design')),
    FOREIGN KEY (assigned_to) REFERENCES users(id) ON SET NULL
);

-- Tabela de Controle Editorial de Livros (Rodízio de Prefácio/Apresentação)
CREATE TABLE IF NOT EXISTS book_rotations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    book_title TEXT NOT NULL,
    assigned_user_id TEXT NOT NULL,
    role_type TEXT NOT NULL CHECK(role_type IN ('prefacio', 'apresentacao')),
    sequence_order INTEGER NOT NULL,
    status TEXT NOT NULL DEFAULT 'pendente' CHECK(status IN ('pendente', 'aceito', 'recusado', 'concluido')),
    sent_at TEXT,
    responded_at TEXT,
    FOREIGN KEY (assigned_user_id) REFERENCES users(id)
);

-- Tabela de Artigos do Even3
CREATE TABLE IF NOT EXISTS even3_articles (
    id TEXT PRIMARY KEY, -- ID vindo da API/Webhook do Even3
    title TEXT NOT NULL,
    authors TEXT NOT NULL,
    reviewer_id TEXT,
    status TEXT NOT NULL DEFAULT 'recebido' CHECK(status IN ('recebido', 'em_revisao', 'corrigido', 'enviado_autores')),
    submission_date TEXT,
    review_deadline TEXT,
    FOREIGN KEY (reviewer_id) REFERENCES users(id)
);

-- Tabela de Cronogramas e Eventos
CREATE TABLE IF NOT EXISTS events (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT,
    start_date TEXT NOT NULL, -- YYYY-MM-DD ou ISO8601
    end_date TEXT,
    event_type TEXT NOT NULL CHECK(event_type IN ('congresso', 'evento', 'extensao', 'chamada_livro', 'reuniao'))
);

-- Tabela de Registro de Logs do Sistema (Auditoria)
CREATE TABLE IF NOT EXISTS system_logs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id TEXT,
    action TEXT NOT NULL,
    details TEXT,
    timestamp TEXT DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON SET NULL
);
