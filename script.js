function pullDown() {
    const pullDownButton = document.getElementById("lists");
    const pullDownParents = this.document.getElementById("pull-down");
    const pullDownChild = this.document.querySelectorAll(".pull-down-list");
    const currentList = this.document.getElementById("current-list");

    //マウスオーバーした時
    pullDownButton.addEventListener("mouseover", function () {
        this.setAttribute("style", "background-color:blue;");
        console.log("乗ったときは青色");
    });

    //マウスアウトした時
    pullDownButton.addEventListener("mouseout", function () {
        this.removeAttribute("style", "background-color:red;");
        console.log("外れた時は赤色");
    });

    //クリックした時
    pullDownButton.addEventListener("click", function () {
        if (pullDownParents.getAttribute("style") == "display:block;") {
            pullDownParents.removeAttribute("style", "display:block;");
            console.log("非表示");
        } else {
            pullDownParents.setAttribute("style", "display:block;");
            console.log("表示");
        }
        pullDownChild.forEach(function (list) {
            list.addEventListener("click", function () {
                const value = list.innerHTML;
                currentList.innerHTML = value;
                console.log(value);
            });
        });
    });

};
window.addEventListener('load', pullDown);
