const path = require('path');

const { app, screen, BrowserWindow } = require('electron');

const server = require('../api/index');

function createWindow() {
    const {width,height} = screen.getPrimaryDisplay().workAreaSize;
    const win = new BrowserWindow({
        width: width,
        height: height,
        center: true,
        minHeight: 800,
        minWidth: 1200,
        webPreferences: {
            nodeIntegration: true,
            zoomFactor: 0.8
        },
    });

    win.loadURL(`file://${path.join(__dirname, '../build', 'index.html')}`);
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});


app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});