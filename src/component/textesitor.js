
import { useState, useRef } from "react";
import JoditEditor, { Jodit } from "jodit-react";

import React from "react";

const Texteditor = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const config = {
    zIndex: 0,
    readonly: false,
    activeButtonsInReadOnly: ["source", "fullsize", "print", "about"],
    toolbarButtonSize: "middle",
    theme: "default",
    enableDragAndDropFileToEditor: true,
    saveModeInCookie: false,
    spellcheck: true,
    editorCssClass: false,
    triggerChangeEvent: true,
    height: 500,
    direction: "ltr",
    language: "en",
    debugLanguage: false,
    i18n: "en",
    tabIndex: -1,
    toolbar: true,
    enter: "P",
    useSplitMode: false,
    colorPickerDefaultTab: "background",
    imageDefaultWidth: 400,
    removeButtons: [],
    disablePlugins: ["paste", "stat"],
    events: {},
    textIcons: false,
    uploader: {
      insertImageAsBase64URI: true,
    },
    placeholder: "",
    showXPathInStatusbar: false,
  };
  return (
    <div>
      <h1>Welcome to TEXT EDITOR</h1>
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        // onChange={(newContent) => setContent(newContent)}
      />
    </div>
  );
};

export default Texteditor;
