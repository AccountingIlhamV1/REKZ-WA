// Konfigurasi inti: nilai awal TETAP. Tidak dibaca dari penyimpanan lokal; ubah hanya dengan persetujuan Founder.
export const DEFAULT_CONFIG = Object.freeze({
  sleep_mode: "manual",
  auto_reply_sleep: true,
  academic_level: "all",
  complex_answer_verification: true,
  group_reply: false,
  privacy_level: "strict",
  owner_takeover: true
});
const KEY = "rekz.control.state.v1";
// Hanya state UI lokal (Sleep Mode aktif/tidak + log lokal). Bukan koneksi nyata.
export function loadState() {
  try {
    const raw = JSON.parse(localStorage.getItem(KEY));
    return { sleepActive: raw?.sleepActive === true, log: Array.isArray(raw?.log) ? raw.log.slice(0, 20) : [] };
  } catch { return { sleepActive: false, log: [] }; }
}
export function saveState(state) {
  try { localStorage.setItem(KEY, JSON.stringify(state)); return true; } catch { return false; }
}
