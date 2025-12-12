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
}
