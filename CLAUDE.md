# electron-vscode Project Overview

## Project Summary

This is an **early-stage VSCode clone** built with Electron and React. The project aims to create a desktop code editor that mimics Visual Studio Code's interface and functionality.

## Technology Stack

- **Framework:** Electron v39.2.6
- **UI:** React v19.2.1 + React Router v7.10.1
- **State:** Redux Toolkit v2.11.1
- **Language:** TypeScript v5.9.3
- **Editor:** Monaco Editor v0.55.1 (VSCode's own editor)
- **Build:** Webpack + Electron Forge v7.10.2

## Project Structure

```
electron-vscode/
├── src/
│   ├── index.ts                    # Main Electron process entry
│   ├── preload.ts                  # Preload script (IPC bridge)
│   ├── renderer.ts                 # Renderer process entry
│   ├── app-entry.tsx               # React app bootstrap
│   ├── app.tsx                     # Root React component
│   ├── index.html                  # HTML shell
│   ├── index.css                   # Global styles
│   ├── global.d.ts                 # TypeScript declarations
│   │
│   ├── components/
│   │   ├── main.tsx                # Main layout component
│   │   ├── sections/
│   │   │   ├── sidebar.tsx         # Sidebar with icon navigation
│   │   │   └── content.tsx         # Main content area
│   │   └── sidebar-routes/
│   │       ├── sidebarIndex.tsx    # Sidebar route index
│   │       └── explorer.tsx        # File explorer route
│   │
│   ├── shared/
│   │   ├── store.ts                # Redux store configuration
│   │   ├── rdx-slice.ts            # Redux slice (folder structure)
│   │   ├── hooks.ts                # Typed Redux hooks
│   │   ├── types.ts                # TypeScript interfaces
│   │   └── router.tsx              # React Router configuration
│   │
│   └── assets/
│       ├── svg/                    # 40+ SVG icons (VSCode-style)
│       ├── codicons/               # Codicon font files
│       └── index.css               # Asset styles
│
└── Configuration Files:
    ├── package.json                # Dependencies & scripts
    ├── tsconfig.json               # TypeScript config
    ├── forge.config.ts             # Electron Forge config
    ├── webpack.main.config.ts      # Main process webpack
    ├── webpack.renderer.config.ts  # Renderer process webpack
    ├── webpack.rules.ts            # Webpack loaders
    ├── webpack.plugins.ts          # Webpack plugins
    └── .eslintrc.json              # ESLint configuration
```

## Key Files and Their Purposes

### Main Process (Electron)
- **src/index.ts** - Main Electron entry point that:
  - Creates frameless browser window (600x800)
  - Implements folder opening dialog via IPC
  - Stores selected folder using electron-store
  - Provides file system reading functionality
  - Opens DevTools automatically

### Preload Script
- **src/preload.ts** - Context bridge exposing:
  - `openFolder()` - Opens directory picker dialog
  - `get_folder()` - Retrieves previously selected folder

### Renderer Process (React)
- **src/app.tsx** - Root component that loads saved folder on mount
- **src/components/main.tsx** - Layout with header, sidebar, content, footer sections
- **src/components/sections/sidebar.tsx** - Icon-based navigation with 7 tools (Explorer, Search, Source Control, Debug, Extensions, Accounts, Settings)
- **src/components/sections/content.tsx** - Main content area with "Open Directory" button

### State Management
- **src/shared/rdx-slice.ts** - Redux slice managing folder structure state
- **src/shared/types.ts** - Defines `IFolderStructure` and `TFolderTree` interfaces

## Current State

### Implemented Features
- [x] Electron app with frameless window
- [x] VSCode-inspired UI layout (header, sidebar, content, footer)
- [x] Icon-based navigation sidebar
- [x] Folder selection dialog
- [x] Persistent folder storage (electron-store)
- [x] File system reading (recursive)
- [x] Redux state management
- [x] Monaco editor integration (configured but not yet used)
- [x] SVG icon library (40+ icons)
- [x] Dark theme styling

### Incomplete Features
- [ ] File explorer tree view (placeholder "hello world")
- [ ] File content display/editing
- [ ] Monaco editor implementation
- [ ] Search functionality
- [ ] Source control integration
- [ ] Debug panel
- [ ] Extensions system
- [ ] Settings panel
- [ ] Header/footer content

## Dependencies

### Production
- `@reduxjs/toolkit` - State management
- `monaco-editor` - Code editor component
- `react-router-dom` - Client-side routing
- `electron-store` - Persistent settings storage
- `react-perfect-scrollbar` - Custom scrollbars

### Development
- `@electron-forge/*` - Build and packaging tools
- TypeScript tooling and loaders
- Webpack loaders (ts-loader, css-loader, url-loader)
- `@svgr/webpack` - SVG to React component conversion
- ESLint for code quality

## Build Scripts

- `npm start` - Development mode with hot reload
- `npm run package` - Package for distribution
- `npm run make` - Create platform-specific installers
- `npm run lint` - Run ESLint

## Design & Styling

The application uses a **VSCode-inspired dark theme** with:
- Background: `#1e1e1e`
- Accent blue: `#0078d4`
- Grid-based layout (CSS Grid)
- Custom scrollbar styling
- Frameless window with draggable header region
- 50px icon sidebar + 165px explorer panel

## Recent Development History

1. `b03034a` - "ui development" (most recent)
2. `4f00092` - "svgs" (added icon assets)
3. `5dd1a31` - "project setup"
4. `1d5e8c7` - "setup electron app"

## Next Development Steps

The natural progression would be:
1. Implement file tree explorer in the sidebar
2. Integrate Monaco editor for file viewing/editing
3. Add tab management for multiple open files
4. Build out search, git, and debugging features

## Architecture Notes

The codebase follows Electron security best practices:
- Context isolation enabled
- Clear separation between main/preload/renderer processes
- IPC communication for secure main-renderer interaction
- No Node.js access from renderer (uses preload bridge)

## Development Notes

- Modified files show active development on UI and file system integration
- 153 insertions, 23 deletions in current working state
- Main focus: UI layout and folder management functionality
