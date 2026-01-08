import React from "react";
import { useAppDispatch, useAppSelector } from "../../shared/hooks";
import { makeContentList } from "../../shared/functions";
import { update_active_files } from "../../shared/rdx-slice";
import { TActiveFile } from "../../shared/types";
import FileIcon from "../../shared/file-icon";

const ExplorerRoute = React.memo((props: any) => {
  const folder_structure = useAppSelector(
    (state) => state.main.folder_structure
  );

  const content_main_div_ref = React.useRef<HTMLDivElement | undefined>(
    undefined
  );
  const dispatch = useAppDispatch();
  const active_files = useAppSelector((state) => state.main.active_files);
  const handle_display_file_list = React.useCallback(() => {
    if (Object.keys(folder_structure).length == 0) return;
    const files = folder_structure.tree.filter(
      (content) => content.parentPath == folder_structure.root
    );
    makeContentList(
      content_main_div_ref.current,
      files,
      folder_structure.tree,
      handle_set_editor
    );
  }, [folder_structure, content_main_div_ref.current]);

  const handle_set_editor = React.useCallback(
    (branch_name: string, full_path: string) => {
      console.log("branch", branch_name, full_path);
      const active_file: TActiveFile = {
        icon: <FileIcon type={branch_name.split(".").at(-1)} />,
        path: full_path,
        name: branch_name,
        is_touched: false,
      };
      dispatch(update_active_files([...active_files, active_file]));
    },
    [active_files]
  );

  React.useLayoutEffect(() => {
    handle_display_file_list();
  }, [folder_structure, content_main_div_ref.current]);

  return (
    <div className="folder-tree">
      <div ref={content_main_div_ref} className="content-list main"></div>
    </div>
  );
});

export default ExplorerRoute;
