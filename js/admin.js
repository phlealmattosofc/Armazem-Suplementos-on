// Marca automaticamente o link ativo do sidebar
const links = document.querySelectorAll(".sidebar a");
const current = window.location.pathname.split("/").pop();

links.forEach(link => {
  if (link.getAttribute("href") === current) {
    link.classList.add("active");
  }
});

// Exemplo de alerta de sucesso
function sucesso(msg) {
  alert("✔ " + msg);
}

