import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IFolderStructure, IMainState, TActiveFile } from "./types";

const initialState: IMainState = {
  folder_structure: {} as IFolderStructure,
  active_files: [],
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    set_folder_structure: (state, action: PayloadAction<IFolderStructure>) => {
      state.folder_structure = action.payload;
    },
    update_active_files: (state, action: PayloadAction<TActiveFile[]>) => {
      state.active_files = action.payload;
    },
  },
});

export const { set_folder_structure, update_active_files } = mainSlice.actions;

export default mainSlice.reducer;
