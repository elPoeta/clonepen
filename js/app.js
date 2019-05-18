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

editorHtml.getSession().on('change', function () {
    compile();
});

/*
window.editorCss = ace.edit("editorCss", {
    mode: "ace/mode/css",
    selectionStyle: "text"
});

window.editorJs = ace.edit("editorJs", {
    mode: "ace/mode/javascript",
    selectionStyle: "text"
});


editorCss.setTheme("ace/theme/monokai");
editorJs.setTheme("ace/theme/monokai");
*/

const compile = () => {
    const result = document.querySelector('#codeResult').contentWindow.document;

    result.open();
    result.writeln(editorHtml.getValue());
    result.close();
}