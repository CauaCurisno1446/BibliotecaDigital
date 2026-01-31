const { app, BrowserWindow } = require("electron");

require('electron-reload')(__dirname, {
  electron: require(`${__dirname}/node_modules/electron`)
})

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    resizable: true,
    maximizable: true,
    fullscreenable: true,
    frame: true, 
    transparent: false,
    webPreferences: {
      contextIsolation: true
    }
  });

  win.loadFile("index.html");
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
