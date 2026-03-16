const quiz=[

{
q:"Символ деген не?",
a:["Астарлы мағына","Кейіпкер","Сюжет"],
c:0
},

{
q:"Теңіз символы көбіне нені білдіреді?",
a:["Өмір","Қала","Үй"],
c:0
},

{
q:"Әдеби символдың қызметі?",
a:["Мағынаны тереңдету","Әшекей","Сюжет өзгерту"],
c:0
}

]

let current=0
let score=0

function load(){

let q=quiz[current]

question.innerText=q.q

answers.innerHTML=""

q.a.forEach((ans,i)=>{

let b=document.createElement("button")

b.innerText=ans

b.onclick=()=>check(i)

answers.appendChild(b)

})

}

function check(i){

if(i===quiz[current].c){

result.innerText="Дұрыс"
score++

}else{

result.innerText="Қате"

}

}

next.onclick=()=>{

current++

if(current<quiz.length){

load()

}else{

question.innerText="Нәтиже: "+score+" / "+quiz.length
answers.innerHTML=""
next.style.display="none"

}

}

load()
