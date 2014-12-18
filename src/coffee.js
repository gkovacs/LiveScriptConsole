chrome.devtools.panels.create(
    "CoffeeConsole",
    "badge.png",
    "coffee-console.html",
    function cb(panel) {
        panel.onShown.addListener(function(win){ win.focus(); });
    }
);