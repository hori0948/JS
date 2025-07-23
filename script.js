window.addEventListener('load', function () {
    const pullDownButton = document.getElementById("lists");

    //マウスオーバーした時
    pullDownButton.addEventListener("mouseover", function () {
        pullDownButton.setAttribute("style", "background-color:blue;");
        console.log("乗ったときは青色");
    });

    //マウスアウトした時
    pullDownButton.addEventListener("mouseout", function () {
        pullDownButton.removeAttribute("style", "background-color:red;");
        console.log("外れた時は赤色");
    });

    //クリックした時
    pullDownButton.addEventListener("click", function () {
        pullDownButton.setAttribute("style", "background-color:green;");
        console.log("クリック時は緑色");
    });
});
