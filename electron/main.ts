import { app, BrowserWindow } from 'electron';
import * as path from 'path';

async function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  const startUrl = process.env.VITE_DEV_SERVER_URL || 
    `file://${path.join(__dirname, '../dist/index.html')}`;

  try {
    await win.loadURL(startUrl);
  } catch (err) {
    console.error('Chyba při načítání URL:', err);
  }
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

process.on('unhandledRejection', (reason) => {
  console.error('Zachyceno nezachycené hovno:', reason);
});
