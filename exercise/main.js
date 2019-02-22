//1.初始化数据
var init = init()
var keys = init["keys"]
var webHash = init["webHash"]

//2.生成键盘
generateKeyboard(keys,webHash)

//3.监听键盘
listenUser(webHash)

//公共函数

//从localStorage中取数据
function getLocalStorage(name) {
    return JSON.parse(localStorage.getItem(name)) || ""
}

//创建标签
function tag(tagName) {
    return document.createElement(tagName)
}

function createSpan(textContent) {
    var spanXXX = tag("span")
    spanXXX.textContent = textContent
    spanXXX.className = "text"

    return spanXXX
}

function createButton(id) {
    var buttonXXX = tag("button")
    buttonXXX.textContent = "编辑"
    buttonXXX.id = id
    buttonXXX.onclick = function (hydyhet) {
        var button2 = hydyhet["target"]
        var img2 = button2.previousSibling
        var key = button2["id"]
        var newURL = prompt("请输入新的网址")
        if (newURL) {
            webHash[key] = newURL
        }
        img2.src = "http://" + newURL + "/favicon.ico"
        img2.onerror = function (dasdasd) {
            dasdasd.target.src = "./blank.png"
        }
        localStorage.setItem("zzz", JSON.stringify(webHash))
    }

    return buttonXXX
}

function createImg(domainName) {
    var imgXXX = tag("img")
    //给按钮添加图标
    if (domainName) {
        imgXXX.src = "http://" + domainName + "/favicon.ico"
    } else {
        imgXXX.src = "./blank.png"
    }
    //如果图片下载失败，替换为默认图片
    imgXXX.onerror = function (xxx) {
        xxx.target.src = "./blank.png"
    }

    return imgXXX
}

//生成键盘
function generateKeyboard(keys,webHash) {
    for (var index = 0; index < Object.keys(keys).length; index++) {
        var divXXX = tag("div")
        divXXX.className = "row"

        myKeyboard.appendChild(divXXX)

        var row = keys[index]  //数组
        for (var index2 = 0; index2 < row.length; index2++) {
            var spanXXX = createSpan(row[index2])

            var buttonXXX = createButton(row[index2])

            var imgXXX = createImg(webHash[row[index2]])


            var kbdXXX = tag("kbd")
            kbdXXX.className = "key"
            kbdXXX.appendChild(spanXXX)
            kbdXXX.appendChild(imgXXX)
            kbdXXX.appendChild(buttonXXX)

            divXXX.appendChild(kbdXXX)
        }
    }
}

//监听用户键盘动作
function listenUser(webHash){
    document.onkeypress = function (asdfgs) {
        var key = asdfgs["key"]
        var openURL = webHash[key]
        window.open("http://" + openURL, "_blank")
    }
}

//初始化的数据
function init() {
    var keys = {
        0: ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
        1: ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
        2: ["z", "x", "c", "v", "b", "n", "m"]
    }
    var webHash = {
        q: "mail.qq.com",
        w: "weibo.com",
        e: undefined,
        r: undefined,
        t: "taobao.com",
        y: "www.youtube.com",
        u: "bilibili.com",
        i: "iqiyi.com",
        o: "zealer.com",
        p: "52pojie.cn",
        a: "smzdm.com",
        s: undefined,
        d: "douyu.com",
        f: "www.facebook.com",
        g: "github.com",
        h: "huya.com",
        j: "juejin.im",
        k: undefined,
        l: undefined,
        z: "www.zhihu.com",
        x: undefined,
        c: undefined,
        v: "www.v2ex.com",
        b: "baidu.com",
        n: undefined,
        m: undefined
    }

    var hashLocalStorage = getLocalStorage("zzz")
    if (hashLocalStorage) {
        webHash = hashLocalStorage
    }

    return {
        "keys": keys,
        "webHash": webHash
    }
}