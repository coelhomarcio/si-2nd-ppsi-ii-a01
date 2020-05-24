function corSite() {
    if (status) {
        document.querySelector("html").style.backgroundColor = "#fff"
        document.querySelector("body").style.backgroundColor = "#222"
        document.querySelector("body").style.color = "#fff"
        document.querySelector("header").style.backgroundColor = "#000"
        document.querySelector("header").style.borderBottomColor = "#fff"
        document.querySelector("header > div > img").src = "img/logo-fatec-branco.png"
        document.querySelector("header ul li.menu > ul.submenu").style.backgroundColor = "#000"
        document.querySelectorAll("section#grade tr > th").forEach(function (j) {
            j.style.borderColor = "#fff"
        })
        document.querySelector("section#video > video").style.borderColor = "#fff"
        document.querySelectorAll("section#docentes aside > p > img").forEach(function (l) {
            l.style.borderColor = "#fff"
        })
        document.querySelector("footer").style.backgroundColor = "#000"
        document.querySelector("footer").style.color = "#fff"
        document.querySelector("footer > form > button").style.backgroundColor = "#000"
        document.querySelector("footer > form > button").style.color = "#fff"
        document.querySelector("footer > form > button").style.borderColor = "#fff"
    }
    else {
        document.querySelector("html").style.backgroundColor = "#385460"
        document.querySelector("body").style.backgroundColor = "#ddd"
        document.querySelector("body").style.color = "#385460"
        document.querySelector("header").style.backgroundColor = "#222"
        document.querySelector("header").style.borderBottomColor = "#af151e"
        document.querySelector("header > div > img").src = "img/logo-fatec.png"
        document.querySelector("header ul li.menu > ul.submenu").style.backgroundColor = "#222"
        document.querySelectorAll("section#grade tr > th").forEach(function (k) {
            k.style.borderColor = "#af151e"
        })
        document.querySelector("section#video > video").style.borderColor = "#af151e"
        document.querySelectorAll("section#docentes aside > p > img").forEach(function (m) {
            m.style.borderColor = "#af151e"
        })
        document.querySelector("footer").style.backgroundColor = "#222"
        document.querySelector("footer").style.color = "#ddd"
        document.querySelector("footer > form > button").style.backgroundColor = "#222"
        document.querySelector("footer > form > button").style.color = "#ddd"
        document.querySelector("footer > form > button").style.borderColor = "#ddd"
    }
    status = (status === 0) ? !0 : 0
}

function cursoFunc() {
    curso.style.display = "block"
    grade.style.display = "none"
    video.style.display = "none"
    docentes.style.display = "none"
    obrigado.style.display = "none"
    document.querySelector("section#video video").pause()
}

function gradeFunc() {
    curso.style.display = "none"
    grade.style.display = "block"
    video.style.display = "none"
    docentes.style.display = "none"
    obrigado.style.display = "none"
    document.querySelector("section#video video").pause()
}

function videoFunc() {
    curso.style.display = "none"
    grade.style.display = "none"
    video.style.display = "block"
    docentes.style.display = "none"
    obrigado.style.display = "none"
}

function docentesFunc() {
    curso.style.display = "none"
    grade.style.display = "none"
    video.style.display = "none"
    docentes.style.display = "block"
    obrigado.style.display = "none"
    document.querySelector("section#docentes > main").style.display = "grid"
    document.querySelector("section#docentes > aside + p").style.display = "none"
    document.querySelector("section#video video").pause()
    if (reset !== 99) {
        docentes.getElementsByTagName("p")[reset + 22].style.display = "none"
    }
}

function showPic(n) {
    if (reset !== 99) {
        docentes.getElementsByTagName("p")[reset + 22].style.display = "none"
    }
    document.querySelector("section#docentes > main").style.display = "none"
    docentes.getElementsByTagName("p")[n + 22].style.display = "block"
    document.querySelector("section#docentes > aside + p").style.display = "block"
    reset = n
}

function obrigadoFunc() {
    curso.style.display = "none"
    grade.style.display = "none"
    video.style.display = "none"
    docentes.style.display = "none"
    obrigado.style.display = "block"
    document.querySelector("section#video video").pause()
}

let status = true
let reset = 99
let contraste = document.getElementById("contraste")
let curso = document.getElementById("curso")
let grade = document.getElementById("grade")
let video = document.getElementById("video")
let docentes = document.getElementById("docentes")
let obrigado = document.getElementById("obrigado")
contraste.addEventListener("click", function() { corSite() })
document.querySelectorAll("header > nav li a")[0].addEventListener("click", function() { cursoFunc() })
document.querySelectorAll("header > nav li a")[1].addEventListener("click", function() { gradeFunc() })
document.querySelectorAll("header > nav li a")[2].addEventListener("click", function() { videoFunc() })
document.querySelectorAll("header > nav li a")[3].addEventListener("click", function() { docentesFunc() })
document.querySelectorAll("header > nav li a")[5].addEventListener("click", function() { cursoFunc() })
document.querySelectorAll("header > nav li a")[6].addEventListener("click", function() { gradeFunc() })
document.querySelectorAll("header > nav li a")[7].addEventListener("click", function() { videoFunc() })
document.querySelectorAll("header > nav li a")[8].addEventListener("click", function() { docentesFunc() })
for (let i = 0; i <= 22; i++) {
    docentes.getElementsByTagName("p")[i].addEventListener("click", function() { showPic(i) })
}
document.querySelector("section#docentes > aside + p").addEventListener("click", function () { docentesFunc() })
document.querySelector("footer > form > button").addEventListener("click", function() { obrigadoFunc() })
