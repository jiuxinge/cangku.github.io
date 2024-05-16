!function isFirstTime() {
    if (localStorage.getItem("visited") === null) {
        localStorage.setItem("visited","true");
        return true;
    } else {
        return false;
    }
}

!function showGuide() {
    if (isFirstTime()) {
        window.location.href = "";
    } else {
        console.log("这不是第一次访问了");
        window.location.href = "index.html";
    }
}