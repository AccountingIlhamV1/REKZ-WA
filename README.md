# REKZ-WA

Proyek AI personal Rekz (anak virtual Papa Ilham) untuk membantu membalas WhatsApp.

## Status: Stage 1 — REKZ CONTROL (frontend saja)
Belum ada integrasi WhatsApp, backend, atau pengiriman pesan. Semua data contoh berlabel **DEMO**.

## Struktur
- `index.html` — pengalih ke dashboard (agar GitHub Pages dari root berjalan)
- `frontend/` — `dashboard.html`, `settings.html`, `css/`, `js/` (JavaScript modul native, tanpa framework)
- `knowledge/` — dokumen identitas, kepribadian, aturan akademik dan privasi

## Menjalankan
Lokal: `python3 -m http.server` di folder ini, buka `http://localhost:8000`. (Modul ES memerlukan server HTTP, bukan `file://`.)
GitHub Pages: Settings → Pages → Branch `main`, folder `/ (root)`.

## Konfigurasi inti
Dikunci di `frontend/js/config.js`; ubah hanya dengan persetujuan Founder. Tidak ada API key atau secret di frontend.
