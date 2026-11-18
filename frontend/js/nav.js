// Menandai halaman/bagian aktif dengan aria-current="page" (bukan hanya warna).
function mark() {
  const file = location.pathname.split("/").pop() || "index.html";
  const links = [...document.querySelectorAll("nav a")];
  const same = a => new URL(a.href).pathname.endsWith(file);
  const current = links.find(a => same(a) && new URL(a.href).hash === location.hash && location.hash)
    || links.find(a => same(a) && !new URL(a.href).hash);
  links.forEach(a => a.removeAttribute("aria-current"));
  current?.setAttribute("aria-current", "page");
}
addEventListener("hashchange", mark);
mark();
