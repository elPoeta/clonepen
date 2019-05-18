window.editorHtml = ace.edit("editorHtml", {
    mode: "ace/mode/html",
    selectionStyle: "text"
});

window.editorCss = ace.edit("editorCss", {
    mode: "ace/mode/css",
    selectionStyle: "text"
});

window.editorJs = ace.edit("editorJs", {
    mode: "ace/mode/javascript",
    selectionStyle: "text"
});

editorHtml.setTheme("ace/theme/monokai");
editorCss.setTheme("ace/theme/monokai");
editorJs.setTheme("ace/theme/monokai");