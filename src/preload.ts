// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge, ipcRenderer } from "electron";

const renderer = {
  openFolder: async () => {
    const folder = await ipcRenderer.invoke("open-folder");
    console.log("folder", folder);
    return folder;
  },
  get_folder: async () => {
    const folder = await ipcRenderer.invoke("get-folder");
    console.log("folder", folder);
    return folder;
  },
};

contextBridge.exposeInMainWorld("electron", renderer);

export type ERenderer = typeof renderer;
