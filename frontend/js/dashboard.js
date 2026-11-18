import { DEFAULT_CONFIG as C, loadState, saveState } from "./config.js";
const $ = id => document.getElementById(id);
const state = loadState();
const fmt = new Intl.DateTimeFormat("id-ID", { dateStyle: "medium", timeStyle: "short" });
const DEMO_LOG = [
  "Sistem dimulai dalam mode antarmuka saja.",
  "Aturan privasi dimuat dari konfigurasi.",
  "Koneksi database dilewati: belum dikonfigurasi."
];
function addLog(text) {
  state.log.unshift({ t: Date.now(), text });
  state.log = state.log.slice(0, 20);
  saveState(state);
}
function entry(kind, cls, text) {
  const li = document.createElement("li");
  const b = document.createElement("span");
  b.className = cls; b.textContent = kind;
  li.append(b, ` ${text}`);
  return li;
}
function render() {
  const on = state.sleepActive;
  $("st-system").textContent = "Offline";
  $("st-sleep").textContent = on ? "Aktif (manual)" : "Nonaktif";
  $("st-auto").textContent = on && C.auto_reply_sleep ? "Siap saat Sleep Mode (simulasi)" : "Tidak aktif";
  $("st-privacy").textContent = C.privacy_level === "strict" ? "Strict" : C.privacy_level;
  $("sleep-status").textContent = on
    ? "Sleep Mode aktif secara manual. Auto-reply hanya simulasi tampilan; tidak ada pesan dikirim."
    : "Sleep Mode nonaktif.";
  $("btn-on").disabled = on;
  $("btn-off").disabled = !on;
  $("log").replaceChildren(
    ...state.log.map(e => entry("LOKAL", "badge local", `${fmt.format(e.t)} — ${e.text}`)),
    ...DEMO_LOG.map(t => entry("DEMO", "badge", t))
  );
}
$("btn-on").addEventListener("click", () => { state.sleepActive = true; addLog("Sleep Mode diaktifkan manual."); render(); });
$("btn-off").addEventListener("click", () => { state.sleepActive = false; addLog("Sleep Mode dinonaktifkan manual."); render(); });
render();
