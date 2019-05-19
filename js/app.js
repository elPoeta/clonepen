const result = document.querySelector("#codeResult");
ace.require("ace/ext/language_tools");

window.editorHtml = ace.edit("editorHtml", {
  mode: "ace/mode/html",
  selectionStyle: "text"
});

editorHtml.setTheme("ace/theme/monokai");

editorHtml.setOption("mergeUndoDeltas", "always");

editorHtml.setOptions({
  autoScrollEditorIntoView: true,
  enableBasicAutocompletion: true,
  enableSnippets: true,
  enableLiveAutocompletion: true,
  fontSize: "100%"
});

editorHtml.getSession().on("change", function () {
  compile();
});

window.editorCss = ace.edit("editorCss", {
  mode: "ace/mode/css",
  selectionStyle: "text"
});

editorCss.setTheme("ace/theme/monokai");

editorCss.setOption("mergeUndoDeltas", "always");

editorCss.setOptions({
  autoScrollEditorIntoView: true,
  enableBasicAutocompletion: true,
  enableSnippets: true,
  enableLiveAutocompletion: true,
  fontSize: "100%"
});

editorCss.getSession().on("change", function () {
  compile();
});

window.editorJs = ace.edit("editorJs", {
  mode: "ace/mode/javascript",
  selectionStyle: "text"
});

editorJs.setTheme("ace/theme/monokai");

editorJs.setOption("mergeUndoDeltas", "always");

editorJs.setOptions({
  autoScrollEditorIntoView: true,
  enableBasicAutocompletion: true,
  enableSnippets: true,
  enableLiveAutocompletion: true,
  fontSize: "100%"
});

editorJs.getSession().on("change", function () {
  compile();
});

const compile = () => {
  result.srcdoc = `${editorHtml.getValue()}
                  <style>${editorCss.getValue()}</style>
                  <script>${editorJs.getValue()}</script>`;
};

function changeView() {
  document.querySelectorAll(".ace_editor").forEach(e => {
    e.classList.toggle("hidden");
  });
  document.querySelectorAll(".vertical-text").forEach(e => {
    e.style.display === "none"
      ? (e.style.display = "block")
      : (e.style.display = "none");
  });
  document.querySelector(".editor-container").classList.toggle("hidden");

  document.querySelector("#codeResult").classList.toggle("fullResult");
}
