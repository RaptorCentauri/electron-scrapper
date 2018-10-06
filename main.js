import { BrowserWindow, app,} from 'electron';

app.on('ready', () => {
    let mainWindow = new BrowserWindow({
        width: 1250,
        height: 1250
    })

    mainWindow.loadURL(`file://${__dirname}/index.html`)
    mainWindow.openDevTools();
})


