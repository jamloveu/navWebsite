//1、初始化数据
var hashA = init()
var keys = hashA["keys"]
var hash = hashA["hash"]

//2、生成键盘
//遍历keys，生成kbd标签
generateKeybord(keys, hash)

//3、监听用户动作
ListenToUser(hash)

//下面是工具函数
function getFromLocalStorage(name) {
    return JSON.parse(localStorage.getItem(name) || 'null')
}
function tag(tagName) {
    return document.createElement(tagName)
}
function createSpan(textContent) {
    var span = tag('span')
    span.textContent = textContent
    span.className = "text"
    return span
}
function creatButton(id) {
    var button = tag('button')
    button.textContent = '编辑'
    button.id = id
    button.onclick = function (xzkjcnxlkcjlk) {
        var button2 = xzkjcnxlkcjlk['target']
        var img2 = button2.previousSibling
        var key = button2['id']
        var x = prompt('给我一个网址')
        hash[key] = x //hash变更
        img2.src = 'http://' + x + '/favicon.ico'
        img2.onerror = function (xxx) {
            xxx.target.src = ('./blank.png')
        }
        localStorage.setItem('zzz', JSON.stringify(hash)) //把变更后的hash存在zzz里面
    }
    return button
}
function creatImage(domain) {
    var img = tag('img')
    if (domain) {
        img.src = 'http://' + domain + '/favicon.ico'
    } else {
        img.src = './blank.png'
    }
    img.onerror = function (xxx) {
        xxx.target.src = ('./blank.png')
    }
    return img
}
function init() {
    var keys = {
        0: ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
        1: ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
        2: ["z", "x", "c", "v", "b", "n", "m"],
        length: 3
    }
    var hash = {
        q: 'mail.qq.com', w: 'weibo.com', e: 'dribbble.com',
        r: 'www.people.com.cn', t: 'taobao.com',
        y: 'www.youtube.com', u: 'bilibili.com',
        i: 'iqiyi.com', o: 'zealer.com',
        p: '52pojie.cn', a: 'smzdm.com',
        s: undefined, d: 'douyu.com',
        f: 'www.facebook.com', g: 'github.com',
        h: 'huya.com', j: 'juejin.im',
        k: undefined, l: undefined, z: 'www.zhihu.com',
        x: undefined, c: undefined, v: 'www.v2ex.com',
        b: 'baidu.com', n: undefined, m: undefined
    }
    //取出localStorage中的zzz 对应的hash
    var hashInLocalStorage = getFromLocalStorage('zzz')
    if (hashInLocalStorage) {
        hash = hashInLocalStorage
    }
    return {
        "keys": keys,
        "hash": hash
    }
}

function generateKeybord(keys, hash) {
    for (var index = 0; index < keys['length']; index = index + 1) {
        var div = tag('div')
        div.className = 'row'
        main.appendChild(div)
        var row = keys[index] // 第一个数组,第二个数组,第三个数组
        for (var index2 = 0; index2 < row['length']; index2 = index2 + 1) {
            var span = createSpan(row[index2])
            var button = creatButton(row[index2])
            var img = creatImage(hash[row[index2]])
            var kbd = tag('kbd')
            kbd.className = 'key'
            kbd.appendChild(span)
            kbd.appendChild(img)
            kbd.appendChild(button)
            div.appendChild(kbd)
        }
    }
}

function ListenToUser(hash) {
    document.onkeypress = function (xzkjcnxlkcjlk) {
        var key = xzkjcnxlkcjlk['key'] //q w e r...
        console.log(key)
        var website = hash[key]
        console.log(website)
        //location.href = 'http://'+website
        window.open('http://' + website, '_blank')
    }
}



