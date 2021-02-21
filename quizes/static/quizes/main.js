
console.log('hello');

const modalBtns=[...document.getElementsByClassName('modal-button')]
const modalBody=document.getElementById("modal-body-confirm")
const startBtn=document.getElementById("start-button")
const url=window.location.href
modalBtns.forEach(modalBtn=>modalBtn.addEventListener('click',()=>{
 const pk= modalBtn.getAttribute('data-pk')
 console.log(pk)
 const name= modalBtn.getAttribute('data-quiz')
 console.log(name)
 const numQuestions= modalBtn.getAttribute('data-questions')
 const pass= modalBtn.getAttribute('data-pass')

modalBody.innerHTML=`
      <div class="h5 mb-3">Quizname:<b>${name}</b></div>
      <div class="text-muted">

             <h>number of questions:<b>${numQuestions}</b><h>
             <br>
             <h>Score to pass:<b>${pass}</b><h>

      </div>
      `
      startBtn.addEventListener('click',()=>{
        window.location.href=url+pk
      })
}))
