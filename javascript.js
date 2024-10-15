window.onload = function() {
    var loadingScreen = document.getElementById("loading-screen");
    var progressBar = document.getElementById("progress-bar");
    var width = 0;
    var interval = setInterval(function() {
        if (width < 100) {
            width++;
            progressBar.style.width = width + '%';
        } else {
            clearInterval(interval);
            setTimeout(function() {
                loadingScreen.style.display = "none";
                window.location.href = "indexx.html";
            }, 500); 
        }
    }, 20);
};