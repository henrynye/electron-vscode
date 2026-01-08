export interface IFolderStructure {
  name: string;
  root: string;
  tree: TFolderTree[];
}

export type TFolderTree = {
  name: string;
  parentPath: string;
  path: string;
  children?: TFolderTree[];
  is_dir: boolean;
};

export interface IMainState {
  folder_structure: IFolderStructure;
  active_files: TActiveFile[];
}

export type TActiveFile = {
  path: string;
  name: string;
  icon: any;
  is_touched: boolean;
};
