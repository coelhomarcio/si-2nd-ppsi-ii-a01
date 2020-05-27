function cursoFunc() {
    transitionSectionOut(curso)
    transitionSectionIn(curso)
    transitionSectionOut(grade)
    transitionSectionOut(video)
    transitionSectionOut(docentes)
    transitionSectionOut(obrigado)
    transitionHeaderH2(document.querySelector("header > h2"), true)
    document.querySelector("section#video video").pause()
}

function gradeFunc() {
    transitionSectionOut(grade)
    transitionSectionOut(curso)
    transitionSectionIn(grade)
    transitionSectionOut(video)
    transitionSectionOut(docentes)
    transitionSectionOut(obrigado)
    transitionHeaderH2(document.querySelector("header > h2"))
    document.querySelector("section#video video").pause()
}

function videoFunc() {
    transitionSectionOut(video)
    transitionSectionOut(curso)
    transitionSectionOut(grade)
    transitionSectionIn(video)
    transitionSectionOut(docentes)
    transitionSectionOut(obrigado)
    transitionHeaderH2(document.querySelector("header > h2"))
}

function docentesFunc() {
    transitionSectionOut(docentes)
    transitionSectionOut(curso)
    transitionSectionOut(grade)
    transitionSectionOut(video)
    transitionSectionIn(docentes)
    transitionSectionOut(obrigado)
    if (resetDocentes < document.querySelectorAll("section#docentes > nav > p").length) {
        transitionSectionOut(document.querySelectorAll("section#docentes aside > p")[resetDocentes])
        transitionSectionOut(document.querySelector("section#docentes > aside + p"))
    }
    transitionSectionIn(document.querySelector("section#docentes > nav"), true)
    transitionHeaderH2(document.querySelector("header > h2"))
    document.querySelector("section#video video").pause()
}

function showPic(n) {
    transitionSectionOut(document.querySelector("section#docentes nav"))
    transitionSectionIn(document.querySelector("section#docentes > aside + p"))
    transitionSectionIn(document.querySelectorAll("section#docentes aside > p")[n])
    resetDocentes = n
}

function contraste() {
    document.querySelector("html").style.backgroundColor = statusContraste ? "#fff" : "#385460"
    document.querySelector("body").style.backgroundColor = statusContraste ? "#222" : "#ddd"
    document.querySelector("body").style.color = statusContraste ? "#fff" : "#385460"
    document.querySelector("header").style.backgroundColor = statusContraste ? "#000" : "#222"
    document.querySelector("header").style.borderBottomColor = statusContraste ? "#fff" : "#af151e"
    document.querySelector("header > h1 > img").src = statusContraste ? "img/logo-fatec-branco.png" : "img/logo-fatec.png"
    document.querySelector("header ul li.menu > ul.submenu").style.backgroundColor = statusContraste ? "#000" : "#222"
    document.querySelectorAll("section#grade > nav > ul > li > a").forEach(function (j) {
        j.style.color = statusContraste ? "#fff" : "#ddd"
        j.style.backgroundColor = statusContraste ? "#000" : "#385460"
    })
    document.querySelector("section#video > video").style.borderColor = statusContraste ? "#fff" : "#af151e"
    document.querySelectorAll("section#docentes > nav > p").forEach(function(k) {
        k.style.outlineColor = statusContraste ? "#fff" : "#af151e"
    })
    document.querySelectorAll("section#docentes aside > p > img").forEach(function (l) {
        l.style.borderColor = statusContraste ? "#fff" : "#af151e"
    })
    document.querySelectorAll("section#config li > a").forEach(function(m) {
        m.style.backgroundColor = statusContraste ? "#000" : "#222"
    })
    document.querySelector("footer").style.backgroundColor = statusContraste ? "#000" : "#222"
    document.querySelector("footer").style.color = statusContraste ? "#fff" : "#385460"
    document.querySelector("footer").style.borderTopColor = statusContraste ? "#fff" : "#af151e"
    document.querySelector("footer > p > input[type='submit']").style.backgroundColor = statusContraste ? "#000" : "#222"
    statusContraste = ! statusContraste
}

function fonte(tam) {
    if (tam === 0) {
        document.querySelector("body").style.fontSize = `${inicialFonte = 1}em`
        limiteFonte = 0
    }
    else if (tam === 1) {
        if (limiteFonte < 7) {
            document.querySelector("body").style.fontSize = `${inicialFonte += 0.1}em`
            limiteFonte++
        }
        else {
            document.querySelector("section#config li > a#fonteMais").style.border = "1px solid #af151e"
            setTimeout(function() {
                document.querySelector("section#config li > a#fonteMais").style.border = "0"
            }, 300)
        }
    }
    else if (tam === -1) {
        if (limiteFonte > -7) {
            document.querySelector("body").style.fontSize = `${inicialFonte -= 0.1}em`
            limiteFonte--
        }
        else {
            document.querySelector("section#config li > a#fonteMenos").style.border = "1px solid #af151e"
            setTimeout(function() {
                document.querySelector("section#config li > a#fonteMenos").style.border = "0"
            }, 300)
        }
    }
}

function obrigadoFunc() {
    transitionSectionOut(obrigado)
    transitionSectionOut(curso)
    transitionSectionOut(grade)
    transitionSectionOut(video)
    transitionSectionOut(docentes)
    transitionSectionIn(obrigado)
    transitionHeaderH2(document.querySelector("header > h2"))
    document.querySelector("section#video video").pause()
}

function transitionSectionIn(targetIn, grid=false) {
    window.setTimeout(function() {
        targetIn.style.opacity = "1"
        targetIn.style.transform = "scale(1)"
    }, 300)
    targetIn.style.display = grid ? "grid" : "block"
}

function transitionSectionOut(targetOut) {
    targetOut.style.display = "none"
    targetOut.style.opacity = "0"
    window.setTimeout(function() {
        targetOut.style.transform = "scale(0)"
    }, 300)
}

function transitionHeaderH2(target, si=false) {
    target.style.opacity = "0"
    window.setTimeout(function() {
        target.style.transform = "scale(0)"
        target.style.display = "none"
        target.style.display = "grid"
        target.style.opacity = "1"
        target.style.transform = "scale(1)"
        target.textContent = si ? "Ensino superior gratuito de qualidade" : "Sistemas para Internet"
    }, 300)
}

let curso = document.querySelector("section#curso")
let grade = document.querySelector("section#grade")
let video = document.querySelector("section#video")
let docentes = document.querySelector("section#docentes")
let resetDocentes = document.querySelectorAll("section#docentes > nav > p").length + 1
let obrigado = document.querySelector("section#obrigado")
let statusContraste = true
let inicialFonte = 1
let limiteFonte = 0
document.querySelectorAll("a.curso").forEach(function (e) {
    e.addEventListener("click", function() { cursoFunc() })
})
document.querySelectorAll("a.grade").forEach(function (f) {
    f.addEventListener("click", function() { gradeFunc() })
})
document.querySelectorAll("a.video").forEach(function (g) {
    g.addEventListener("click", function() { videoFunc() })
})
document.querySelectorAll("a.docentes, section#docentes > p").forEach(function (h) {
    h.addEventListener("click", function() { docentesFunc() })
})
for (let i = 0; i <= document.querySelectorAll("section#docentes > nav > p").length; i++) {
    docentes.getElementsByTagName("p")[i].addEventListener("click", function() { showPic(i) })
}
document.querySelector("section#config li > a#contraste").addEventListener("click", function() { contraste() })
document.querySelector("section#config li > a#fonteMais").addEventListener("click", function() { fonte(1) })
document.querySelector("section#config li > a#fonteReset").addEventListener("click", function() { fonte(0) })
document.querySelector("section#config li > a#fonteMenos").addEventListener("click", function() { fonte(-1) })
document.querySelector("footer > p > input[type='submit']").addEventListener("click", function() { obrigadoFunc() })
