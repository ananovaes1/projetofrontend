function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  /*   if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  } */

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute(
      "src",
      "https://png.pngtree.com/png-clipart/20231116/original/pngtree-computer-icon-technology-computer-science-photo-png-image_13599812.png"
    )
    img.setAttribute("alt", "Foto light mode")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute(
      "src",
      "https://png.pngtree.com/png-vector/20231115/ourmid/pngtree-computer-icon-notebook-png-image_10602996.png"
    )
    img.setAttribute("alt", "Foto dark mode")
  }
}
