import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IFolderStructure, IMainState } from "./types";

const initialState: IMainState = {
  folder_structure: {} as IFolderStructure,
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    set_folder_structure: (state, action: PayloadAction<IFolderStructure>) => {
      state.folder_structure = action.payload;
    },
  },
});

export const { set_folder_structure } = mainSlice.actions;

export default mainSlice.reducer;
