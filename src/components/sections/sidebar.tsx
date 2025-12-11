import React from "react";
import { ReactComponent as FileIcon } from "../../assets/svg/files.svg";
import { ReactComponent as SearchIcon } from "../../assets/svg/search.svg";
import { ReactComponent as ExtensionsIcon } from "../../assets/svg/extensions.svg";
import { ReactComponent as DebuggingIcon } from "../../assets/svg/debug.svg";
import { ReactComponent as SourceIcon } from "../../assets/svg/source.svg";
import { ReactComponent as AccountIcon } from "../../assets/svg/account.svg";
import { ReactComponent as SettingsIcon } from "../../assets/svg/settings.svg";
import { Link, Outlet } from "react-router-dom";

const SidebarSection = React.memo((props: any) => {
  return (
    <div className="sidebar-section">
      <div className="icon-list">
        <div>
          <Link to={"/sidebar"} className="icon active">
            <FileIcon />
            <div className="tooltip">Explorer</div>
          </Link>
          <div className="icon">
            <SearchIcon />
            <div className="tooltip">Search</div>
          </div>
          <div className="icon">
            <SourceIcon />
            <div className="tooltip">Source Control</div>
          </div>
          <div className="icon">
            <DebuggingIcon />
            <div className="tooltip">Run and Debug</div>
          </div>
          <div className="icon">
            <ExtensionsIcon />
            <div className="tooltip">Extensions</div>
          </div>
        </div>
        <div>
          <div className="icon">
            <AccountIcon />
            <div className="tooltip">Accounts</div>
          </div>
          <div className="icon">
            <SettingsIcon />
            <div className="tooltip">Manage</div>
          </div>
        </div>
      </div>
      <div className="explorer-list">{<Outlet />}</div>
    </div>
  );
});

export default SidebarSection;
