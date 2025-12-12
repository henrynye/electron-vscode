import React from "react";
import { useAppDispatch, useAppSelector } from "../../shared/hooks";
import { set_folder_structure } from "../../shared/rdx-slice";
import { IFolderStructure } from "../../shared/types";

const ContentSection = React.memo((props: any) => {
  const dispatch = useAppDispatch();
  const folder_structure = useAppSelector(
    (state) => state.main.folder_structure
  );

  const handle_open_folder = React.useCallback(async () => {
    const folder = (await window.electron.openFolder()) as IFolderStructure;
    folder != undefined && dispatch(set_folder_structure(folder));
  }, []);
  return (
    <div className="content-section">
      {Object.keys(folder_structure).length == 0 && (
        <div className="default-screen">
          <button onClick={handle_open_folder}>Open Directory</button>
        </div>
      )}
    </div>
  );
});

export default ContentSection;
