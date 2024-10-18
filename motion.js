// motion in all html
let hasRedirected = false;

setTimeout(function() {
    if (!hasRedirected) {   
        window.location.href = "arki.html";  
        hasRedirected = true; 
    }
}, 4500);