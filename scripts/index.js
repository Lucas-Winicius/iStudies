document.querySelector('[title="menu"]').onclick = e => {
    e.preventDefault()
    document.querySelectorAll('.iconsContainer').forEach(elemento => elemento.classList.toggle('hide'))
}

document.querySelector('[title="Adicionar Conteudo"]').onclick = e => {
    e.preventDefault()
    location.href = 'contentsInsert.html'
}