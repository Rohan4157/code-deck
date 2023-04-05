import React, { useState, useEffect } from "react";// npm i @uiw/react-codemirror
import CodeMirror from "@uiw/react-codemirror";
import { githubDark, githubLight } from "@uiw/codemirror-theme-github";
import { bespin } from "@uiw/codemirror-theme-bespin";
import { duotoneDark, duotoneLight } from "@uiw/codemirror-theme-duotone";
import { dracula } from "@uiw/codemirror-theme-dracula";
import { xcodeDark, xcodeLight } from "@uiw/codemirror-theme-xcode";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { okaidia } from "@uiw/codemirror-theme-okaidia";
import { cpp } from "@codemirror/lang-cpp";
import { java } from "@codemirror/lang-java";
import { python } from "@codemirror/lang-python";
import { javascript } from "@codemirror/lang-javascript";
import { indentUnit } from "@codemirror/language";
import { EditorState } from "@codemirror/state";

function CodeEditor({currentCode, currentLanguage, setCurrentCode, currentTheme, isFullScreen}) {

  const [theme, setTheme] = useState(githubDark);
  const [language, setLanguage] = useState(javascript);

  useEffect(() => {
    if (currentLanguage === "javascript") {
      setLanguage(javascript);
    } else if (currentLanguage === "python") {
      setLanguage(python);
    } else if (currentLanguage === "java") {
      setLanguage(java);
    } else if (currentLanguage === "cpp") {
      setLanguage(cpp);
    }
  }, [currentLanguage]);
  
  useEffect(() => {
    if (currentTheme === "githubDark") {
      setTheme(githubDark);
    } else if (currentTheme === "githubLight") {
      setTheme(githubLight);
    } else if (currentTheme === "bespin") {
      setTheme(bespin);
    } else if (currentTheme === "duotoneDark") {
      setTheme(duotoneDark);
    } else if (currentTheme === "duotoneLight") {
      setTheme(duotoneLight);
    } else if (currentTheme === "dracula") {
      setTheme(dracula);
    } else if (currentTheme === "xcodeDark") {
      setTheme(xcodeDark);
    } else if (currentTheme === "xcodeLight") {
      setTheme(xcodeLight);
    } else if (currentTheme === "vscodeDark") {
      setTheme(vscodeDark);
    } else if (currentTheme === "okaidia") {
      setTheme(okaidia);
    }
  }, [currentTheme]);
  return (
    <CodeMirror
      value={currentCode}
      height={`${isFullScreen ? "92vh" : "76vh"}`}
      theme={theme}
      extensions={[ language, indentUnit.of(" "), EditorState.tabSize.of(8), EditorState.changeFilter.of(() => true),]}
      onChange={(value) => setCurrentCode(value)}
      basicSetup={{
        lineNumbers: true,
        highlightActiveLineGutter: true,
        highlightSpecialChars: true,
        history: true,
        foldGutter: true,
        drawSelection: true,
        dropCursor: true,
        allowMultipleSelections: true,
        indentOnInput: true,
        syntaxHighlighting: true,
        bracketMatching: true,
        closeBrackets: true,
        autocompletion: true,
        rectangularSelection: true,
        crosshairCursor: true,
        highlightActiveLine: true,
        highlightSelectionMatches: true,
        closeBracketsKeymap: true,
        defaultKeymap: true,
        searchKeymap: true,
        historyKeymap: true,
        foldKeymap: true,
        completionKeymap: true,
        lintKeymap: true,
      }}
    />
  );
}

export default CodeEditor;
