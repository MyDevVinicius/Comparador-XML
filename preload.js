const{contextBridge, ipcRenderer}=require('electron');
contextBridge.exposeInMainWorld('api',{
    title:'Comparador XML'
})