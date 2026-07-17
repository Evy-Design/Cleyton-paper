/* ---------- Config & constants ---------- */
const EDITION_MS = 14 * 24 * 60 * 60 * 1000;
const DEFAULT_CONFIG = {
  mastheadTitle: "Chronicle",
  tagline: "News from the lives of family & friends, scattered across the world",
  recipientName: "Cleyton",
  passcode: "cleyton1884",
  anchorDate: new Date().toISOString(),
  members: ["Mama", "Papa", "Joana", "Hugo", "Evy"],
};
const LOCALES = { en: "en-GB", pt: "pt-PT" };

const STRINGS = {
  en: {
    nav_login: "Log in", settings_tooltip: "Settings", settings_title: "Settings",
    settings_newspaper_name: "Newspaper name", settings_tagline: "Subtitle",
    settings_recipient_name: "Recipient's name", settings_recipient_password: "Recipient's password",
    settings_members: "Family & friends (comma separated)", cancel: "Cancel", save: "Save",
    masthead_tag: "Gathered from letters, photos and stories of family & friends",
    np_empty: "No stories received for this edition.", np_untitled: "Untitled", np_by: "By {{name}}",
    back: "← Back", checking: "One moment...", who_are_you: "Who are you?",
    not_in_list: "Not on the list? Type your own name", your_name: "Your name",
    your_name_placeholder: "E.g. Aunt Marie", continue_btn: "Continue", back_to_list: "← Back to the list",
    choose_other_name: "← Choose another name",
    first_login_greeting: "Hi {{name}}! This is your first time logging in — create a password.",
    new_password: "New password", repeat_password: "Repeat password", create_account_btn: "Create account",
    welcome_back_greeting: "Welcome back, {{name}}! Enter your password.", password_label: "Password", login_btn: "Log in",
    err_password_short: "Choose a password of at least 4 characters.", err_password_mismatch: "The passwords don't match.",
    err_account_create: "Something went wrong creating your account. Please try again.",
    err_wrong_password: "That password isn't right.",
    edition_label: "Edition #{{n}}", edition_range: "runs from {{start}} to {{end}}",
    edition_closed_msg: "Submissions for this edition are closed. The next edition (#{{n}}) starts on {{end}}.",
    edition_deadline_msg: "You can edit your piece until {{deadline}} ({{days}} day(s) left).",
    loading: "Loading...", title_label: "Title", title_placeholder: "E.g. Our first week at the beach",
    story_label: "Your story", story_placeholder: "Tell your story...", photo_label: "Photo (optional)",
    remove_photo: "Remove photo", err_empty_submission: "Write at least a title or a story before saving.",
    success_saved: "Saved! This will appear in edition #{{n}}, ready on {{end}}.",
    err_save_failed: "Something went wrong saving. Please try again.", deleted_msg: "Your submission has been deleted.",
    update_btn: "Update", submit_btn: "Submit", delete_submission: "Delete my submission",
    already_submitted_label: "Already submitted this edition by:",
    recipient_welcome: "Welcome, {{name}}", recipient_password_prompt: "Enter your password to open your newspaper.",
    open_newspaper_btn: "Open the newspaper", back_to_overview: "← Back to overview",
    your_editions_subtitle: "Your editions",
    next_edition_info: "Your next newspaper (edition #{{n}}) arrives in {{days}} day(s), on {{date}}.",
    teaser_count: " So far {{count}} story/stories have come in — a surprise until then!",
    first_edition_coming: "Your first newspaper is still being made. Check back later!",
    edition_card_range: "{{start}} — {{end}} · {{count}} story/stories",
    home_family_title: "Submit a story", home_family_sub: "For family & friends",
    home_cleyton_sub: "A new edition every two weeks", press_starting: "Starting the press...",
    firebase_warning: "Firebase isn't configured yet — edit firebase-config.js with your project keys.",
  },
  pt: {
    nav_login: "Entrar", settings_tooltip: "Configurações", settings_title: "Configurações",
    settings_newspaper_name: "Nome do jornal", settings_tagline: "Subtítulo",
    settings_recipient_name: "Nome do destinatário", settings_recipient_password: "Palavra-passe do destinatário",
    settings_members: "Família & amigos (separados por vírgulas)", cancel: "Cancelar", save: "Guardar",
    masthead_tag: "Reunido a partir de cartas, fotos e histórias da família & amigos",
    np_empty: "Nenhuma história recebida nesta edição.", np_untitled: "Sem título", np_by: "Por {{name}}",
    back: "← Voltar", checking: "Um momento...", who_are_you: "Quem és tu?",
    not_in_list: "Não estás na lista? Escreve o teu nome", your_name: "O teu nome",
    your_name_placeholder: "Ex.: Tia Marie", continue_btn: "Continuar", back_to_list: "← Voltar à lista",
    choose_other_name: "← Escolher outro nome",
    first_login_greeting: "Olá {{name}}! É a primeira vez que entras — cria uma palavra-passe.",
    new_password: "Nova palavra-passe", repeat_password: "Repete a palavra-passe", create_account_btn: "Criar conta",
    welcome_back_greeting: "Bem-vindo de volta, {{name}}! Introduz a tua palavra-passe.", password_label: "Palavra-passe", login_btn: "Entrar",
    err_password_short: "Escolhe uma palavra-passe com pelo menos 4 caracteres.", err_password_mismatch: "As palavras-passe não coincidem.",
    err_account_create: "Algo correu mal ao criar a tua conta. Tenta novamente.",
    err_wrong_password: "Essa palavra-passe está errada.",
    edition_label: "Edição #{{n}}", edition_range: "decorre de {{start}} até {{end}}",
    edition_closed_msg: "As submissões para esta edição estão encerradas. A próxima edição (#{{n}}) começa em {{end}}.",
    edition_deadline_msg: "Podes editar o teu texto até {{deadline}} ({{days}} dia(s) restantes).",
    loading: "A carregar...", title_label: "Título", title_placeholder: "Ex.: A nossa primeira semana na praia",
    story_label: "A tua história", story_placeholder: "Conta a tua história...", photo_label: "Foto (opcional)",
    remove_photo: "Remover foto", err_empty_submission: "Escreve pelo menos um título ou uma história antes de guardar.",
    success_saved: "Guardado! Isto vai aparecer na edição #{{n}}, pronta em {{end}}.",
    err_save_failed: "Algo correu mal ao guardar. Tenta novamente.", deleted_msg: "A tua submissão foi eliminada.",
    update_btn: "Atualizar", submit_btn: "Enviar", delete_submission: "Eliminar a minha submissão",
    already_submitted_label: "Já enviado nesta edição por:",
    recipient_welcome: "Bem-vindo, {{name}}", recipient_password_prompt: "Introduz a tua palavra-passe para abrir o teu jornal.",
    open_newspaper_btn: "Abrir o jornal", back_to_overview: "← Voltar à visão geral",
    your_editions_subtitle: "As tuas edições",
    next_edition_info: "O teu próximo jornal (edição #{{n}}) chega em {{days}} dia(s), em {{date}}.",
    teaser_count: " Até agora chegaram {{count}} história(s) — uma surpresa até lá!",
    first_edition_coming: "O teu primeiro jornal ainda está a ser feito. Volta mais tarde!",
    edition_card_range: "{{start}} — {{end}} · {{count}} história(s)",
    home_family_title: "Enviar uma história", home_family_sub: "Para família & amigos",
    home_cleyton_sub: "Uma nova edição a cada duas semanas", press_starting: "A iniciar a gráfica...",
    firebase_warning: "O Firebase ainda não está configurado — edita firebase-config.js com as chaves do teu projeto.",
  },
};

function t(key, vars) {
  const dict = STRINGS[state.lang] || STRINGS.en;
  let str = dict[key] !== undefined ? dict[key] : STRINGS.en[key] || key;
  if (vars) Object.keys(vars).forEach((k) => { str = str.replace(new RegExp(`{{${k}}}`, "g"), vars[k]); });
  return str;
}
function fmt(date) { return date.toLocaleDateString(LOCALES[state.lang] || "en-GB", { day: "numeric", month: "long", year: "numeric" }); }
function daysLeft(target) { return Math.max(0, Math.ceil((target - new Date()) / (24 * 3600 * 1000))); }
function sanitizeKey(name) { return (name || "").trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "anon"; }
function editionIndexFor(date, anchor) { return Math.floor((date.getTime() - anchor.getTime()) / EDITION_MS); }
function editionStart(i, anchor) { return new Date(anchor.getTime() + i * EDITION_MS); }
function editionEnd(i, anchor) { return new Date(anchor.getTime() + (i + 1) * EDITION_MS); }
function editionDeadline(i, anchor) { const d = new Date(editionEnd(i, anchor)); d.setDate(d.getDate() - 1); d.setHours(23, 59, 59, 999); return d; }
function escapeHtml(s) { return (s || "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])); }

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

async function resizeImage(file, maxW = 760, quality = 0.72) {
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
const state = {
  config: null,
  lang: "en",
  view: "home",
  currentFamilyName: null,
  showSettings: false,
  loading: true,
};
const familyState = { step: "pick", name: "", customMode: false, password: "", password2: "", authError: "",
  title: "", story: "", photo: null, savedAt: null, others: [], status: "", loading: false };
const cleytonState = { unlocked: false, code: "", error: "", loading: false, editions: [], selected: null, articles: [], upcomingCount: 0 };

const app = document.getElementById("app");

async function init() {
  const cfg = await fsGetConfig();
  if (cfg) state.config = { ...DEFAULT_CONFIG, ...cfg };
  else { await fsSetConfig(DEFAULT_CONFIG); state.config = DEFAULT_CONFIG; }
  state.loading = false;
  render();
}

/* ---------- Rendering ---------- */
function h(tag, attrs, children) {
  const node = document.createElement(tag);
  attrs = attrs || {};
  Object.keys(attrs).forEach((k) => {
    if (k === "class") node.className = attrs[k];
    else if (k.startsWith("on") && typeof attrs[k] === "function") node.addEventListener(k.slice(2), attrs[k]);
    else if (k === "html") node.innerHTML = attrs[k];
    else node.setAttribute(k, attrs[k]);
  });
  (children || []).forEach((c) => { if (c) node.appendChild(typeof c === "string" ? document.createTextNode(c) : c); });
  return node;
}

function render() {
  app.innerHTML = "";
  if (state.loading || !state.config) {
    app.appendChild(h("p", { style: "text-align:center;padding-top:60px" }, [h("em", {}, [t("press_starting")])]));
    return;
  }
  if (!firebaseReady()) {
    app.appendChild(h("div", { style: "background:#f3d9a0;color:#5a3d0f;padding:10px;text-align:center;font-family:Cormorant Garamond" }, [t("firebase_warning")]));
  }
  app.appendChild(buildNavBar());
  const page = h("div", { class: "page" });
  if (state.view === "home") page.appendChild(buildHome());
  else if (state.view === "family") page.appendChild(buildFamily());
  else if (state.view === "cleyton") page.appendChild(buildCleyton());
  app.appendChild(page);
  if (state.showSettings) app.appendChild(buildSettingsModal());
}

function isEvy() { return state.currentFamilyName && sanitizeKey(state.currentFamilyName) === "evy"; }

function buildNavBar() {
  const nav = h("div", { class: "nav-bar" });
  nav.appendChild(h("div", { class: "nav-logo", onclick: () => { state.view = "home"; render(); } }, [state.config.mastheadTitle]));
  const right = h("div", { class: "nav-right" });
  const langSwitch = h("div", { class: "lang-switch" });
  ["en", "pt"].forEach((l) => {
    langSwitch.appendChild(h("button", { class: state.lang === l ? "active" : "", onclick: () => { state.lang = l; render(); } }, [l.toUpperCase()]));
  });
  right.appendChild(langSwitch);
  right.appendChild(h("button", { class: "nav-btn", onclick: () => { resetFamilyState(); state.view = "family"; render(); } }, [t("nav_login")]));
  right.appendChild(h("button", { class: "nav-btn", onclick: () => { resetCleytonState(); state.view = "cleyton"; render(); } }, ["📰 " + state.config.recipientName]));
  if (isEvy()) right.appendChild(h("button", { class: "nav-gear", title: t("settings_tooltip"), onclick: () => { state.showSettings = true; render(); } }, ["⚙"]));
  nav.appendChild(right);
  return nav;
}

function buildMasthead(subtitle) {
  const wrap = h("div", { class: "masthead" });
  wrap.appendChild(h("div", { class: "masthead-tag" }, [t("masthead_tag")]));
  wrap.appendChild(h("div", { class: "masthead-logo" }, [state.config.mastheadTitle]));
  wrap.appendChild(h("div", { class: "masthead-sub" }, [state.config.tagline]));
  wrap.appendChild(h("hr", { class: "rule" }));
  if (subtitle) wrap.appendChild(h("div", { class: "np-subbar" }, [subtitle]));
  return wrap;
}

function buildHome() {
  const wrap = h("div", { class: "center" });
  wrap.appendChild(buildMasthead());
  const row = h("div", { class: "btn-row" });
  const c1 = h("div", { class: "card-btn", onclick: () => { resetFamilyState(); state.view = "family"; render(); } });
  c1.appendChild(h("div", { class: "card-title" }, [t("home_family_title")]));
  c1.appendChild(h("small", { class: "card-sub" }, [t("home_family_sub")]));
  const c2 = h("div", { class: "card-btn", onclick: () => { resetCleytonState(); state.view = "cleyton"; render(); } });
  c2.appendChild(h("div", { class: "card-title" }, ["📰 " + state.config.recipientName]));
  c2.appendChild(h("small", { class: "card-sub" }, [t("home_cleyton_sub")]));
  row.appendChild(c1); row.appendChild(c2);
  wrap.appendChild(row);
  return wrap;
}

/* ---------- Family flow ---------- */
function resetFamilyState() {
  Object.assign(familyState, { step: "pick", name: "", customMode: false, password: "", password2: "", authError: "",
    title: "", story: "", photo: null, savedAt: null, others: [], status: "", loading: false });
}

function buildFamily() {
  const anchor = new Date(state.config.anchorDate);
  if (familyState.step === "pick") return buildFamilyPick();
  if (familyState.step === "checking") return buildFamilyPick(true);
  if (familyState.step === "create" || familyState.step === "login") return buildFamilyAuth();
  return buildFamilyForm(anchor);
}

function buildFamilyPick(checking) {
  const wrap = h("div", { class: "narrow" });
  wrap.appendChild(h("button", { class: "back-link", onclick: () => { state.view = "home"; render(); } }, [t("back")]));
  wrap.appendChild(buildMasthead());
  wrap.appendChild(h("p", { style: "text-align:center" }, [t("who_are_you")]));
  if (checking) wrap.appendChild(h("p", { style: "text-align:center" }, [h("em", {}, [t("checking")])]));
  const members = state.config.members && state.config.members.length ? state.config.members : null;
  if (members && !familyState.customMode) {
    const row = h("div", { class: "btn-row" });
    members.forEach((m) => row.appendChild(h("div", { class: "small-card", onclick: () => chooseName(m) }, [m])));
    wrap.appendChild(row);
    wrap.appendChild(h("div", { style: "text-align:center;margin-top:16px" }, [
      h("button", { class: "btn-link", onclick: () => { familyState.customMode = true; render(); } }, [t("not_in_list")]),
    ]));
  } else {
    const label = h("label", { class: "label" }, [t("your_name")]);
    const input = h("input", { class: "input", placeholder: t("your_name_placeholder"), value: familyState.name });
    input.value = familyState.name;
    const btn = h("button", { class: "btn-primary" }, [t("continue_btn")]);
    function sync() { btn.disabled = !input.value.trim(); }
    input.addEventListener("input", sync);
    btn.addEventListener("click", () => chooseName(input.value));
    sync();
    wrap.appendChild(label); wrap.appendChild(input);
    wrap.appendChild(h("div", { style: "text-align:center" }, [btn]));
    if (members) wrap.appendChild(h("div", { style: "text-align:center;margin-top:12px" }, [
      h("button", { class: "btn-link", onclick: () => { familyState.customMode = false; render(); } }, [t("back_to_list")]),
    ]));
  }
  return wrap;
}

async function chooseName(name) {
  if (!name || !name.trim()) return;
  familyState.name = name.trim();
  familyState.step = "checking";
  familyState.authError = "";
  render();
  const acc = await fsGetAccount(sanitizeKey(familyState.name));
  familyState.step = acc ? "login" : "create";
  render();
}

function buildFamilyAuth() {
  const wrap = h("div", { class: "narrow" });
  wrap.appendChild(h("button", { class: "back-link", onclick: () => { familyState.step = "pick"; familyState.password = ""; familyState.password2 = ""; familyState.authError = ""; render(); } }, [t("choose_other_name")]));
  wrap.appendChild(buildMasthead());
  if (familyState.step === "create") {
    wrap.appendChild(h("p", { style: "text-align:center" }, [t("first_login_greeting", { name: familyState.name })]));
    wrap.appendChild(h("label", { class: "label" }, [t("new_password")]));
    const p1 = h("input", { class: "input", type: "password" });
    wrap.appendChild(p1);
    wrap.appendChild(h("label", { class: "label" }, [t("repeat_password")]));
    const p2 = h("input", { class: "input", type: "password" });
    wrap.appendChild(p2);
    if (familyState.authError) wrap.appendChild(h("p", { class: "error-text" }, [familyState.authError]));
    const btn = h("button", { class: "btn-primary" }, [t("create_account_btn")]);
    btn.addEventListener("click", () => createAccount(p1.value, p2.value));
    p2.addEventListener("keydown", (e) => { if (e.key === "Enter") createAccount(p1.value, p2.value); });
    wrap.appendChild(h("div", { style: "text-align:center" }, [btn]));
  } else {
    wrap.appendChild(h("p", { style: "text-align:center" }, [t("welcome_back_greeting", { name: familyState.name })]));
    wrap.appendChild(h("label", { class: "label" }, [t("password_label")]));
    const p1 = h("input", { class: "input", type: "password" });
    wrap.appendChild(p1);
    if (familyState.authError) wrap.appendChild(h("p", { class: "error-text" }, [familyState.authError]));
    const btn = h("button", { class: "btn-primary" }, [t("login_btn")]);
    btn.addEventListener("click", () => loginFamily(p1.value));
    p1.addEventListener("keydown", (e) => { if (e.key === "Enter") loginFamily(p1.value); });
    wrap.appendChild(h("div", { style: "text-align:center" }, [btn]));
  }
  return wrap;
}

async function createAccount(pw, pw2) {
  if (pw.length < 4) { familyState.authError = t("err_password_short"); render(); return; }
  if (pw !== pw2) { familyState.authError = t("err_password_mismatch"); render(); return; }
  const ok = await fsSetAccount(sanitizeKey(familyState.name), { name: familyState.name, password: pw });
  if (ok) { state.currentFamilyName = familyState.name; familyState.step = "form"; await loadMySubmission(); }
  else { familyState.authError = t("err_account_create"); render(); }
}
async function loginFamily(pw) {
  const acc = await fsGetAccount(sanitizeKey(familyState.name));
  if (acc && acc.password === pw) { state.currentFamilyName = familyState.name; familyState.step = "form"; await loadMySubmission(); return; }
  familyState.authError = t("err_wrong_password"); render();
}

async function loadMySubmission() {
  const anchor = new Date(state.config.anchorDate);
  const editionIndex = editionIndexFor(new Date(), anchor);
  const nameKey = sanitizeKey(familyState.name);
  familyState.loading = true; render();
  const sub = await fsGetSubmission(editionIndex, nameKey);
  if (sub) { familyState.title = sub.title || ""; familyState.story = sub.story || ""; familyState.photo = sub.photo || null; familyState.savedAt = sub.updatedAt || null; }
  const all = await fsListSubmissions(editionIndex);
  familyState.others = all.map((a) => a.name).filter((n) => n && sanitizeKey(n) !== nameKey);
  familyState.loading = false;
  render();
}

function buildFamilyForm(anchor) {
  const editionIndex = editionIndexFor(new Date(), anchor);
  const start = editionStart(editionIndex, anchor), end = editionEnd(editionIndex, anchor);
  const deadline = editionDeadline(editionIndex, anchor);
  const locked = new Date() > deadline;
  const wrap = h("div", { class: "narrow" });
  wrap.appendChild(h("button", { class: "back-link", onclick: () => { state.view = "home"; render(); } }, [t("back")]));
  wrap.appendChild(buildMasthead());
  const banner = h("div", { class: "banner" });
  banner.innerHTML = `<strong>${t("edition_label", { n: editionIndex + 1 })}</strong> · ${t("edition_range", { start: fmt(start), end: fmt(end) })}<br>` +
    (locked ? escapeHtml(t("edition_closed_msg", { n: editionIndex + 2, end: fmt(end) })) : escapeHtml(t("edition_deadline_msg", { deadline: fmt(deadline), days: daysLeft(deadline) })));
  wrap.appendChild(banner);
  if (familyState.loading) wrap.appendChild(h("p", {}, [h("em", {}, [t("loading")])]));

  wrap.appendChild(h("label", { class: "label" }, [t("title_label")]));
  const titleInput = h("input", { class: "input", placeholder: t("title_placeholder") });
  titleInput.value = familyState.title;
  if (locked) titleInput.disabled = true;
  titleInput.addEventListener("input", (e) => { familyState.title = e.target.value; });
  wrap.appendChild(titleInput);

  wrap.appendChild(h("label", { class: "label" }, [t("story_label")]));
  const storyInput = h("textarea", { placeholder: t("story_placeholder") });
  storyInput.value = familyState.story;
  if (locked) storyInput.disabled = true;
  storyInput.addEventListener("input", (e) => { familyState.story = e.target.value; });
  wrap.appendChild(storyInput);

  wrap.appendChild(h("label", { class: "label" }, [t("photo_label")]));
  if (familyState.photo) wrap.appendChild(h("img", { class: "photo-preview", src: familyState.photo }));
  if (!locked) {
    const fileWrap = h("div", { style: "margin-bottom:16px" });
    const fileInput = h("input", { type: "file", accept: "image/*" });
    fileInput.addEventListener("change", async (e) => {
      const file = e.target.files[0]; if (!file) return;
      try { familyState.photo = await resizeImage(file); render(); } catch (err) { familyState.status = t("err_save_failed"); render(); }
    });
    fileWrap.appendChild(fileInput);
    if (familyState.photo) fileWrap.appendChild(h("div", {}, [h("button", { class: "btn-link", onclick: () => { familyState.photo = null; render(); } }, [t("remove_photo")])]));
    wrap.appendChild(fileWrap);
  }

  if (familyState.status) wrap.appendChild(h("p", { class: "banner" }, [familyState.status]));

  if (!locked) {
    const row = h("div", { style: "display:flex;gap:14px;align-items:center" });
    const saveBtn = h("button", { class: "btn-primary" }, [familyState.savedAt ? t("update_btn") : t("submit_btn")]);
    saveBtn.addEventListener("click", () => submitStory(editionIndex, end));
    row.appendChild(saveBtn);
    if (familyState.savedAt) row.appendChild(h("button", { class: "btn-link", onclick: () => deleteSubmission(editionIndex) }, [t("delete_submission")]));
    wrap.appendChild(row);
  }

  if (familyState.others.length) {
    const box = h("div", { style: "margin-top:24px" });
    box.appendChild(h("span", { class: "label" }, [t("already_submitted_label")]));
    familyState.others.forEach((n) => box.appendChild(h("span", { class: "name-chip" }, [n])));
    wrap.appendChild(box);
  }
  return wrap;
}

async function submitStory(editionIndex, end) {
  if (!familyState.title.trim() && !familyState.story.trim()) { familyState.status = t("err_empty_submission"); render(); return; }
  familyState.loading = true; render();
  const data = { name: familyState.name.trim(), title: familyState.title.trim(), story: familyState.story.trim(), photo: familyState.photo || "", updatedAt: Date.now() };
  const ok = await fsSetSubmission(editionIndex, sanitizeKey(familyState.name), data);
  familyState.loading = false;
  familyState.status = ok ? t("success_saved", { n: editionIndex + 1, end: fmt(end) }) : t("err_save_failed");
  if (ok) familyState.savedAt = data.updatedAt;
  render();
}
async function deleteSubmission(editionIndex) {
  familyState.loading = true; render();
  await fsDeleteSubmission(editionIndex, sanitizeKey(familyState.name));
  Object.assign(familyState, { title: "", story: "", photo: null, savedAt: null, status: t("deleted_msg"), loading: false });
  render();
}

/* ---------- Cleyton flow ---------- */
function resetCleytonState() {
  Object.assign(cleytonState, { unlocked: false, code: "", error: "", loading: false, editions: [], selected: null, articles: [], upcomingCount: 0 });
}

function buildCleyton() {
  const anchor = new Date(state.config.anchorDate);
  if (!cleytonState.unlocked) return buildCleytonGate();
  if (cleytonState.selected !== null) return buildCleytonNewspaper(anchor);
  return buildCleytonOverview(anchor);
}

function buildCleytonGate() {
  const wrap = h("div", { class: "narrow", style: "max-width:340px;margin:40px auto;text-align:center" });
  wrap.appendChild(h("button", { class: "back-link", onclick: () => { state.view = "home"; render(); } }, [t("back")]));
  wrap.appendChild(h("p", { style: "font-family:'Playfair Display',serif;font-size:20px" }, [t("recipient_welcome", { name: state.config.recipientName })]));
  wrap.appendChild(h("p", {}, [t("recipient_password_prompt")]));
  const code = h("input", { class: "input", type: "password" });
  wrap.appendChild(code);
  const errBox = h("div", {});
  wrap.appendChild(errBox);
  const btn = h("button", { class: "btn-primary" }, [t("open_newspaper_btn")]);
  function tryUnlock() {
    if (code.value.trim().toLowerCase() === (state.config.passcode || "").trim().toLowerCase()) { cleytonState.unlocked = true; loadEditions(); }
    else { errBox.innerHTML = ""; errBox.appendChild(h("p", { class: "error-text" }, [t("err_wrong_password")])); }
  }
  btn.addEventListener("click", tryUnlock);
  code.addEventListener("keydown", (e) => { if (e.key === "Enter") tryUnlock(); });
  wrap.appendChild(btn);
  return wrap;
}

async function loadEditions() {
  const anchor = new Date(state.config.anchorDate);
  const currentIndex = editionIndexFor(new Date(), anchor);
  cleytonState.loading = true; render();
  const found = [];
  for (let i = 0; i < currentIndex; i++) {
    const items = await fsListSubmissions(i);
    if (items.length) found.push({ index: i, count: items.length });
  }
  found.sort((a, b) => b.index - a.index);
  cleytonState.editions = found;
  const upcoming = await fsListSubmissions(currentIndex);
  cleytonState.upcomingCount = upcoming.length;
  cleytonState.loading = false;
  render();
}

function buildCleytonOverview(anchor) {
  const currentIndex = editionIndexFor(new Date(), anchor);
  const nextEnd = editionEnd(currentIndex, anchor);
  const wrap = h("div", { class: "center" });
  wrap.appendChild(h("button", { class: "back-link", onclick: () => { state.view = "home"; render(); } }, [t("back")]));
  wrap.appendChild(buildMasthead(t("your_editions_subtitle")));
  const banner = h("div", { class: "banner" });
  banner.innerHTML = escapeHtml(t("next_edition_info", { n: currentIndex + 1, days: daysLeft(nextEnd), date: fmt(nextEnd) })) +
    (cleytonState.upcomingCount > 0 ? escapeHtml(t("teaser_count", { count: cleytonState.upcomingCount })) : "");
  wrap.appendChild(banner);
  if (cleytonState.loading) wrap.appendChild(h("p", {}, [h("em", {}, [t("loading")])]));
  else if (!cleytonState.editions.length) wrap.appendChild(h("div", { class: "np-empty" }, [t("first_edition_coming")]));
  else cleytonState.editions.forEach((ed) => {
    const card = h("div", { class: "edition-card", onclick: () => openEdition(ed.index) });
    card.appendChild(h("h4", {}, [t("edition_label", { n: ed.index + 1 })]));
    card.appendChild(h("span", {}, [t("edition_card_range", { start: fmt(editionStart(ed.index, anchor)), end: fmt(editionEnd(ed.index, anchor)), count: ed.count })]));
    wrap.appendChild(card);
  });
  return wrap;
}

async function openEdition(index) {
  cleytonState.loading = true; render();
  cleytonState.articles = await fsListSubmissions(index);
  cleytonState.selected = index;
  cleytonState.loading = false;
  render();
}

function buildCleytonNewspaper(anchor) {
  const wrap = h("div", {});
  wrap.appendChild(h("button", { class: "back-link", onclick: () => { cleytonState.selected = null; render(); } }, [t("back_to_overview")]));
  if (cleytonState.loading) { wrap.appendChild(h("p", {}, [h("em", {}, [t("loading")])])); return wrap; }
  wrap.appendChild(buildNewspaper(cleytonState.selected, anchor, cleytonState.articles));
  return wrap;
}

function buildNewspaper(editionIndex, anchor, articles) {
  const start = editionStart(editionIndex, anchor), end = editionEnd(editionIndex, anchor);
  const sorted = [...articles].sort((a, b) => (a.updatedAt || 0) - (b.updatedAt || 0));
  const wrap = h("div", { class: "center" });
  wrap.appendChild(buildMasthead(`${t("edition_label", { n: editionIndex + 1 })} — ${fmt(start)} / ${fmt(end)}`));
  if (!sorted.length) { wrap.appendChild(h("div", { class: "np-empty" }, [t("np_empty")])); return wrap; }
  const grid = h("div", { class: "np-grid" });
  sorted.forEach((a, i) => {
    const featured = i === 0, accent = !featured && i % 4 === 2;
    const art = h("div", { class: `np-article ${featured ? "np-featured" : ""} ${accent ? "np-accentbox" : ""}` });
    art.appendChild(h("h3", { class: "np-headline" }, [a.title || t("np_untitled")]));
    art.appendChild(h("p", { class: "np-byline" }, [t("np_by", { name: a.name }) + (a.updatedAt ? " · " + fmt(new Date(a.updatedAt)) : "")]));
    if (a.photo) art.appendChild(h("img", { class: "np-photo", src: a.photo }));
    art.appendChild(h("p", { class: "np-body" }, [a.story]));
    grid.appendChild(art);
  });
  wrap.appendChild(grid);
  return wrap;
}

/* ---------- Settings modal ---------- */
function buildSettingsModal() {
  const bg = h("div", { class: "modal-bg", onclick: () => { state.showSettings = false; render(); } });
  const modal = h("div", { class: "modal" });
  modal.addEventListener("click", (e) => e.stopPropagation());
  modal.appendChild(h("h3", {}, [t("settings_title")]));

  const fields = [
    ["settings_newspaper_name", "mastheadTitle"],
    ["settings_tagline", "tagline"],
    ["settings_recipient_name", "recipientName"],
    ["settings_recipient_password", "passcode"],
  ];
  const inputs = {};
  fields.forEach(([labelKey, field]) => {
    modal.appendChild(h("label", { class: "label" }, [t(labelKey)]));
    const inp = h("input", { class: "input" });
    inp.value = state.config[field] || "";
    inputs[field] = inp;
    modal.appendChild(inp);
  });
  modal.appendChild(h("label", { class: "label" }, [t("settings_members")]));
  const membersInput = h("input", { class: "input", placeholder: "Mama, Papa, Joana, Hugo, Evy" });
  membersInput.value = (state.config.members || []).join(", ");
  modal.appendChild(membersInput);

  const row = h("div", { style: "display:flex;gap:10px;justify-content:flex-end" });
  row.appendChild(h("button", { class: "btn-link", onclick: () => { state.showSettings = false; render(); } }, [t("cancel")]));
  const saveBtn = h("button", { class: "btn-primary" }, [t("save")]);
  saveBtn.addEventListener("click", async () => {
    const newConfig = { ...state.config };
    fields.forEach(([, field]) => { newConfig[field] = inputs[field].value; });
    newConfig.members = membersInput.value.split(",").map((n) => n.trim()).filter(Boolean);
    await fsSetConfig(newConfig);
    state.config = newConfig;
    state.showSettings = false;
    render();
  });
  row.appendChild(saveBtn);
  modal.appendChild(row);
  bg.appendChild(modal);
  return bg;
}

init();
