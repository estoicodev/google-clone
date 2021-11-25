function changeCss(file) {
  // Evitar cargar más de una vez
  let link = document.querySelector(`link[href="${file}"]`);

  if (link) {
    // Si hay link, eliminarlo.
    padre = link.parentNode;
    padre.removeChild(link);
    toggleTheme.innerHTML = "Light";
  } else {
    // Todavía no se ha cargado el archivo, crear elemento y asignar propiedades
    link = document.createElement("link");
    link.href = file;
    link.type = "text/css";
    link.rel = "stylesheet";
    link.media = "screen,print";
    document.head.appendChild(link);
    link.disabled = false;
    toggleTheme.innerHTML = "Dark";
  }
}
const toggleTheme = document.getElementById("theme");

toggleTheme.addEventListener("click", function () {
  changeCss("./styles/light-theme.css");
});
