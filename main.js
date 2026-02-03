const { app, BrowserWindow, ipcMain, dialog } = require("electron");
const path = require('path')
const fs = require('fs')

require('electron-reload')(__dirname, {
  electron: require(`${__dirname}/node_modules/electron`)
})

function createWindow() {
  const win = new BrowserWindow({
    width: 1400,
    height: 900,
    resizable: false,
    maximizable: true,
    fullscreenable: true,
    frame: true, 
    transparent: false,
    webPreferences: {
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js")
    }
  });

  win.loadFile("index.html");
}

let pastaPDFs = null

ipcMain.handle('listar-pdfs', async () => {
  if (!pastaPDFs) return []

  const arquivos = fs.readdirSync(pastaPDFs)

  return arquivos
    .filter(a => a.toLowerCase().endsWith('.pdf'))
    .map(a => ({
      nome: a.replace(/\.pdf$/i, ''),
      caminho: path.join(pastaPDFs, a)
    }))
})

ipcMain.handle('selecionar-pasta', async () => {
  const result = await dialog.showOpenDialog({
    properties: ['openDirectory']
  })

  if (result.canceled) return null

  pastaPDFs = result.filePaths[0]
  return pastaPDFs
})

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
