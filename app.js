/* ---------- Config & constants ---------- */
const EDITION_MS = 14 * 24 * 60 * 60 * 1000;
const DEFAULT_CONFIG = {
  mastheadTitle: "Cleytons Paper",
  tagline: "News from the lives of family & friends, scattered across the world",
  recipientName: "Cleyton",
  anchorDate: new Date().toISOString(),
  editionOverrideIndex: null,
  editionOverrideEnd: null,
};
const LOCALES = { en: "en-GB", pt: "pt-PT" };

const STRINGS = {
  en: {
    nav_login: "Log in", loading: "Loading...", press_starting: "Starting the press...",
    firebase_warning: "Firebase isn't configured yet — edit firebase-config.js with your project keys.",
    cancel: "Cancel", save: "Save", go_back: "Go back",

    home_cta_submit: "Submit a story", home_cta_submit_sub: "For family & friends",

    home_hi: "Hi, {{name}}", home_intro: "You are part of {{name}}'s digital paper, write some fun stories for {{name}}",
    deadline_pill: "Deadline next paper: {{date}}",
    action_mystories: "All my stories", action_mystories_sub: "Previous submitted stories",
    action_paperweek: "Paper of the week", action_paperweek_sub: "next paper will be {{date}}",

    dropdown_submit: "Submit a story", dropdown_mystories: "All my stories", dropdown_logout: "Log out",

    login_title: "Log in", login_lede: "Please log in so {{name}} knows who is sending those wonderful stories",
    field_name: "Name", field_password: "Password", btn_login: "Log in",
    link_no_account: "No acount yet?", link_have_account: "Already have an account? Log in",
    err_login_notfound: "No account found with that name.", err_login_wrongpass: "That password isn't right.",

    register_title: "Make a account", register_lede: "Please enter all your details here. so {{name}} knows from who is getting those wonderful stories from",
    field_relationship: "Relationship with {{name}}", field_relationship_placeholder: "Sister, Mother, Friend",
    btn_submit: "Submit", err_register_exists: "That name is already taken — try logging in instead.",
    err_register_fields: "Please fill in all fields.", err_register_password_short: "Choose a password of at least 4 characters.",

    submit_title: "Submit a story", submit_lede: "Write a message for {{name}} and add up to 2 photos. You can edit your story until 1 day before the paper is made.",
    field_story: "Your story", field_story_placeholder: "Write your memory, inside joke or update here...",
    field_photos: "Attach photos (maximum 2)", upload_first: "Upload first photo", upload_second: "Upload second photo (optional)",
    btn_submit_story: "Submit story", btn_update_story: "Update story",
    success_saved: "Saved! This will appear in edition #{{n}}, ready on {{end}}.",
    err_empty_story: "Write a story before saving.", err_save_failed: "Something went wrong saving. Please try again.",
    delete_submission: "Delete my submission", deleted_msg: "Your submission has been deleted.",
    edition_deadline_msg: "You can edit your piece until {{deadline}} ({{days}} day(s) left).",
    edition_closed_msg: "Submissions for this edition are closed. The next edition (#{{n}}) starts on {{end}}.",

    mystories_title: "All my stories", mystories_lede: "Here are all the stories you have submitted for {{name}}'s papers.",
    mystories_empty: "You haven't submitted any stories yet.",
    submitted_on: "Submitted {{date}}", status_editable_until: "Editable until {{date}}",
    status_published_in: "Published in Paper #{{n}}", edit_story_link: "Edit Story", view_story_link: "View story",

    papers_title: "All Papers", release_label: "Release: {{date}}", view_paper_btn: "View Paper",
    papers_empty: "No papers have been made yet.",

    np_empty: "No stories in this edition.", np_by: "By {{name}}",
    edition_label: "Edition #{{n}}",

    admin_portal_sub: "SYSTEM PORTAL", admin_nav_dashboard: "Dashboard", admin_nav_accounts: "Accounts",
    admin_nav_papers: "Papers", admin_nav_stories: "Stories", admin_administrator: "Administrator",
    admin_active_session: "Active Session",
    admin_overview: "Overview", stat_active_accounts: "Active Accounts", stat_accounts_sub: "{{n}} total accounts",
    stat_stories: "Stories Submitted", stat_stories_sub: "Avg {{avg}} stories per user",
    stat_pending: "Pending Review", stat_pending_sub: "In the open edition",
    current_issue: "Current Issue", rename_btn: "Rename", stories_collected: "{{n}} stories collected so far",
    next_print_run: "Next automated print run in {{days}} day(s).",
    adjust_release: "Adjust release date", adjust_release_sub: "Reschedule current cycle",
    recent_activity: "Recent Activity", activity_submitted: "{{name}} submitted a new story",
    no_activity: "No activity yet.",

    admin_accounts_title: "Accounts", create_account_btn: "Create New Account",
    th_name_role: "Name & Role", th_joined: "Joined", th_stories: "Stories", th_last_active: "Last Active", th_actions: "Actions",
    never_active: "—", action_edit: "Edit", action_delete: "Delete", action_view: "View",

    admin_papers_title: "Papers", th_number: "Number", th_release_date: "Release date",
    status_ongoing: "On going", status_closed: "Submitted", view_stories_btn: "View Stories",

    admin_stories_title: "Paper nr. {{n}}", filter_placeholder: "Filter submitted stories by author or content...",
    active_filters: "Active Filters",
    amount_stories: "Amount of stories: {{n}}", status_label: "Status: {{status}}", go_back_papers: "Go back to all Papers",
    photos_count_0: "no photos attached", photos_count_1: "1 photo attached", photos_count_n: "{{n}} photos attached",

    create_account_title: "Create New Account", edit_account_title: "Edit Account",
    delete_account_title: "Delete account?",
    delete_account_body: "Deleting {{name}}'s account removes their login. Stories already published in past papers stay exactly as they are — those can no longer be removed. Anything they're still drafting for the open edition will be deleted.",
    confirm_delete: "Delete account", rename_paper_title: "Rename paper", release_date_title: "Adjust release date",
    edit_story_title: "Edit story", delete_story_title: "Delete story?",
    delete_story_body: "This will permanently remove this story from the paper.",
    delete_story_confirm: "Delete story",

    time_just_now: "Just now", time_minutes_ago: "{{n}} min(s) ago", time_hours_ago: "{{n}} hour(s) ago",
    time_yesterday: "Yesterday", time_days_ago: "{{n}} days ago", time_weeks_ago: "{{n}} week(s) ago",
  },
  pt: {
    nav_login: "Entrar", loading: "A carregar...", press_starting: "A iniciar a gráfica...",
    firebase_warning: "O Firebase ainda não está configurado — edita firebase-config.js com as chaves do teu projeto.",
    cancel: "Cancelar", save: "Guardar", go_back: "Voltar",

    home_cta_submit: "Enviar uma história", home_cta_submit_sub: "Para família & amigos",

    home_hi: "Olá, {{name}}", home_intro: "Fazes parte do jornal digital de {{name}}, escreve algumas histórias divertidas para {{name}}",
    deadline_pill: "Prazo do próximo jornal: {{date}}",
    action_mystories: "As minhas histórias", action_mystories_sub: "Histórias enviadas anteriormente",
    action_paperweek: "Jornal da semana", action_paperweek_sub: "o próximo jornal será a {{date}}",

    dropdown_submit: "Enviar uma história", dropdown_mystories: "As minhas histórias", dropdown_logout: "Sair",

    login_title: "Entrar", login_lede: "Inicia sessão para que {{name}} saiba quem está a enviar essas histórias maravilhosas",
    field_name: "Nome", field_password: "Palavra-passe", btn_login: "Entrar",
    link_no_account: "Ainda não tens conta?", link_have_account: "Já tens conta? Entra",
    err_login_notfound: "Não encontrámos nenhuma conta com esse nome.", err_login_wrongpass: "Essa palavra-passe está errada.",

    register_title: "Criar conta", register_lede: "Introduz os teus dados, para que {{name}} saiba quem está a enviar essas histórias maravilhosas",
    field_relationship: "Relação com {{name}}", field_relationship_placeholder: "Irmã, Mãe, Amiga",
    btn_submit: "Enviar", err_register_exists: "Esse nome já está a ser usado — tenta entrar em vez disso.",
    err_register_fields: "Preenche todos os campos.", err_register_password_short: "Escolhe uma palavra-passe com pelo menos 4 caracteres.",

    submit_title: "Enviar uma história", submit_lede: "Escreve uma mensagem para {{name}} e adiciona até 2 fotos. Podes editar a tua história até 1 dia antes do jornal ser feito.",
    field_story: "A tua história", field_story_placeholder: "Escreve a tua memória, piada interna ou novidade aqui...",
    field_photos: "Anexa fotos (máximo 2)", upload_first: "Carregar primeira foto", upload_second: "Carregar segunda foto (opcional)",
    btn_submit_story: "Enviar história", btn_update_story: "Atualizar história",
    success_saved: "Guardado! Isto vai aparecer na edição #{{n}}, pronta a {{end}}.",
    err_empty_story: "Escreve uma história antes de guardar.", err_save_failed: "Algo correu mal ao guardar. Tenta novamente.",
    delete_submission: "Eliminar a minha submissão", deleted_msg: "A tua submissão foi eliminada.",
    edition_deadline_msg: "Podes editar o teu texto até {{deadline}} ({{days}} dia(s) restantes).",
    edition_closed_msg: "As submissões para esta edição estão encerradas. A próxima edição (#{{n}}) começa a {{end}}.",

    mystories_title: "As minhas histórias", mystories_lede: "Aqui estão todas as histórias que enviaste para os jornais de {{name}}.",
    mystories_empty: "Ainda não enviaste nenhuma história.",
    submitted_on: "Enviado a {{date}}", status_editable_until: "Editável até {{date}}",
    status_published_in: "Publicado no Jornal #{{n}}", edit_story_link: "Editar história", view_story_link: "Ver história",

    papers_title: "Todos os Jornais", release_label: "Lançamento: {{date}}", view_paper_btn: "Ver Jornal",
    papers_empty: "Ainda não foi feito nenhum jornal.",

    np_empty: "Nenhuma história nesta edição.", np_by: "Por {{name}}",
    edition_label: "Edição #{{n}}",

    admin_portal_sub: "PORTAL DO SISTEMA", admin_nav_dashboard: "Painel", admin_nav_accounts: "Contas",
    admin_nav_papers: "Jornais", admin_nav_stories: "Histórias", admin_administrator: "Administradora",
    admin_active_session: "Sessão ativa",
    admin_overview: "Visão geral", stat_active_accounts: "Contas Ativas", stat_accounts_sub: "{{n}} contas no total",
    stat_stories: "Histórias Enviadas", stat_stories_sub: "Média de {{avg}} histórias por pessoa",
    stat_pending: "Por Publicar", stat_pending_sub: "Na edição em aberto",
    current_issue: "Edição Atual", rename_btn: "Renomear", stories_collected: "{{n}} histórias recolhidas até agora",
    next_print_run: "Próxima impressão automática em {{days}} dia(s).",
    adjust_release: "Ajustar data de lançamento", adjust_release_sub: "Reagendar ciclo atual",
    recent_activity: "Atividade Recente", activity_submitted: "{{name}} enviou uma nova história",
    no_activity: "Ainda sem atividade.",

    admin_accounts_title: "Contas", create_account_btn: "Criar Nova Conta",
    th_name_role: "Nome & Relação", th_joined: "Registada em", th_stories: "Histórias", th_last_active: "Última Atividade", th_actions: "Ações",
    never_active: "—", action_edit: "Editar", action_delete: "Eliminar", action_view: "Ver",

    admin_papers_title: "Jornais", th_number: "Número", th_release_date: "Data de lançamento",
    status_ongoing: "Em curso", status_closed: "Enviado", view_stories_btn: "Ver Histórias",

    admin_stories_title: "Jornal nº {{n}}", filter_placeholder: "Filtrar histórias por autor ou conteúdo...",
    active_filters: "Filtros Ativos",
    amount_stories: "Número de histórias: {{n}}", status_label: "Estado: {{status}}", go_back_papers: "Voltar a todos os Jornais",
    photos_count_0: "sem fotos anexadas", photos_count_1: "1 foto anexada", photos_count_n: "{{n}} fotos anexadas",

    create_account_title: "Criar Nova Conta", edit_account_title: "Editar Conta",
    delete_account_title: "Eliminar conta?",
    delete_account_body: "Eliminar a conta de {{name}} remove o seu acesso. As histórias já publicadas em jornais anteriores mantêm-se exatamente como estão — essas já não podem ser removidas. Tudo o que ainda esteja em rascunho para a edição em aberto será eliminado.",
    confirm_delete: "Eliminar conta", rename_paper_title: "Renomear jornal", release_date_title: "Ajustar data de lançamento",
    edit_story_title: "Editar história", delete_story_title: "Eliminar história?",
    delete_story_body: "Isto remove permanentemente esta história do jornal.",
    delete_story_confirm: "Eliminar história",

    time_just_now: "Agora mesmo", time_minutes_ago: "há {{n}} min", time_hours_ago: "há {{n}} hora(s)",
    time_yesterday: "Ontem", time_days_ago: "há {{n}} dia(s)", time_weeks_ago: "há {{n}} semana(s)",
  },
};

function t(key, vars) {
  const dict = STRINGS[state.lang] || STRINGS.en;
  let str = dict[key] !== undefined ? dict[key] : STRINGS.en[key] || key;
  if (vars) Object.keys(vars).forEach((k) => { str = str.replace(new RegExp(`{{${k}}}`, "g"), vars[k]); });
  return str;
}
function fmt(date) { return date.toLocaleDateString(LOCALES[state.lang] || "en-GB", { day: "numeric", month: "long", year: "numeric" }); }
function fmtShort(date) { return date.toLocaleDateString(LOCALES[state.lang] || "en-GB", { day: "numeric", month: "short" }); }
function daysLeft(target) { return Math.max(0, Math.ceil((target - new Date()) / (24 * 3600 * 1000))); }
function sanitizeKey(name) { return (name || "").trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "anon"; }
function escapeHtml(s) { return (s || "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])); }

function fmtRelative(ts) {
  if (!ts) return t("never_active");
  const diffMs = Date.now() - ts;
  const min = Math.floor(diffMs / 60000);
  if (min < 1) return t("time_just_now");
  if (min < 60) return t("time_minutes_ago", { n: min });
  const hrs = Math.floor(min / 60);
  if (hrs < 24) return t("time_hours_ago", { n: hrs });
  const days = Math.floor(hrs / 24);
  if (days === 1) return t("time_yesterday");
  if (days < 7) return t("time_days_ago", { n: days });
  return t("time_weeks_ago", { n: Math.floor(days / 7) });
}

/* Edition math — supports a one-off admin override of the *current* edition's end date */
function editionStart(i, anchor) {
  if (i <= 0) return new Date(anchor.getTime());
  return editionEnd(i - 1, anchor);
}
function editionEnd(i, anchor) {
  const cfg = state.config;
  if (cfg && cfg.editionOverrideIndex === i && cfg.editionOverrideEnd) return new Date(cfg.editionOverrideEnd);
  return new Date(editionStart(i, anchor).getTime() + EDITION_MS);
}
function editionIndexFor(date, anchor) {
  let i = 0;
  while (editionEnd(i, anchor).getTime() <= date.getTime() && i < 5000) i++;
  return i;
}
function editionDeadline(i, anchor) { const d = new Date(editionEnd(i, anchor)); d.setDate(d.getDate() - 1); d.setHours(23, 59, 59, 999); return d; }

/* ---------- Firestore helpers ---------- */
function firebaseReady() {
  try { return !!db && firebaseConfig.apiKey !== "PASTE_YOUR_API_KEY_HERE"; } catch (e) { return false; }
}
async function fsGetConfig() {
  if (!firebaseReady()) return null;
  try { const doc = await db.collection("meta").doc("config").get(); return doc.exists ? doc.data() : null; } catch (e) { return null; }
}
async function fsSetConfig(obj) {
  if (!firebaseReady()) return false;
  try { await db.collection("meta").doc("config").set(obj); return true; } catch (e) { return false; }
}
async function fsGetAccount(nameKey) {
  if (!firebaseReady()) return null;
  try { const doc = await db.collection("accounts").doc(nameKey).get(); return doc.exists ? doc.data() : null; } catch (e) { return null; }
}
async function fsSetAccount(nameKey, obj) {
  if (!firebaseReady()) return false;
  try { await db.collection("accounts").doc(nameKey).set(obj); return true; } catch (e) { return false; }
}
async function fsDeleteAccount(nameKey) {
  if (!firebaseReady()) return false;
  try { await db.collection("accounts").doc(nameKey).delete(); return true; } catch (e) { return false; }
}
async function fsListAccounts() {
  if (!firebaseReady()) return [];
  try { const snap = await db.collection("accounts").get(); return snap.docs.map((d) => d.data()); } catch (e) { return []; }
}
async function fsGetSubmission(editionIndex, nameKey) {
  if (!firebaseReady()) return null;
  try { const doc = await db.collection("submissions").doc(`${editionIndex}_${nameKey}`).get(); return doc.exists ? doc.data() : null; } catch (e) { return null; }
}
async function fsSetSubmission(editionIndex, nameKey, obj) {
  if (!firebaseReady()) return false;
  try { await db.collection("submissions").doc(`${editionIndex}_${nameKey}`).set({ ...obj, editionIndex, nameKey }); return true; } catch (e) { return false; }
}
async function fsDeleteSubmission(editionIndex, nameKey) {
  if (!firebaseReady()) return false;
  try { await db.collection("submissions").doc(`${editionIndex}_${nameKey}`).delete(); return true; } catch (e) { return false; }
}
async function fsListSubmissions(editionIndex) {
  if (!firebaseReady()) return [];
  try {
    const snap = await db.collection("submissions").where("editionIndex", "==", editionIndex).get();
    return snap.docs.map((d) => d.data());
  } catch (e) { return []; }
}
async function fsListSubmissionsByName(nameKey) {
  if (!firebaseReady()) return [];
  try {
    const snap = await db.collection("submissions").where("nameKey", "==", nameKey).get();
    return snap.docs.map((d) => d.data());
  } catch (e) { return []; }
}
async function fsListAllSubmissions() {
  if (!firebaseReady()) return [];
  try { const snap = await db.collection("submissions").get(); return snap.docs.map((d) => d.data()); } catch (e) { return []; }
}

async function resizeImage(file, maxW = 700, quality = 0.7) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const scale = Math.min(1, maxW / img.width);
        const w = Math.round(img.width * scale), h = Math.round(img.height * scale);
        const canvas = document.createElement("canvas");
        canvas.width = w; canvas.height = h;
        canvas.getContext("2d").drawImage(img, 0, 0, w, h);
        resolve(canvas.toDataURL("image/jpeg", quality));
      };
      img.onerror = reject;
      img.src = e.target.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

/* ---------- Global state ---------- */
const state = { config: null, lang: "en", view: "home", user: null, loading: true, showUserMenu: false };

const loginState = { name: "", password: "", error: "", loading: false };
const registerState = { name: "", password: "", relationship: "", error: "", loading: false };
const submitState = { story: "", photos: [null, null], savedAt: null, status: "", loading: false };
const myStoriesState = { items: [], loading: true, viewing: null };
const papersState = { editions: [], loading: true };
const readingState = { index: null, articles: [], loading: false, returnView: "papers" };
const adminState = {
  section: "dashboard", loading: true,
  accounts: [], submissions: [],
  papersSelected: null, storiesSearch: "",
  modal: null, // { type: 'createAccount'|'editAccount'|'deleteAccount'|'renamePaper'|'releaseDate'|'editStory'|'deleteStory'|'viewStory', payload }
  modalError: "", modalLoading: false,
};

const app = document.getElementById("app");

function resetLogin() { Object.assign(loginState, { name: "", password: "", error: "", loading: false }); }
function resetRegister() { Object.assign(registerState, { name: "", password: "", relationship: "", error: "", loading: false }); }
function resetSubmit() { Object.assign(submitState, { story: "", photos: [null, null], savedAt: null, status: "", loading: false }); submitLoadedFor = null; }
function resetMyStories() { myStoriesState.items = []; myStoriesState.loading = true; myStoriesState.viewing = null; myStoriesLoaded = false; }

async function init() {
  const cfg = await fsGetConfig();
  if (cfg) state.config = { ...DEFAULT_CONFIG, ...cfg };
  else { await fsSetConfig(DEFAULT_CONFIG); state.config = DEFAULT_CONFIG; }
  state.loading = false;
  render();
}

/* ---------- Rendering helpers ---------- */
function h(tag, attrs, children) {
  const node = document.createElement(tag);
  attrs = attrs || {};
  Object.keys(attrs).forEach((k) => {
    if (k === "class") node.className = attrs[k];
    else if (k.startsWith("on") && typeof attrs[k] === "function") node.addEventListener(k.slice(2), attrs[k]);
    else if (k === "html") node.innerHTML = attrs[k];
    else node.setAttribute(k, attrs[k]);
  });
  (children || []).forEach((c) => { if (c || c === 0) node.appendChild(typeof c === "string" || typeof c === "number" ? document.createTextNode(c) : c); });
  return node;
}
function icon(name, opts) {
  opts = opts || {};
  return h("img", { src: `Assets/icons/${name}.svg`, class: opts.class || "icon", alt: "", style: opts.flip ? "transform:rotate(180deg)" : "" });
}
function isAdmin(user) { return !!user && (user.nameKey === "evy" || user.role === "admin"); }

function pillButton(label, onClick, opts) {
  opts = opts || {};
  const children = opts.noArrow ? [label] : [label, icon("arrow", { flip: true })];
  const btn = h("button", { class: "pill-btn-primary", onclick: onClick }, children);
  if (opts.disabled) btn.disabled = true;
  return btn;
}
function underlineButton(label, sub, onClick) {
  const row = h("span", { class: "underline-btn-row" }, [label, icon("arrow", { flip: true })]);
  const btn = h("button", { class: "underline-btn", onclick: onClick }, [row]);
  if (sub) btn.appendChild(h("small", {}, [sub]));
  return btn;
}
function backLink(label, onClick, opts) {
  const onDark = opts && opts.onDark;
  return h("button", { class: "back-link" + (onDark ? " on-dark" : ""), onclick: onClick }, [icon("arrow"), label]);
}

function render() {
  app.innerHTML = "";
  if (state.loading || !state.config) {
    app.appendChild(h("p", { style: "text-align:center;padding-top:60px;color:#b59a95;font-family:'Cutive Mono',monospace" }, [t("press_starting")]));
    return;
  }
  if (state.view === "admin" && !isAdmin(state.user)) state.view = "home";
  if (state.view === "admin") { app.appendChild(buildAdmin()); return; }
  if ((state.view === "papers" || state.view === "reading" || state.view === "submit" || state.view === "mystories") && !state.user) { resetLogin(); state.view = "login"; }

  const site = h("div", { class: "site" });
  if (!firebaseReady()) site.appendChild(h("div", { class: "fb-warning" }, [t("firebase_warning")]));
  site.appendChild(buildTopbar());
  const page = h("div", { class: "page" });
  if (state.view === "home") page.appendChild(buildHome());
  else if (state.view === "login") page.appendChild(buildLogin());
  else if (state.view === "register") page.appendChild(buildRegister());
  else if (state.view === "submit") page.appendChild(buildSubmit());
  else if (state.view === "mystories") page.appendChild(buildMyStories());
  else if (state.view === "papers") page.appendChild(buildPapers());
  else if (state.view === "reading") page.appendChild(buildReading());
  site.appendChild(page);
  app.appendChild(site);
  if (myStoriesState.viewing) app.appendChild(buildViewStoryModal());
}

function goHome() { state.view = isAdmin(state.user) ? "admin" : "home"; if (isAdmin(state.user)) adminState.section = "dashboard"; render(); }

function buildTopbar() {
  const nav = h("div", { class: "topbar" });
  nav.appendChild(h("div", { class: "brand", onclick: goHome }, ["Paper Stories"]));
  const right = h("div", { class: "topbar-right" });
  const langSwitch = h("div", { class: "lang-switch" });
  ["en", "pt"].forEach((l) => {
    langSwitch.appendChild(h("button", { class: state.lang === l ? "active" : "", onclick: () => { state.lang = l; render(); } }, [l.toUpperCase()]));
  });
  right.appendChild(langSwitch);
  if (state.user) {
    right.appendChild(buildUserTrigger());
  } else {
    right.appendChild(h("button", { class: "pill-btn", onclick: () => { resetLogin(); state.view = "login"; render(); } }, [t("nav_login")]));
  }
  nav.appendChild(right);
  return nav;
}

function buildUserTrigger() {
  const wrap = h("div", { class: "user-trigger" });
  const initial = (state.user.name || "?").trim().charAt(0).toUpperCase();
  wrap.appendChild(h("button", { class: "avatar-circle", onclick: (e) => { e.stopPropagation(); state.showUserMenu = !state.showUserMenu; render(); } }, [initial]));
  if (state.showUserMenu) {
    const dd = h("div", { class: "user-dropdown" });
    dd.appendChild(h("div", {}, [h("div", { class: "u-name" }, [state.user.name]), h("div", { class: "u-role" }, [state.user.relationship || ""])]));
    dd.appendChild(h("hr"));
    const menu = h("div", { class: "u-menu" });
    menu.appendChild(h("button", { class: "u-menu-link", onclick: () => { state.showUserMenu = false; resetSubmit(); state.view = "submit"; render(); } }, [icon("edit"), t("dropdown_submit")]));
    menu.appendChild(h("button", { class: "u-menu-link", onclick: () => { state.showUserMenu = false; resetMyStories(); state.view = "mystories"; render(); } }, [icon("folder"), t("dropdown_mystories")]));
    menu.appendChild(h("button", { class: "u-menu-link", onclick: () => { logout(); } }, [t("dropdown_logout")]));
    dd.appendChild(menu);
    wrap.appendChild(dd);
  }
  return wrap;
}
function logout() { state.user = null; state.showUserMenu = false; state.view = "home"; render(); }

/* ---------- Home ---------- */
function buildSplitScriptTitle(title) {
  const words = (title || "").trim().split(/\s+/);
  if (words.length <= 1) return h("p", { class: "script-title xl" }, [title]);
  const last = words.pop();
  return h("p", { class: "script-title xl", style: "line-height:0.88" }, [words.join(" "), h("br"), last]);
}

function buildHome() {
  const wrap = h("div", { class: "narrow", style: "max-width:480px" });
  const card = h("div", { class: "paper-card", style: "max-width:480px;aspect-ratio:480/616;overflow:visible" });
  const anchor = new Date(state.config.anchorDate);
  const currentIndex = editionIndexFor(new Date(), anchor);
  const end = editionEnd(currentIndex, anchor);

  const split = h("div", { class: "hero-split" });
  const left = h("div", { class: "hero-left" });

  if (state.user) {
    left.appendChild(h("div", { style: "color:var(--display);font-family:'Cutive Mono',monospace;font-size:12px;padding:10px 10px 6px" }, [t("deadline_pill", { date: fmtShort(end) })]));
    left.appendChild(h("p", { class: "script-title md" }, [t("home_hi", { name: state.user.name })]));
    left.appendChild(h("p", { class: "paper-lede" }, [t("home_intro", { name: state.config.recipientName })]));
  } else {
    left.appendChild(h("p", { class: "paper-lede", style: "margin:0 0 15px" }, [state.config.tagline]));
    left.appendChild(buildSplitScriptTitle(state.config.mastheadTitle));
  }

  const actions = h("div", { class: "hero-actions" });
  if (state.user) {
    actions.appendChild(underlineButton(t("home_cta_submit"), null, () => { resetSubmit(); state.view = "submit"; render(); }));
    actions.appendChild(underlineButton(t("action_mystories"), t("action_mystories_sub"), () => { resetMyStories(); state.view = "mystories"; render(); }));
  } else {
    actions.appendChild(underlineButton(t("home_cta_submit"), t("home_cta_submit_sub"), () => { resetLogin(); state.view = "login"; render(); }));
  }
  actions.appendChild(underlineButton(t("action_paperweek"), t("action_paperweek_sub", { date: fmtShort(end) }), () => { state.view = "papers"; render(); }));
  left.appendChild(actions);
  split.appendChild(left);
  split.appendChild(buildCollage());
  card.appendChild(split);

  wrap.appendChild(card);
  return wrap;
}

/* Positions/rotations below are derived directly from the Figma source (node 2:2 "Fotos" group,
   absolute px offsets converted to % of its 400x547.563 bounding box) — do not eyeball these. */
function buildCollage() {
  const outer = h("div", { class: "hero-collage-outer" });
  const wrap = h("div", { class: "hero-collage" });
  wrap.appendChild(h("img", { src: "Assets/Ticket.png", style: "left:56.52%;top:85.30%;width:82.75%;height:36.16%;transform:translate(-50%,-50%) rotate(1.51deg);z-index:1" }));
  wrap.appendChild(h("img", { src: "Assets/navegante-card.jpg", style: "left:60.03%;top:26.19%;width:67.25%;height:29.92%;border-radius:14px;transform:translate(-50%,-50%) rotate(84.67deg);z-index:2" }));
  wrap.appendChild(h("img", { src: "Assets/Foto of Cleyton.jpg", style: "left:39.42%;top:44.00%;width:65.50%;height:63.92%;border-radius:1px;transform:translate(-50%,-50%) rotate(-3.9deg);z-index:3" }));
  wrap.appendChild(h("img", { src: "Assets/Paper_clip_PNG21.png", style: "left:43.39%;top:13.79%;width:26.31%;height:12.81%;transform:translate(-50%,-50%) rotate(54.62deg);z-index:4" }));
  outer.appendChild(wrap);
  return outer;
}

/* ---------- Login ---------- */
function buildLogin() {
  const wrap = h("div", { class: "narrow", style: "max-width:480px" });
  const card = h("div", { class: "paper-card", style: "max-width:480px" });
  card.appendChild(backLink(t("go_back"), () => { state.view = "home"; render(); }));
  card.appendChild(h("p", { class: "script-title xl" }, [t("login_title")]));
  card.appendChild(h("p", { class: "paper-lede" }, [t("login_lede", { name: state.config.recipientName })]));
  card.appendChild(h("hr", { class: "paper-hr" }));

  const nameGroup = h("div", { class: "field-group" });
  nameGroup.appendChild(h("div", { class: "field-label" }, [t("field_name"), h("span", { class: "req" }, ["*"])]));
  const nameInput = h("input", { class: "text-input", value: loginState.name });
  nameInput.addEventListener("input", (e) => { loginState.name = e.target.value; });
  nameGroup.appendChild(nameInput);
  card.appendChild(nameGroup);

  const passGroup = h("div", { class: "field-group" });
  passGroup.appendChild(h("div", { class: "field-label" }, [t("field_password"), h("span", { class: "req" }, ["*"])]));
  const passInput = h("input", { class: "text-input", type: "password", value: loginState.password });
  passInput.addEventListener("input", (e) => { loginState.password = e.target.value; });
  passInput.addEventListener("keydown", (e) => { if (e.key === "Enter") doLogin(); });
  passGroup.appendChild(passInput);
  card.appendChild(passGroup);

  if (loginState.error) card.appendChild(h("p", { class: "error-text" }, [loginState.error]));

  const endRow = h("div", { class: "form-end" });
  endRow.appendChild(pillButton(loginState.loading ? t("loading") : t("btn_login"), doLogin, { disabled: loginState.loading }));
  card.appendChild(endRow);

  card.appendChild(h("hr", { class: "paper-hr" }));
  card.appendChild(underlineButton(t("link_no_account"), null, () => { resetRegister(); registerState.name = loginState.name; state.view = "register"; render(); }));

  wrap.appendChild(card);
  return wrap;
}

async function doLogin() {
  if (!loginState.name.trim() || !loginState.password) return;
  loginState.loading = true; loginState.error = ""; render();
  const key = sanitizeKey(loginState.name);
  const acc = await fsGetAccount(key);
  loginState.loading = false;
  if (!acc) { loginState.error = t("err_login_notfound"); render(); return; }
  if (acc.password !== loginState.password) { loginState.error = t("err_login_wrongpass"); render(); return; }
  state.user = acc;
  if (isAdmin(acc)) { state.view = "admin"; adminState.section = "dashboard"; loadAdminData(); }
  else { state.view = "home"; render(); }
}

/* ---------- Register ---------- */
function buildRegister() {
  const wrap = h("div", { class: "narrow", style: "max-width:480px" });
  const card = h("div", { class: "paper-card", style: "max-width:480px" });
  card.appendChild(backLink(t("go_back"), () => { state.view = "login"; render(); }));
  card.appendChild(h("p", { class: "script-title md" }, [t("register_title")]));
  card.appendChild(h("p", { class: "paper-lede" }, [t("register_lede", { name: state.config.recipientName })]));
  card.appendChild(h("hr", { class: "paper-hr" }));

  const nameGroup = h("div", { class: "field-group" });
  nameGroup.appendChild(h("div", { class: "field-label" }, [t("field_name"), h("span", { class: "req" }, ["*"])]));
  const nameInput = h("input", { class: "text-input", value: registerState.name });
  nameInput.addEventListener("input", (e) => { registerState.name = e.target.value; });
  nameGroup.appendChild(nameInput);
  card.appendChild(nameGroup);

  const passGroup = h("div", { class: "field-group" });
  passGroup.appendChild(h("div", { class: "field-label" }, [t("field_password"), h("span", { class: "req" }, ["*"])]));
  const passInput = h("input", { class: "text-input", type: "password", value: registerState.password });
  passInput.addEventListener("input", (e) => { registerState.password = e.target.value; });
  passGroup.appendChild(passInput);
  card.appendChild(passGroup);

  const relGroup = h("div", { class: "field-group" });
  relGroup.appendChild(h("div", { class: "field-label" }, [t("field_relationship", { name: state.config.recipientName }), h("span", { class: "req" }, ["*"])]));
  const relInput = h("input", { class: "text-input", placeholder: t("field_relationship_placeholder"), value: registerState.relationship });
  relInput.addEventListener("input", (e) => { registerState.relationship = e.target.value; });
  relInput.addEventListener("keydown", (e) => { if (e.key === "Enter") doRegister(); });
  relGroup.appendChild(relInput);
  card.appendChild(relGroup);

  if (registerState.error) card.appendChild(h("p", { class: "error-text" }, [registerState.error]));

  const endRow = h("div", { class: "form-end" });
  endRow.appendChild(pillButton(registerState.loading ? t("loading") : t("btn_submit"), doRegister, { disabled: registerState.loading }));
  card.appendChild(endRow);

  card.appendChild(h("hr", { class: "paper-hr" }));
  card.appendChild(underlineButton(t("link_have_account"), null, () => { state.view = "login"; render(); }));

  wrap.appendChild(card);
  return wrap;
}

async function doRegister() {
  if (!registerState.name.trim() || !registerState.password || !registerState.relationship.trim()) {
    registerState.error = t("err_register_fields"); render(); return;
  }
  if (registerState.password.length < 4) { registerState.error = t("err_register_password_short"); render(); return; }
  registerState.loading = true; registerState.error = ""; render();
  const key = sanitizeKey(registerState.name);
  const existing = await fsGetAccount(key);
  if (existing) { registerState.loading = false; registerState.error = t("err_register_exists"); render(); return; }
  const acc = {
    name: registerState.name.trim(), nameKey: key, password: registerState.password,
    relationship: registerState.relationship.trim(), role: key === "evy" ? "admin" : "member",
    createdAt: Date.now(),
  };
  await fsSetAccount(key, acc);
  registerState.loading = false;
  state.user = acc;
  if (isAdmin(acc)) { state.view = "admin"; adminState.section = "dashboard"; loadAdminData(); }
  else { state.view = "home"; render(); }
}

/* ---------- Submit a story ---------- */
function buildSubmit() {
  const anchor = new Date(state.config.anchorDate);
  const editionIndex = editionIndexFor(new Date(), anchor);
  const end = editionEnd(editionIndex, anchor);
  const deadline = editionDeadline(editionIndex, anchor);
  const locked = new Date() > deadline;

  const wrap = h("div", { class: "narrow", style: "max-width:580px" });
  const card = h("div", { class: "paper-card", style: "max-width:580px" });
  card.appendChild(backLink(t("go_back"), () => { state.view = "home"; render(); }));
  card.appendChild(h("p", { class: "script-title lg" }, [t("submit_title")]));
  card.appendChild(h("p", { class: "paper-lede" }, [t("submit_lede", { name: state.config.recipientName })]));
  card.appendChild(h("hr", { class: "paper-hr" }));

  if (locked) card.appendChild(h("p", { class: "banner" }, [t("edition_closed_msg", { n: editionIndex + 2, end: fmt(end) })]));
  else card.appendChild(h("p", { class: "banner" }, [t("edition_deadline_msg", { deadline: fmt(deadline), days: daysLeft(deadline) })]));

  if (submitState.loading) card.appendChild(h("p", {}, [h("em", {}, [t("loading")])]));

  const storyGroup = h("div", { class: "field-group" });
  storyGroup.appendChild(h("div", { class: "field-label" }, [t("field_story"), h("span", { class: "req" }, ["*"])]));
  const textarea = h("textarea", { class: "text-input", placeholder: t("field_story_placeholder") });
  textarea.value = submitState.story;
  if (locked) textarea.disabled = true;
  textarea.addEventListener("input", (e) => { submitState.story = e.target.value; });
  storyGroup.appendChild(textarea);
  card.appendChild(storyGroup);

  const photoGroup = h("div", { class: "field-group" });
  photoGroup.appendChild(h("div", { class: "field-label" }, [t("field_photos")]));
  const grid = h("div", { class: "uploader-grid" });
  [0, 1].forEach((i) => grid.appendChild(buildUploader(i, locked)));
  photoGroup.appendChild(grid);
  card.appendChild(photoGroup);

  if (submitState.status) card.appendChild(h("p", { class: "banner" }, [submitState.status]));

  if (!locked) {
    const row = h("div", { style: "display:flex;gap:16px;align-items:center;justify-content:flex-end;flex-wrap:wrap" });
    if (submitState.savedAt) row.appendChild(h("button", { class: "underline-btn", onclick: () => deleteMySubmission(editionIndex) }, [h("span", { class: "underline-btn-row" }, [t("delete_submission")])]));
    row.appendChild(pillButton(submitState.savedAt ? t("btn_update_story") : t("btn_submit_story"), () => submitStory(editionIndex, end)));
    card.appendChild(row);
  }

  wrap.appendChild(card);
  loadMySubmission(editionIndex);
  return wrap;
}

function buildUploader(index, locked) {
  const val = submitState.photos[index];
  const box = h("div", { class: "uploader" });
  if (val) {
    box.appendChild(h("img", { class: "preview", src: val }));
    if (!locked) box.appendChild(h("button", { class: "remove-x", onclick: (e) => { e.stopPropagation(); submitState.photos[index] = null; render(); } }, ["×"]));
  } else {
    box.appendChild(icon(index === 0 ? "camera" : "image", { class: "icon" }));
    box.appendChild(h("span", {}, [index === 0 ? t("upload_first") : t("upload_second")]));
    if (!locked) {
      const fileInput = h("input", { type: "file", accept: "image/*", style: "display:none" });
      fileInput.addEventListener("change", async (e) => {
        const file = e.target.files[0]; if (!file) return;
        try { submitState.photos[index] = await resizeImage(file); render(); } catch (err) { submitState.status = t("err_save_failed"); render(); }
      });
      box.appendChild(fileInput);
      box.addEventListener("click", () => fileInput.click());
    }
  }
  return box;
}

let submitLoadedFor = null;
async function loadMySubmission(editionIndex) {
  if (submitLoadedFor === editionIndex || !state.user) return;
  submitLoadedFor = editionIndex;
  const sub = await fsGetSubmission(editionIndex, state.user.nameKey);
  if (sub) { submitState.story = sub.story || ""; submitState.photos = [sub.photos && sub.photos[0] || null, sub.photos && sub.photos[1] || null]; submitState.savedAt = sub.updatedAt || null; }
  render();
}
async function submitStory(editionIndex, end) {
  if (!submitState.story.trim()) { submitState.status = t("err_empty_story"); render(); return; }
  submitState.loading = true; render();
  const data = { name: state.user.name, story: submitState.story.trim(), photos: submitState.photos.filter(Boolean), updatedAt: Date.now() };
  const ok = await fsSetSubmission(editionIndex, state.user.nameKey, data);
  submitState.loading = false;
  submitState.status = ok ? t("success_saved", { n: editionIndex + 1, end: fmt(end) }) : t("err_save_failed");
  if (ok) submitState.savedAt = data.updatedAt;
  render();
}
async function deleteMySubmission(editionIndex) {
  submitState.loading = true; render();
  await fsDeleteSubmission(editionIndex, state.user.nameKey);
  Object.assign(submitState, { story: "", photos: [null, null], savedAt: null, status: t("deleted_msg"), loading: false });
  render();
}

/* ---------- All my stories ---------- */
function buildMyStories() {
  const wrap = h("div", { class: "narrow", style: "max-width:620px" });
  const card = h("div", { class: "paper-card", style: "max-width:620px" });
  card.appendChild(backLink(t("go_back"), () => { state.view = "home"; render(); }));
  card.appendChild(h("p", { class: "script-title lg" }, [t("mystories_title")]));
  card.appendChild(h("p", { class: "paper-lede" }, [t("mystories_lede", { name: state.config.recipientName })]));
  card.appendChild(h("hr", { class: "paper-hr" }));

  if (myStoriesState.loading) card.appendChild(h("p", {}, [h("em", {}, [t("loading")])]));
  else if (!myStoriesState.items.length) card.appendChild(h("p", { class: "story-excerpt" }, [t("mystories_empty")]));
  else {
    const anchor = new Date(state.config.anchorDate);
    const currentIndex = editionIndexFor(new Date(), anchor);
    myStoriesState.items.sort((a, b) => b.editionIndex - a.editionIndex).forEach((sub) => {
      const isOpen = sub.editionIndex === currentIndex;
      const item = h("div", { class: "story-item" });
      const photo = sub.photos && sub.photos[0];
      item.appendChild(photo ? h("img", { class: "story-thumb", src: photo }) : h("div", { class: "story-thumb placeholder" }));
      const details = h("div", { class: "story-details" });
      const metaRow = h("div", { class: "story-meta-row" });
      metaRow.appendChild(h("span", { style: "font-family:'Cormorant Garamond',serif;font-size:12px;opacity:0.6" }, [t("submitted_on", { date: fmt(new Date(sub.updatedAt)) })]));
      metaRow.appendChild(isOpen
        ? h("span", { class: "status-chip" }, [t("status_editable_until", { date: fmt(editionDeadline(sub.editionIndex, anchor)) })])
        : h("span", { class: "status-chip solid" }, [t("status_published_in", { n: sub.editionIndex + 1 })]));
      details.appendChild(metaRow);
      details.appendChild(h("p", { class: "story-excerpt" }, [`"${sub.story.length > 140 ? sub.story.slice(0, 140) + "…" : sub.story}"`]));
      details.appendChild(isOpen
        ? h("button", { class: "story-link", onclick: () => { resetSubmit(); state.view = "submit"; render(); } }, [icon("edit", { class: "icon" }), t("edit_story_link")])
        : h("button", { class: "story-link view", onclick: () => { myStoriesState.viewing = sub; render(); } }, [icon("eye-small", { class: "icon" }), t("view_story_link")]));
      item.appendChild(details);
      card.appendChild(item);
    });
  }
  wrap.appendChild(card);
  loadMyStories();
  return wrap;
}
let myStoriesLoaded = false;
async function loadMyStories() {
  if (myStoriesLoaded || !state.user) return;
  myStoriesLoaded = true;
  myStoriesState.items = await fsListSubmissionsByName(state.user.nameKey);
  myStoriesState.loading = false;
  render();
}
function buildViewStoryModal() {
  const sub = myStoriesState.viewing;
  const bg = h("div", { class: "modal-bg", onclick: () => { myStoriesState.viewing = null; render(); } });
  const modal = h("div", { class: "modal" });
  modal.addEventListener("click", (e) => e.stopPropagation());
  modal.appendChild(h("h3", {}, [t("status_published_in", { n: sub.editionIndex + 1 })]));
  (sub.photos || []).forEach((p) => modal.appendChild(h("img", { src: p, style: "width:100%;border-radius:4px;margin-bottom:10px" })));
  modal.appendChild(h("p", {}, [sub.story]));
  const actions = h("div", { class: "modal-actions" });
  actions.appendChild(h("button", { class: "text-btn", onclick: () => { myStoriesState.viewing = null; render(); } }, [t("cancel")]));
  modal.appendChild(actions);
  bg.appendChild(modal);
  return bg;
}

/* ---------- Papers (public archive) ---------- */
function buildPapers() {
  const anchor = new Date(state.config.anchorDate);
  const currentIndex = editionIndexFor(new Date(), anchor);
  const wrap = h("div", { class: "narrow", style: "max-width:1020px" });
  const card = h("div", { class: "paper-card", style: "max-width:1020px" });
  card.appendChild(backLink(t("go_back"), () => { state.view = "home"; render(); }));
  card.appendChild(h("p", { class: "script-title lg" }, [t("papers_title")]));
  card.appendChild(h("hr", { class: "paper-hr" }));

  if (papersState.loading) card.appendChild(h("p", {}, [h("em", {}, [t("loading")])]));
  else {
    for (let i = currentIndex; i >= 0; i--) {
      const published = i < currentIndex;
      const row = h("div", { class: "paper-row" + (published ? " published" : " locked") });
      row.appendChild(h("div", { class: "paper-row-num" }, [String(i + 1)]));
      const body = h("div", { class: "paper-row-body" });
      body.appendChild(h("span", { class: "paper-row-date" }, [fmt(editionEnd(i, anchor))]));
      if (published) {
        body.appendChild(h("button", { class: "pill-btn", onclick: () => openReading(i, "papers") }, [icon("eye-small", { class: "icon" }), t("view_paper_btn")]));
      } else {
        body.appendChild(h("span", { class: "pill-btn", style: "opacity:0.5" }, [t("release_label", { date: fmtShort(editionEnd(i, anchor)) })]));
      }
      row.appendChild(body);
      card.appendChild(row);
    }
    if (currentIndex === 0) card.appendChild(h("p", { class: "story-excerpt", style: "text-align:center;padding:20px 0" }, [t("papers_empty")]));
  }
  wrap.appendChild(card);
  loadPapers();
  return wrap;
}
let papersLoaded = false;
async function loadPapers() {
  if (papersLoaded) return;
  papersLoaded = true;
  papersState.loading = false;
  render();
}

/* ---------- Reading (newspaper) ---------- */
async function openReading(index, returnView) {
  readingState.index = index; readingState.returnView = returnView || "papers"; readingState.loading = true;
  state.view = "reading"; render();
  readingState.articles = await fsListSubmissions(index);
  readingState.loading = false;
  render();
}
function buildReading() {
  const anchor = new Date(state.config.anchorDate);
  const wrap = h("div", { class: "narrow", style: "max-width:1020px" });
  wrap.appendChild(backLink(t("go_back"), () => {
    if (readingState.returnView === "admin") { state.view = "admin"; adminState.section = "papers"; render(); }
    else { state.view = readingState.returnView; render(); }
  }, { onDark: true }));
  if (readingState.loading) { wrap.appendChild(h("p", {}, [h("em", {}, [t("loading")])])); return wrap; }
  const i = readingState.index;
  const start = editionStart(i, anchor), end = editionEnd(i, anchor);
  const sorted = [...readingState.articles].sort((a, b) => (a.updatedAt || 0) - (b.updatedAt || 0));
  wrap.appendChild(h("div", { class: "np-subbar" }, [`${t("edition_label", { n: i + 1 })} — ${fmt(start)} / ${fmt(end)}`]));
  if (!sorted.length) { wrap.appendChild(h("div", { class: "np-empty" }, [t("np_empty")])); return wrap; }
  const grid = h("div", { class: "np-grid" });
  sorted.forEach((a, idx) => {
    const featured = idx === 0;
    const art = h("div", { class: `np-article ${featured ? "np-featured" : ""}` });
    art.appendChild(h("p", { class: "np-byline" }, [t("np_by", { name: a.name }) + (a.updatedAt ? " · " + fmt(new Date(a.updatedAt)) : "")]));
    (a.photos || []).forEach((p) => art.appendChild(h("img", { class: "np-photo", src: p })));
    art.appendChild(h("p", { class: "np-body" }, [a.story]));
    grid.appendChild(art);
  });
  wrap.appendChild(grid);
  return wrap;
}

/* ================= ADMIN PORTAL ================= */
function buildAdmin() {
  const shell = h("div", { class: "site admin-shell" });
  const layout = h("div", { class: "admin-layout" });
  layout.appendChild(buildAdminSidebar());
  const main = h("div", { class: "admin-main" });
  if (adminState.section === "dashboard") main.appendChild(buildAdminDashboard());
  else if (adminState.section === "accounts") main.appendChild(buildAdminAccounts());
  else if (adminState.section === "papers") main.appendChild(buildAdminPapers());
  else if (adminState.section === "stories") main.appendChild(buildAdminStories());
  layout.appendChild(main);
  shell.appendChild(layout);
  if (adminState.modal) shell.appendChild(buildAdminModal());
  loadAdminData();
  return shell;
}

function buildAdminSidebar() {
  const side = h("div", { class: "admin-sidebar" });
  const brand = h("div", { class: "admin-brand" });
  brand.appendChild(h("p", { class: "script-title", style: "font-size:32px" }, ["Paper Stories"]));
  brand.appendChild(h("p", { class: "sub" }, [t("admin_portal_sub")]));
  side.appendChild(brand);

  const menu = h("div", { class: "admin-menu" });
  const items = [
    ["dashboard", "layout-dashboard", t("admin_nav_dashboard")],
    ["accounts", "users", t("admin_nav_accounts")],
    ["papers", "book-open", t("admin_nav_papers")],
    ["stories", "message-circle", t("admin_nav_stories")],
  ];
  items.forEach(([key, iconName, label]) => {
    menu.appendChild(h("button", { class: "admin-menu-item" + (adminState.section === key ? " active" : ""), onclick: () => { adminState.section = key; if (key === "stories") { const anchor = new Date(state.config.anchorDate); adminState.papersSelected = editionIndexFor(new Date(), anchor); } render(); } }, [icon(iconName), label]));
  });
  side.appendChild(menu);

  const footer = h("div", { class: "admin-sidebar-footer" });
  footer.appendChild(h("hr", { style: "border:none;border-top:1px solid var(--border-primary);width:100%;margin:0" }));
  const profile = h("div", { class: "admin-user-profile" });
  profile.appendChild(h("div", { class: "avatar-circle on-light" }, [(state.user.name || "E").charAt(0).toUpperCase()]));
  const meta = h("div", {});
  meta.appendChild(h("div", { class: "u-name" }, [state.user.name]));
  meta.appendChild(h("div", { class: "u-role" }, [t("admin_administrator")]));
  profile.appendChild(meta);
  footer.appendChild(profile);
  footer.appendChild(h("button", { class: "tiny-link", onclick: logout }, [t("dropdown_logout")]));
  side.appendChild(footer);
  return side;
}

let adminDataLoaded = false;
async function loadAdminData() {
  if (adminDataLoaded) return;
  adminDataLoaded = true;
  adminState.loading = true;
  const [accounts, submissions] = await Promise.all([fsListAccounts(), fsListAllSubmissions()]);
  adminState.accounts = accounts;
  adminState.submissions = submissions;
  adminState.loading = false;
  render();
}
function refreshAdminData() { adminDataLoaded = false; return loadAdminData(); }

function buildAdminDashboard() {
  const anchor = new Date(state.config.anchorDate);
  const currentIndex = editionIndexFor(new Date(), anchor);
  const wrap = h("div", {});
  const header = h("div", { class: "admin-header" });
  header.appendChild(h("h1", { class: "admin-title" }, [t("admin_overview")]));
  header.appendChild(h("span", { class: "admin-badge" }, [h("span", { class: "dot" }), t("admin_active_session")]));
  wrap.appendChild(header);

  if (adminState.loading) { wrap.appendChild(h("p", {}, [h("em", {}, [t("loading")])])); return wrap; }

  const accounts = adminState.accounts;
  const submissions = adminState.submissions;
  const pending = submissions.filter((s) => s.editionIndex === currentIndex).length;
  const avg = accounts.length ? (submissions.length / accounts.length).toFixed(1) : "0";

  const statsRow = h("div", { class: "stats-row" });
  statsRow.appendChild(buildStatTile("users", t("stat_active_accounts"), `${accounts.length}`, t("stat_accounts_sub", { n: accounts.length })));
  statsRow.appendChild(buildStatTile("message-circle", t("stat_stories"), `${submissions.length}`, t("stat_stories_sub", { avg })));
  statsRow.appendChild(buildStatTile("clock", t("stat_pending"), `${pending}`, t("stat_pending_sub")));
  wrap.appendChild(statsRow);

  const mid = h("div", { class: "mid-section" });
  const issueCard = h("div", { class: "admin-card" });
  const issueHead = h("div", { class: "admin-card-head" });
  issueHead.appendChild(h("h3", {}, [t("current_issue")]));
  issueHead.appendChild(h("button", { class: "tiny-link", onclick: () => openModal("renamePaper") }, [icon("pencil"), t("rename_btn")]));
  issueCard.appendChild(issueHead);
  const infoRow = h("div", { class: "paper-info-row" });
  infoRow.appendChild(h("div", { class: "polaroid" }, [h("img", { src: "Assets/Foto of Cleyton.jpg" })]));
  const details = h("div", {});
  details.appendChild(h("p", { class: "paper-name" }, [state.config.mastheadTitle]));
  const rs = h("div", { class: "release-status" });
  rs.appendChild(h("div", { class: "r1" }, [`Release: ${fmt(editionEnd(currentIndex, anchor))}`]));
  rs.appendChild(h("div", { class: "r2" }, [t("stories_collected", { n: pending })]));
  details.appendChild(rs);
  infoRow.appendChild(details);
  issueCard.appendChild(infoRow);
  issueCard.appendChild(h("hr", { class: "paper-hr", style: "margin:4px 0" }));
  const footRow = h("div", { class: "card-footer-row" });
  footRow.appendChild(h("span", { class: "note" }, [t("next_print_run", { days: daysLeft(editionEnd(currentIndex, anchor)) })]));
  footRow.appendChild(underlineButton(t("adjust_release"), t("adjust_release_sub"), () => openModal("releaseDate")));
  issueCard.appendChild(footRow);
  mid.appendChild(issueCard);

  const activityCard = h("div", { class: "admin-card" });
  activityCard.appendChild(h("h3", {}, [t("recent_activity")]));
  const stream = h("div", { class: "activity-stream" });
  const recent = [...submissions].sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0)).slice(0, 6);
  if (!recent.length) stream.appendChild(h("p", { class: "empty-note" }, [t("no_activity")]));
  recent.forEach((s) => {
    const row = h("div", { class: "activity-row" });
    const left = h("div", { class: "left" });
    left.appendChild(h("span", { class: "dot" }));
    left.appendChild(h("span", { class: "txt" }, [t("activity_submitted", { name: s.name })]));
    row.appendChild(left);
    row.appendChild(h("span", { class: "when" }, [fmtRelative(s.updatedAt)]));
    stream.appendChild(row);
  });
  activityCard.appendChild(stream);
  mid.appendChild(activityCard);
  wrap.appendChild(mid);
  return wrap;
}
function buildStatTile(iconName, label, value, sub) {
  const tile = h("div", { class: "stat-tile" });
  const top = h("div", { class: "stat-tile-top" });
  top.appendChild(h("span", {}, [label]));
  top.appendChild(icon(iconName));
  tile.appendChild(top);
  const bottom = h("div", {});
  bottom.appendChild(h("div", { class: "stat-value" }, [value]));
  bottom.appendChild(h("div", { class: "stat-sub" }, [sub]));
  tile.appendChild(bottom);
  return tile;
}

function buildAdminAccounts() {
  const wrap = h("div", {});
  const header = h("div", { class: "admin-header" });
  header.appendChild(h("h1", { class: "admin-title" }, [t("admin_accounts_title")]));
  header.appendChild(h("button", { class: "pill-btn-primary", onclick: () => openModal("createAccount") }, [icon("plus"), t("create_account_btn")]));
  wrap.appendChild(header);

  if (adminState.loading) { wrap.appendChild(h("p", {}, [h("em", {}, [t("loading")])])); return wrap; }

  const card = h("div", { class: "table-card" });
  const th = h("div", { class: "th-row" });
  th.appendChild(h("span", { class: "c-name" }, [t("th_name_role")]));
  th.appendChild(h("span", { class: "c-email" }, [t("th_joined")]));
  th.appendChild(h("span", { class: "c-stories" }, [t("th_stories")]));
  th.appendChild(h("span", { class: "c-active" }, [t("th_last_active")]));
  th.appendChild(h("span", { class: "c-actions" }, [t("th_actions")]));
  card.appendChild(th);

  adminState.accounts.forEach((acc) => {
    const mine = adminState.submissions.filter((s) => s.nameKey === acc.nameKey);
    const lastActive = mine.length ? Math.max(...mine.map((s) => s.updatedAt || 0)) : null;
    const row = h("div", { class: "acct-row" });
    const nameCell = h("div", { class: "acct-namecell" });
    nameCell.appendChild(h("div", { class: "avatar-circle on-light" }, [(acc.name || "?").charAt(0).toUpperCase()]));
    const nMeta = h("div", {});
    nMeta.appendChild(h("div", { class: "n" }, [acc.name]));
    nMeta.appendChild(h("div", { class: "r" }, [acc.relationship || (acc.role === "admin" ? t("admin_administrator") : "")]));
    nameCell.appendChild(nMeta);
    row.appendChild(nameCell);
    row.appendChild(h("span", { class: "acct-email" }, [acc.createdAt ? fmt(new Date(acc.createdAt)) : "—"]));
    row.appendChild(h("span", { class: "acct-stories" }, [String(mine.length)]));
    row.appendChild(h("span", { class: "acct-active" }, [fmtRelative(lastActive)]));
    const actions = h("div", { class: "acct-actions" });
    if (acc.nameKey !== "evy") {
      actions.appendChild(h("button", { class: "row-action edit", onclick: () => openModal("editAccount", acc) }, [icon("pencil2", { class: "icon" }), t("action_edit")]));
      actions.appendChild(h("button", { class: "row-action delete", onclick: () => openModal("deleteAccount", acc) }, [icon("trash", { class: "icon" }), t("action_delete")]));
    }
    row.appendChild(actions);
    card.appendChild(row);
  });
  wrap.appendChild(card);
  return wrap;
}

function buildAdminPapers() {
  const anchor = new Date(state.config.anchorDate);
  const currentIndex = editionIndexFor(new Date(), anchor);
  const wrap = h("div", {});
  const header = h("div", { class: "admin-header" });
  header.appendChild(h("h1", { class: "admin-title" }, [t("admin_papers_title")]));
  wrap.appendChild(header);

  const card = h("div", { class: "table-card" });
  const th = h("div", { class: "th-row" });
  th.appendChild(h("span", { style: "width:92px" }, [t("th_number")]));
  th.appendChild(h("span", {}, [t("th_release_date")]));
  card.appendChild(th);

  for (let i = currentIndex; i >= 0; i--) {
    const isOpen = i === currentIndex;
    const count = adminState.submissions.filter((s) => s.editionIndex === i).length;
    const row = h("div", { class: "papers-row" });
    row.appendChild(h("div", { class: "num-circle" }, [String(i + 1)]));
    const body = h("div", { class: "papers-row-body" });
    const left = h("div", { style: "display:flex;align-items:center;gap:20px" });
    left.appendChild(h("span", { class: "papers-row-date" }, [fmt(editionEnd(i, anchor))]));
    left.appendChild(h("span", { class: "admin-badge" + (!isOpen ? " solid" : "") }, [h("span", { class: "dot" }), isOpen ? t("status_ongoing") : t("status_closed")]));
    body.appendChild(left);
    const actions = h("div", { class: "papers-row-actions" });
    actions.appendChild(underlineButton(`${t("view_stories_btn")} (${count})`, null, () => { adminState.section = "stories"; adminState.papersSelected = i; adminState.storiesSearch = ""; render(); }));
    actions.appendChild(h("button", { class: "pill-btn", onclick: () => openReading(i, "admin") }, [icon("eye-small", { class: "icon" }), t("view_paper_btn")]));
    body.appendChild(actions);
    row.appendChild(body);
    card.appendChild(row);
  }
  wrap.appendChild(card);
  return wrap;
}

function buildAdminStories() {
  const anchor = new Date(state.config.anchorDate);
  const currentIndex = editionIndexFor(new Date(), anchor);
  const i = adminState.papersSelected != null ? adminState.papersSelected : currentIndex;
  const isOpen = i === currentIndex;
  const wrap = h("div", {});
  wrap.appendChild(h("button", { class: "back-link", onclick: () => { adminState.section = "papers"; render(); } }, [icon("arrow"), t("go_back_papers")]));

  const header = h("div", { class: "admin-header" });
  header.appendChild(h("h1", { class: "admin-title" }, [t("admin_stories_title", { n: i + 1 })]));
  const badges = h("div", { style: "display:flex;flex-direction:column;gap:6px;align-items:flex-end" });
  badges.appendChild(h("span", { class: "admin-badge" }, [h("span", { class: "dot" }), t("status_label", { status: isOpen ? t("status_ongoing") : t("status_closed") })]));
  const list = adminState.submissions.filter((s) => s.editionIndex === i);
  badges.appendChild(h("span", { class: "admin-badge" }, [t("amount_stories", { n: list.length })]));
  header.appendChild(badges);
  wrap.appendChild(header);

  const q = adminState.storiesSearch.trim().toLowerCase();
  const filterBar = h("div", { class: "filter-bar" });
  const searchWrap = h("div", { style: "flex:1;display:flex;align-items:center;gap:8px" });
  searchWrap.appendChild(icon("search"));
  const searchInput = h("input", { placeholder: t("filter_placeholder"), value: adminState.storiesSearch });
  searchInput.addEventListener("input", (e) => { adminState.storiesSearch = e.target.value; render(); });
  searchWrap.appendChild(searchInput);
  filterBar.appendChild(searchWrap);
  if (q) filterBar.appendChild(h("span", { class: "filter-badge" }, [icon("sliders"), t("active_filters")]));
  wrap.appendChild(filterBar);

  const filtered = list.filter((s) => !q || (s.name || "").toLowerCase().includes(q) || (s.story || "").toLowerCase().includes(q));
  const accByKey = {};
  adminState.accounts.forEach((a) => { accByKey[a.nameKey] = a; });

  const grid = h("div", { style: "display:flex;flex-direction:column;width:100%" });
  filtered.forEach((s) => {
    const acc = accByKey[s.nameKey];
    const card = h("div", { class: "story-mgmt-card" });
    const thumb = h("div", { class: "story-mgmt-thumb" });
    if (s.photos && s.photos[0]) thumb.appendChild(h("img", { src: s.photos[0], style: "width:100%;height:100%;object-fit:cover;border-radius:4px" }));
    else thumb.appendChild(icon("image", { class: "icon" }));
    card.appendChild(thumb);
    const info = h("div", { class: "story-mgmt-info" });
    const meta = h("div", { class: "story-mgmt-meta" });
    const authorGroup = h("div", { class: "author-group" });
    authorGroup.appendChild(h("span", { class: "an" }, [s.name]));
    if (acc && acc.relationship) authorGroup.appendChild(h("span", { class: "ar" }, [`(${acc.relationship})`]));
    meta.appendChild(authorGroup);
    meta.appendChild(isOpen
      ? h("span", { class: "status-chip" }, [t("status_editable_until", { date: fmt(editionDeadline(i, anchor)) })])
      : h("span", { class: "status-chip solid" }, [t("status_published_in", { n: i + 1 })]));
    info.appendChild(meta);
    info.appendChild(h("p", { class: "story-mgmt-text" }, [`"${s.story}"`]));
    const footer = h("div", { class: "story-mgmt-footer" });
    const photoCount = (s.photos || []).length;
    const photosLabel = photoCount === 0 ? t("photos_count_0") : photoCount === 1 ? t("photos_count_1") : t("photos_count_n", { n: photoCount });
    footer.appendChild(h("span", { class: "sub" }, [`${t("submitted_on", { date: fmt(new Date(s.updatedAt)) })} • ${photosLabel}`]));
    const actions = h("div", { class: "story-mgmt-actions" });
    actions.appendChild(h("button", { class: "row-action", onclick: () => { myStoriesState.viewing = s; render(); } }, [icon("eye-small", { class: "icon" }), t("action_view")]));
    actions.appendChild(h("button", { class: "row-action edit", onclick: () => openModal("editStory", s) }, [icon("pencil2", { class: "icon" }), t("action_edit")]));
    actions.appendChild(h("button", { class: "row-action delete", onclick: () => openModal("deleteStory", s) }, [icon("trash", { class: "icon" }), t("action_delete")]));
    footer.appendChild(actions);
    info.appendChild(footer);
    card.appendChild(info);
    grid.appendChild(card);
  });
  wrap.appendChild(grid);
  if (myStoriesState.viewing) wrap.appendChild(buildViewStoryModal());
  return wrap;
}

/* ---------- Admin modals ---------- */
function openModal(type, payload) { adminState.modal = { type, payload }; adminState.modalError = ""; adminState.modalLoading = false; render(); }
function closeModal() { adminState.modal = null; render(); }

function buildAdminModal() {
  const { type, payload } = adminState.modal;
  const bg = h("div", { class: "modal-bg", onclick: closeModal });
  const modal = h("div", { class: "modal admin-modal" });
  modal.addEventListener("click", (e) => e.stopPropagation());

  if (type === "createAccount" || type === "editAccount") {
    const isEdit = type === "editAccount";
    modal.appendChild(h("h3", {}, [isEdit ? t("edit_account_title") : t("create_account_title")]));
    const nameGroup = h("div", { class: "field-group" });
    nameGroup.appendChild(h("div", { class: "field-label" }, [t("field_name")]));
    const nameInput = h("input", { class: "text-input" });
    nameInput.value = isEdit ? payload.name : "";
    if (isEdit) nameInput.disabled = true;
    nameGroup.appendChild(nameInput);
    modal.appendChild(nameGroup);

    const relGroup = h("div", { class: "field-group" });
    relGroup.appendChild(h("div", { class: "field-label" }, [t("field_relationship", { name: state.config.recipientName })]));
    const relInput = h("input", { class: "text-input" });
    relInput.value = isEdit ? (payload.relationship || "") : "";
    relGroup.appendChild(relInput);
    modal.appendChild(relGroup);

    const passGroup = h("div", { class: "field-group" });
    passGroup.appendChild(h("div", { class: "field-label" }, [t("field_password")]));
    const passInput = h("input", { class: "text-input", type: "password" });
    passInput.value = isEdit ? payload.password : "";
    passGroup.appendChild(passInput);
    modal.appendChild(passGroup);

    if (adminState.modalError) modal.appendChild(h("p", { class: "error-text" }, [adminState.modalError]));

    const actions = h("div", { class: "modal-actions" });
    actions.appendChild(h("button", { class: "text-btn", onclick: closeModal }, [t("cancel")]));
    actions.appendChild(pillButton(t("save"), async () => {
      if (!nameInput.value.trim() || !passInput.value || !relInput.value.trim()) { adminState.modalError = t("err_register_fields"); render(); return; }
      const key = isEdit ? payload.nameKey : sanitizeKey(nameInput.value);
      if (!isEdit) {
        const existing = await fsGetAccount(key);
        if (existing) { adminState.modalError = t("err_register_exists"); render(); return; }
      }
      const acc = { name: isEdit ? payload.name : nameInput.value.trim(), nameKey: key, password: passInput.value, relationship: relInput.value.trim(), role: key === "evy" ? "admin" : "member", createdAt: isEdit ? payload.createdAt : Date.now() };
      await fsSetAccount(key, acc);
      closeModal(); await refreshAdminData();
    }, { noArrow: true }));
    modal.appendChild(actions);
  }

  if (type === "deleteAccount") {
    modal.appendChild(h("h3", {}, [t("delete_account_title")]));
    modal.appendChild(h("p", {}, [t("delete_account_body", { name: payload.name })]));
    const actions = h("div", { class: "modal-actions" });
    actions.appendChild(h("button", { class: "text-btn", onclick: closeModal }, [t("cancel")]));
    const delBtn = h("button", { class: "danger-btn" }, [t("confirm_delete")]);
    delBtn.addEventListener("click", async () => {
      const anchor = new Date(state.config.anchorDate);
      const currentIndex = editionIndexFor(new Date(), anchor);
      await fsDeleteSubmission(currentIndex, payload.nameKey);
      await fsDeleteAccount(payload.nameKey);
      closeModal(); await refreshAdminData();
    });
    actions.appendChild(delBtn);
    modal.appendChild(actions);
  }

  if (type === "renamePaper") {
    modal.appendChild(h("h3", {}, [t("rename_paper_title")]));
    const group = h("div", { class: "field-group" });
    const input = h("input", { class: "text-input" });
    input.value = state.config.mastheadTitle;
    group.appendChild(input);
    modal.appendChild(group);
    const actions = h("div", { class: "modal-actions" });
    actions.appendChild(h("button", { class: "text-btn", onclick: closeModal }, [t("cancel")]));
    actions.appendChild(pillButton(t("save"), async () => {
      state.config.mastheadTitle = input.value.trim() || state.config.mastheadTitle;
      await fsSetConfig(state.config);
      closeModal();
    }, { noArrow: true }));
    modal.appendChild(actions);
  }

  if (type === "releaseDate") {
    const anchor = new Date(state.config.anchorDate);
    const currentIndex = editionIndexFor(new Date(), anchor);
    modal.appendChild(h("h3", {}, [t("release_date_title")]));
    const group = h("div", { class: "field-group" });
    const input = h("input", { class: "text-input", type: "date" });
    input.value = editionEnd(currentIndex, anchor).toISOString().slice(0, 10);
    group.appendChild(input);
    modal.appendChild(group);
    const actions = h("div", { class: "modal-actions" });
    actions.appendChild(h("button", { class: "text-btn", onclick: closeModal }, [t("cancel")]));
    actions.appendChild(pillButton(t("save"), async () => {
      if (!input.value) return;
      const d = new Date(input.value); d.setHours(23, 59, 59, 999);
      state.config.editionOverrideIndex = currentIndex;
      state.config.editionOverrideEnd = d.toISOString();
      await fsSetConfig(state.config);
      closeModal();
    }, { noArrow: true }));
    modal.appendChild(actions);
  }

  if (type === "editStory") {
    modal.appendChild(h("h3", {}, [t("edit_story_title")]));
    const group = h("div", { class: "field-group" });
    const textarea = h("textarea", { class: "text-input" });
    textarea.value = payload.story;
    group.appendChild(textarea);
    modal.appendChild(group);
    const actions = h("div", { class: "modal-actions" });
    actions.appendChild(h("button", { class: "text-btn", onclick: closeModal }, [t("cancel")]));
    actions.appendChild(pillButton(t("save"), async () => {
      await fsSetSubmission(payload.editionIndex, payload.nameKey, { ...payload, story: textarea.value.trim() });
      closeModal(); await refreshAdminData();
    }, { noArrow: true }));
    modal.appendChild(actions);
  }

  if (type === "deleteStory") {
    modal.appendChild(h("h3", {}, [t("delete_story_title")]));
    modal.appendChild(h("p", {}, [t("delete_story_body")]));
    const actions = h("div", { class: "modal-actions" });
    actions.appendChild(h("button", { class: "text-btn", onclick: closeModal }, [t("cancel")]));
    const delBtn = h("button", { class: "danger-btn" }, [t("delete_story_confirm")]);
    delBtn.addEventListener("click", async () => {
      await fsDeleteSubmission(payload.editionIndex, payload.nameKey);
      closeModal(); await refreshAdminData();
    });
    actions.appendChild(delBtn);
    modal.appendChild(actions);
  }

  bg.appendChild(modal);
  return bg;
}

init();
