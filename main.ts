import { app, BrowserWindow } from "electron";
import path from "path";

const isDev = !app.isPackaged;

let mainWindow: BrowserWindow | null = null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    backgroundColor: "white",
  });

  mainWindow.webContents.openDevTools();

  if (isDev) {
    mainWindow.loadURL("http://localhost:4000");
  } else {
    //
  }

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.whenReady().then(createWindow);
