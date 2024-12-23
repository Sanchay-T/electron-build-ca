const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

let mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width:1800,
    height: 1000,
    // webPreferences: {
    //   preload: path.join(__dirname, 'preload.js'), // Optional: Include if you have a preload.js file
    //   nodeIntegration: false,
    //   contextIsolation: true,
    // },
  });

  const startUrl = url.format({
    //in build mode uncomment below line and comment the next line
    pathname: path.join(__dirname, './myapp/build/index.html'), 
    protocol: 'file:',
  });
  mainWindow.loadURL(startUrl);


  //in development mode use this line and comment the above line
  // mainWindow.loadURL('http://localhost:3000/');

  // Open the DevTools
  // mainWindow.webContents.openDevTools();

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
};

// This method will be called when Electron has finished initialization
app.on('ready', createWindow);

// Quit when all windows are closed
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
