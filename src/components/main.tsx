import React from "react";
import SidebarSection from "./sections/sidebar";
import ContentSection from "./sections/content";

const MainComponent = React.memo((props: any) => {
  return (
    <div className="wrapper-component">
      <div className="header-section"></div>
      <div className="middle-section">
        <SidebarSection />
        <ContentSection />
      </div>
      <div className="footer-section"></div>
    </div>
  );
});

export default MainComponent;
