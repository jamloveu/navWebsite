var keys = {
    0: ["q","w","e","r","t","y","u","i","o","p"],
    1: ["q","w","e","r","t","y","u","i","o","p"],
    2: ["q","w","e","r","t","y","u","i","o","p"]
}

var webHash = {
    q: "lol.qq.com",
    w: "weibo.com",
    e: undefined,
    r: undefined,
    t: "taobao.com",
    y: "youtube.com",
    u: "bilibili.com",
    i: "iqiyi.com",
    o: "zealer.com",
    p: "52pojie.cn",
    a: "smzdm.com",
    s: undefined,
    d: "douyu.com",
    f: undefined,
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

for(var i=0; i<Object.keys(keys).length; i++){
    var div = document.createElement("div")
    myKeyboard.appendChild(div)
    div.className = "div"

    var row = keys[i]
    for(var j=0; j<row.length; j++){
        var kbd = document.createElement("kbd")
        kbd.textContent = row[j]
        kbd.className = "key"
        div.appendChild(kbd)

        var img = document.createElement("img")
        img.src = "http://" + webHash[row[j]] + "/favicon.ico"
        kbd.appendChild(img)

    }
}