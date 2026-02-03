const viewer = document.getElementById('right-viewer')

function telaInicial() {
  viewer.innerHTML = `
    <div id="initial-screen">
      <div id="initial-screen-top">
        <h1 id="right-initial-title" style="margin-left: 15%; color: var(--marrom);">Olá, seja bem-vindo!</h1>
      </div>

      <div id=initial-screen-bot">
        <p> A Biblioteca Digital é uma plataforma que transforma a leitura
        de PDFs mais amigável.</p>
        <p> Caso seja sua primeira vez, você pode selecionar o diretório
        onde estão os seus arquivos clicando em "Configurações"</p>
      </div>
      <br>
      <br>
      <br>
      <br>
      <br>
      <p style="margin-left: 30%; color: var(--verde);">Desenvolvido por Cauã Cursino - 2026</p>
    </div>
  `
}

function telaConfiguracoes() {
  viewer.innerHTML = `
    <div >
      <p class="config-title">Configurações</p>

      <label class="config-label">
        Pasta dos PDFs:
        <button id="btn-pasta" class="config-dir-btn">📁 Selecionar pasta</button>
      </label>

      <br><br>
      <p>Mais funções em breve...</p>

      <button id="voltar" style="color: var(--verde); margin-left: 30%;">Salvar e sair</button>
    </div>
  `
  
  document.getElementById('btn-pasta').onclick = async () => {
    const pasta = await window.api.selecionarPasta()
    if (pasta) {
      carregar()
    }
  }

  document.getElementById('voltar').onclick = telaInicial
}

function telaPerfil() {
  viewer.innerHTML = `
    <div style="padding: 20px;">
      <h1>Em produção...</h1>

      <br><br>

      <button id="voltar">Voltar</button>
    </div>
  `

  document.getElementById('voltar').onclick = telaInicial
}

document.getElementById('btn-config').onclick = (e) => {
      e.preventDefault()
      telaConfiguracoes()
    }

document.getElementById('btn-profile').onclick = (e) => {
      e.preventDefault()
      telaPerfil()
    }

telaInicial()