import React, { act } from "react";
import { useAppDispatch, useAppSelector } from "../../shared/hooks";
import { set_folder_structure } from "../../shared/rdx-slice";
import { IFolderStructure } from "../../shared/types";
import { ReactComponent as TimesIcon } from "../../assets/svg/times.svg";
import { ReactComponent as VSCodeIcon } from "../../assets/svg/vscode.svg";

const ContentSection = React.memo((props: any) => {
  const dispatch = useAppDispatch();
  const folder_structure = useAppSelector(
    (state) => state.main.folder_structure
  );
  const active_files = useAppSelector((state) => state.main.active_files);
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
      {Object.keys(folder_structure).length > 0 && active_files.length == 0 ? (
        <div className="no-selected-files">
          <VSCodeIcon />
        </div>
      ) : (
        <div className="content-inner">
          <div className="page-tabs-cont">
            {active_files.map((file) => (
              <div className="tab">
                <span>{file.icon}</span>
                <span>{file.name}</span>
                <span>
                  <TimesIcon />
                </span>
              </div>
            ))}
          </div>

          <div className="editor-container"></div>
        </div>
      )}
    </div>
  );
});

export default ContentSection;
