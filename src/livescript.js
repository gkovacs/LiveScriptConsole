chrome.devtools.panels.create(
    "LiveScriptConsole",
    "badge.png",
    "livescript-console.html",
    function cb(panel) {
        panel.onShown.addListener(function(win){ win.focus(); });
    }
);