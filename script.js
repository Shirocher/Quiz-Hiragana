let titulo     = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso      = document.querySelector('#aviso')
let progresso  = document.querySelector('#progresso')
let pontos = 0 
let placar = 0 


let numQuestao = document.querySelector('#numQuestao')
let imgQuestao = document.querySelector('.Letra img')
let pergunta   = document.querySelector('#pergunta')


let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')


let articleQuestoes = document.querySelector('.Questao')

let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 1,
    pergunta     : "Que letra é essa?",
    imagem       : 'LetraA.png',
    alternativaA : "A",
    alternativaB : "BA",
    alternativaC : "KA",
    alternativaD : "TA",
    correta      : "0",
}
const q1 = {
    numQuestao   : 1,
    pergunta     : "Que letra é essa?",
    imagem       : 'LetraA.png',
    alternativaA : "A",
    alternativaB : "BA",
    alternativaC : "KA",
    alternativaD : "TA",
    correta      : "A",
}
const q2 = {
    numQuestao   : 2,
    pergunta     : "Que letra é essa?",
    imagem       : 'LetraCHI.png',
    alternativaA : "TO",
    alternativaB : "TSU",
    alternativaC : "CHI",
    alternativaD : "HO",
    correta      : "CHI",
}
const q3 = {
    numQuestao   : 3,
    pergunta     : "Que letra é essa?",
    imagem       : 'LetraE.png',
    alternativaA : "KE",
    alternativaB : "FU",
    alternativaC : "E",
    alternativaD : "TE",
    correta      : "E",
}
const q4 = {
    numQuestao   : 4,
    pergunta     : "Que letra é essa?",
    imagem       : 'LetraFU.png',
    alternativaA : "O",
    alternativaB : "MO",
    alternativaC : "NA",
    alternativaD : "FU",
    correta      : "FU",
}
const q5 = {
    numQuestao   : 5,
    pergunta     : "Que letra é essa?",
    imagem       : 'LetraHA.png',
    alternativaA : "HA",
    alternativaB : "NO",
    alternativaC : "N",
    alternativaD : "RU",
    correta      : "HA",
}
const q6 = {
    numQuestao   : 6,
    pergunta     : "Que letra é essa?",
    imagem       : 'LetraHE.png',
    alternativaA : "KI",
    alternativaB : "HE",
    alternativaC : "ME",
    alternativaD : "NI",
    correta      : "HE",
}
const q7 = {
    numQuestao   : 7,
    pergunta     : "Que letra é essa?",
    imagem       : 'LetraKA.png',
    alternativaA : "I",
    alternativaB : "TA",
    alternativaC : "KA",
    alternativaD : "SHI",
    correta      : "KA",
}
const q8 = {
    numQuestao   : 8,
    pergunta     : "Que letra é essa?",
    imagem       : 'LetraSHI.png',
    alternativaA : "TSU",
    alternativaB : "SA",
    alternativaC : "SHI",
    alternativaD : "KO",
    correta      : "SHI",
}
const q9 = {
    numQuestao   : 9,
    pergunta     : "Que letra é essa?",
    imagem       : 'LetraMU.png',
    alternativaA : "TSU",
    alternativaB : "MU",
    alternativaC : "NU",
    alternativaD : "MA",
    correta      : "MU",
}
const q10 = {
    numQuestao   : 10,
    pergunta     : "Que letra é essa?",
    imagem       : 'LetraYO.png',
    alternativaA : "HI",
    alternativaB : "RA",
    alternativaC : "YO",
    alternativaD : "U",
    correta      : "YO",
}
const q11 = {
    numQuestao   : 11,
    pergunta     : "Que letra é essa?",
    imagem       : 'LetraNA.png',
    alternativaA : "TA",
    alternativaB : "WA",
    alternativaC : "RE",
    alternativaD : "NA",
    correta      : "NA",
}
const q12 = {
    numQuestao   : 12,
    pergunta     : "Que letra é essa?",
    imagem       : 'LetraTSU.png',
    alternativaA : "TSU",
    alternativaB : "BA",
    alternativaC : "SU",
    alternativaD : "U",
    correta      : "TSU",
}
const q13 = {
    numQuestao   : 13,
    pergunta     : "Que letra é essa?",
    imagem       : 'LetraRU.png',
    alternativaA : "RO",
    alternativaB : "RU",
    alternativaC : "MO",
    alternativaD : "MU",
    correta      : "RU",
}
const q14 = {
    numQuestao   : 14,
    pergunta     : "Que letra é essa?",
    imagem       : 'LetraKE.png',
    alternativaA : "YA",
    alternativaB : "WO",
    alternativaC : "KE",
    alternativaD : "TE",
    correta      : "KE",
}
const q15 = {
    numQuestao   : 15,
    pergunta     : "Que letra é essa?",
    imagem       : 'LetraSE.png',
    alternativaA : "RU",
    alternativaB : "E",
    alternativaC : "NU",
    alternativaD : "SE",
    correta      : "SE",
}
const q16 = {
    numQuestao   : 16,
    pergunta     : "Que letra é essa?",
    imagem       : 'LetraRI.png',
    alternativaA : "RI",
    alternativaB : "A",
    alternativaC : "SO",
    alternativaD : "NA",
    correta      : "RI",
}
const q17 = {
    numQuestao   : 17,
    pergunta     : "Que letra é essa?",
    imagem       : 'LetraSO.png',
    alternativaA : "HO",
    alternativaB : "SO",
    alternativaC : "RA",
    alternativaD : "TO",
    correta      : "SO",
}
const q18 = {
    numQuestao   : 18,
    pergunta     : "Que letra é essa?",
    imagem       : 'LetraHI.png',
    alternativaA : "E",
    alternativaB : "WA",
    alternativaC : "HI",
    alternativaD : "TA",
    correta      : "HI",
}
const q19 = {
    numQuestao   : 19,
    pergunta     : "Que letra é essa?",
    imagem       : 'LetraMO.png',
    alternativaA : "MO",
    alternativaB : "FU",
    alternativaC : "N",
    alternativaD : "MA",
    correta      : "MO",
}
const q20 = {
    numQuestao   : 20,
    pergunta     : "Que letra é essa?",
    imagem       : 'LetraNE.png',
    alternativaA : "U",
    alternativaB : "NE",
    alternativaC : "ME",
    alternativaD : "RA",
    correta      : "NE",
}
const q21 = {
    numQuestao   : 21,
    pergunta     : "Que letra é essa?",
    imagem       : 'LetraRA.png',
    alternativaA : "KO",
    alternativaB : "RA",
    alternativaC : "WA",
    alternativaD : "SE",
    correta      : "RA",
}
const q22 = {
    numQuestao   : 22,
    pergunta     : "Que letra é essa?",
    imagem       : 'LetraHO.png',
    alternativaA : "MA",
    alternativaB : "KE",
    alternativaC : "HO",
    alternativaD : "TA",
    correta      : "HO",
}
const q23 = {
    numQuestao   : 23,
    pergunta     : "Que letra é essa?",
    imagem       : 'LetraI.png',
    alternativaA : "KO",
    alternativaB : "RU",
    alternativaC : "TE",
    alternativaD : "I",
    correta      : "I",
}
const q24 = {
    numQuestao   : 24,
    pergunta     : "Que letra é essa?",
    imagem       : 'LetraU.png',
    alternativaA : "U",
    alternativaB : "KA",
    alternativaC : "SO",
    alternativaD : "BA",
    correta      : "U",
}
const q25 = {
    numQuestao   : 25,
    pergunta     : "Que letra é essa?",
    imagem       : 'LetraWO.png',
    alternativaA : "CHI",
    alternativaB : "KO",
    alternativaC : "WO",
    alternativaD : "SU",
    correta      : "WO",
}
const q26 = {
    numQuestao   : 26,
    pergunta     : "Que letra é essa?",
    imagem       : 'LetraYU.png',
    alternativaA : "YO",
    alternativaB : "YU",
    alternativaC : "U",
    alternativaD : "NO",
    correta      : "YU",
}
const q27 = {
    numQuestao   : 27,
    pergunta     : "Que letra é essa?",
    imagem       : 'LetraWA.png',
    alternativaA : "A",
    alternativaB : "TO",
    alternativaC : "WA",
    alternativaD : "HE",
    correta      : "WA",
}
const q28 = {
    numQuestao   : 28,
    pergunta     : "Que letra é essa?",
    imagem       : 'LetraTA.png',
    alternativaA : "TA",
    alternativaB : "BA",
    alternativaC : "NU",
    alternativaD : "MU",
    correta      : "TA",
}
const q29 = {
    numQuestao   : 29,
    pergunta     : "Que letra é essa?",
    imagem       : 'LetraRO.png',
    alternativaA : "RU",
    alternativaB : "RO",
    alternativaC : "KU",
    alternativaD : "KO",
    correta      : "RO",
}
const q30 = {
    numQuestao   : 30,
    pergunta     : "Que letra é essa?",
    imagem       : 'LetraKU.png',
    alternativaA : "KU",
    alternativaB : "N",
    alternativaC : "CHI",
    alternativaD : "HE",
    correta      : "KU",
}
const q31 = {
    numQuestao   : 31,
    pergunta     : "Que letra é essa?",
    imagem       : 'LetraMI.png',
    alternativaA : "NA",
    alternativaB : "FU",
    alternativaC : "MI",
    alternativaD : "HI",
    correta      : "MI",
}
const q32 = {
    numQuestao   : 32,
    pergunta     : "Que letra é essa?",
    imagem       : 'LetraKI.png',
    alternativaA : "KI",
    alternativaB : "SHI",
    alternativaC : "RA",
    alternativaD : "TSU",
    correta      : "KI",
}
const q33 = {
    numQuestao   : 33,
    pergunta     : "Que letra é essa?",
    imagem       : 'LetraKO.png',
    alternativaA : "MA",
    alternativaB : "MO",
    alternativaC : "KO",
    alternativaD : "NU",
    correta      : "KO",
}
const q34 = {
    numQuestao   : 34,
    pergunta     : "Que letra é essa?",
    imagem       : 'LetraMA.png',
    alternativaA : "HO",
    alternativaB : "MA",
    alternativaC : "KA",
    alternativaD : "RO",
    correta      : "MA",
}
const q35 = {
    numQuestao   : 35,
    pergunta     : "Que letra é essa?",
    imagem       : 'LetraME.png',
    alternativaA : "ME",
    alternativaB : "YU",
    alternativaC : "NI",
    alternativaD : "BU",
    correta      : "ME",
}
const q36 = {
    numQuestao   : 36,
    pergunta     : "Que letra é essa?",
    imagem       : 'LetraN.png',
    alternativaA : "N",
    alternativaB : "NA",
    alternativaC : "NI",
    alternativaD : "TO",
    correta      : "N",
}
const q37 = {
    numQuestao   : 37,
    pergunta     : "Que letra é essa?",
    imagem       : 'LetraNI.png',
    alternativaA : "KE",
    alternativaB : "TA",
    alternativaC : "KO",
    alternativaD : "NI",
    correta      : "NI",
}
const q38 = {
    numQuestao   : 38,
    pergunta     : "Que letra é essa?",
    imagem       : 'LetraRE.png',
    alternativaA : "WA",
    alternativaB : "WO",
    alternativaC : "RE",
    alternativaD : "KI",
    correta      : "RE",
}
const q39 = {
    numQuestao   : 39,
    pergunta     : "Que letra é essa?",
    imagem       : 'LetraNO.png',
    alternativaA : "NO",
    alternativaB : "O",
    alternativaC : "WO",
    alternativaD : "KO",
    correta      : "NO",
}
const q40 = {
    numQuestao   : 40,
    pergunta     : "Que letra é essa?",
    imagem       : 'LetraSA.png',
    alternativaA : "KI",
    alternativaB : "SA",
    alternativaC : "KE",
    alternativaD : "TA",
    correta      : "SA",
}
const q41 = {
    numQuestao   : 41,
    pergunta     : "Que letra é essa?",
    imagem       : 'LetraNU.png',
    alternativaA : "ME",
    alternativaB : "TE",
    alternativaC : "NU",
    alternativaD : "RA",
    correta      : "NU",
}
const q42 = {
    numQuestao   : 42,
    pergunta     : "Que letra é essa?",
    imagem       : 'LetraSU.png',
    alternativaA : "TA",
    alternativaB : "SU",
    alternativaC : "RI",
    alternativaD : "NA",
    correta      : "SU",
}
const q43 = {
    numQuestao   : 43,
    pergunta     : "Que letra é essa?",
    imagem       : 'LetraTE.png',
    alternativaA : "I",
    alternativaB : "FU",
    alternativaC : "TE",
    alternativaD : "RE",
    correta      : "TE",
}
const q44 = {
    numQuestao   : 44,
    pergunta     : "Que letra é essa?",
    imagem       : 'LetraTO.png',
    alternativaA : "YA",
    alternativaB : "TO",
    alternativaC : "YO",
    alternativaD : "HI",
    correta      : "TO",
}
const q45 = {
    numQuestao   : 45,
    pergunta     : "Que letra é essa?",
    imagem       : 'LetraYA.png',
    alternativaA : "KA",
    alternativaB : "TA",
    alternativaC : "YA",
    alternativaD : "SA",
    correta      : "YA",
}
const q46 = {
    numQuestao   : 46,
    pergunta     : "Que letra é essa?",
    imagem       : 'LetraO.png',
    alternativaA : "O",
    alternativaB : "E",
    alternativaC : "A",
    alternativaD : "I",
    correta      : "O",
}

const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20, q21, q22, q23, q24, q25, q26, q27, q28, q29, q30, q31, q32, q33, q34, q35, q36, q37, q38, q39, q40, q41, q42, q43, q44, q45, q46]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes


numQuestao.textContent = q1.numQuestao
imgQuestao.setAttribute('src', './Letras/'+q1.imagem)
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC
d.textContent = q1.alternativaD


a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')
d.setAttribute('value', '1D')


function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    imgQuestao.setAttribute('src', './Letras/'+questoes[nQuestao].imagem)
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    d.textContent = questoes[nQuestao].alternativaD
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
    d.setAttribute('value', nQuestao+'D')
    progresso.value = parseInt(progresso.value) + 1

}


alternativas.addEventListener('dblclick', () => {
  
    pontos -= 10 
    if(numQuestao.value == 10 && pontos == 110) { pontos = 100 }
})

function bloquearAlternativas() {
    alternativas.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    alternativas.classList.remove('bloqueado')
}

function piscarNoAcerto() {
    articleQuestoes.classList.remove('errou')
    articleQuestoes.classList.add('acertou')
}

function piscarNoErro() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.add('errou')
}

function tirarPiscar() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.remove('errou')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    
    let certa = questoes[numeroDaQuestao].correta


    if(respostaEscolhida == certa) {
        piscarNoAcerto()
        pontos += 10
        if(nQuestao.value == 1 && pontos == 20) { pontos = 10 }
    } else {
        piscarNoErro()
    }
    setTimeout(() => {
        tirarPiscar()
    }, 150);
    

    placar = pontos
    instrucoes.textContent = "Pontos " + placar


    bloquearAlternativas()

    setTimeout(function() {

        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 150)
    desbloquearAlternativas()
}

function fimDoJogo() {


    let s = 's'
    pontos == 0 ? s = '' : s = s
    instrucoes.textContent = "Fim de Jogo! Você conseguiu " + pontos + " ponto"+ s

    instrucoes.classList.add('placar')


    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0

        instrucoes.classList.remove('placar')

        articleQuestoes.style.display = 'block'
        proximaQuestao(1)
        instrucoes.textContent = 'Leia a questão e clique na resposta correta'
    }, 8000)

}





