const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('api', {
  listarPDFs: () => ipcRenderer.invoke('listar-pdfs'),
  selecionarPasta: () => ipcRenderer.invoke('selecionar-pasta')
})