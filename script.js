window.addEventListener('load', function () {
    const pullDownButton = document.getElementById("lists");
    //const pullDownMenu = document.getElementById("pull-down");

    //マウスオーバーした時
    pullDownButton.addEventListener("mouseover", function () {
        // pullDownMenu.classList.remove("hidden");
        console.log("乗る");
    });

    //マウスアウトした時
    pullDownButton.addEventListener("mouseout", function () {
        // pullDownMenu.classList.add("hedden");
        console.log("外れる");
    });

    //クリックした時
    pullDownButton.addEventListener("click", function () {
        // pullDownMenu.classList.toggle("hidden");
        console.log("クリック");
    });
});

