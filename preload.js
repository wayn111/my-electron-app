const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('shell', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  open: () => ipcRenderer.send('shell:open'),
  // 能暴露的不仅仅是函数，我们还可以暴露变量
})