import 'dotenv/config';
import { app, BrowserWindow, ipcMain } from 'electron';
import * as path from 'path';

async function createWindow() {
  const win = new BrowserWindow({
    width: 1600,
    height: 800,
    frame: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  const startUrl = process.env.VITE_DEV_SERVER_URL ||
    `file://${path.join(__dirname, '../dist/index.html')}`;
  console.log('Načítám frontend z:', process.env.VITE_DEV_SERVER_URL);


  try {
    win.webContents.openDevTools();
    await win.loadURL(startUrl);
  } catch (err) {
    console.error('Chyba při načítání URL:', err);
  }
}

app.whenReady().then(createWindow);

ipcMain.on('quit-app', () => {
  console.log('Uživatel chce zavřít celou tu mrdku.'); // debug
  app.quit();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

process.on('unhandledRejection', (reason) => {
  console.error('Zachyceno nezachycené hovno:', reason);
});
