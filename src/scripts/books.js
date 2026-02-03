async function carregar() {
  const lista = document.getElementById('left-books')
  const viewer = document.getElementById('right-viewer')

  lista.innerHTML = ''

  const pdfs = await window.api.listarPDFs()

  pdfs.forEach(pdf => {
    const li = document.createElement('li')
    li.textContent = pdf.nome

    li.onclick = () => {
      document.querySelectorAll('#left-books li').forEach(el => el.classList.remove('ativo'))

      li.classList.add('ativo')

      viewer.innerHTML = `
        <iframe src="file://${pdf.caminho.replace(/\\/g, '/')}" ></iframe>
      `
    }

    lista.appendChild(li)
  })
}

const search = document.getElementById('search-input')

search.addEventListener('input', () => {
  const termo = search.value.toLowerCase()
  const livros = document.querySelectorAll('#left-books li')

  livros.forEach(li => {
    const nome = li.textContent.toLowerCase()
    li.style.display = nome.includes(termo) ? '' : 'none'
  })
})

carregar()
