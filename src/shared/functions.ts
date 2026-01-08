import FileIcon from "./file-icon";
import { TFolderTree } from "./types";
import { renderToStaticMarkup } from "react-dom/server";

export const get_file_types = (file_name: string) => {
  const fileTypes = {
    ".gitignore": "ignore",
    ".js": "javascript",
    ".jsx": "javascript",
    ".ts": "typescript",
    ".tsx": "typescript",
    ".json": "json",
    ".html": "html",
    ".css": "css",
    ".scss": "scss",
    ".less": "less",
    ".py": "python",
    ".java": "java",
    ".cpp": "cpp",
    ".c": "c",
    ".cs": "csharp",
    ".go": "go",
    ".php": "php",
    ".rb": "ruby",
    ".swift": "swift",
    ".kotlin": "kotlin",
    ".dart": "dart",
    ".xml": "xml",
    ".yaml": "yaml",
    ".yml": "yaml",
    ".md": "markdown",
  };
  return fileTypes[
    Object.keys(fileTypes).filter((type) =>
      new RegExp(`${type}$`).test(file_name)
    )[0] as keyof typeof fileTypes
  ];
};

const organize_folder = (branch: TFolderTree[]) => {
  return branch.sort((a, b) => {
    if (a.is_dir != b.is_dir) {
      // @ts-ignore
      return b.is_dir - a.is_dir;
    }

    return a.name.localeCompare(b.name);
  });
};

export const makeContentList = (
  targetElem: HTMLElement,
  branch: TFolderTree[],
  tree: TFolderTree[],
  handle_set_editor: Function
) => {
  if (branch == undefined) return;

  const sorted_tree = organize_folder(branch);
  sorted_tree.map((branch) => {
    if (branch.is_dir) {
      const wrapper_cont = document.createElement("div");
      wrapper_cont.className = "content-list-wrapper";
      const content_item = document.createElement("div");
      content_item.className = "content-item";
      content_item.innerHTML = `
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M10.072 8.024L5.715 3.667l.618-.62L11 7.716v.618L6.333 13l-.618-.619z" clip-rule="evenodd"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="m7.976 10.072l4.357-4.357l.62.618L8.284 11h-.618L3 6.333l.619-.618z" clip-rule="evenodd"/></svg>
                </div>
                <div class="file-name">${branch.name}</div>
            `;
      const content_list = document.createElement("div");
      content_list.className = "content-list";
      //   content_item.onauxclick = (e) => {
      //     window.electron.folderContext();
      //   };

      content_item.onclick = (e) => {
        if (content_list.classList.contains("shown")) {
          content_item.classList.remove("shown");
          content_list.classList.remove("shown");
          content_list.style.display = "none";
          return (content_list.innerHTML = "");
        } else {
          content_list.classList.add("shown");
          content_item.classList.add("shown");
          content_list.style.display = "block";
        }
        makeContentList(
          content_list,
          tree?.filter(
            (cbranch) =>
              cbranch.parentPath.replace(/\\/g, "/") ==
              `${branch.path}/${branch.name}`.replace(/\\/g, "/")
          ),
          tree,
          handle_set_editor
        );
      };
      wrapper_cont.appendChild(content_item);
      wrapper_cont.appendChild(content_list);
      targetElem.append(wrapper_cont);
    } else {
      const content_item = document.createElement("div");
      content_item.className = "content-item";
      content_item.innerHTML = `
                <div>${renderToStaticMarkup(FileIcon({ type: branch.name.split(".").at(-1) }))}</div>
                <div class="file-name">${branch.name}</div>
            `;
      content_item.onclick = (e) =>
        handle_set_editor(branch.name, branch.parentPath + "/" + branch.name);
      targetElem.append(content_item);
    }
  });
};
