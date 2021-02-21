
const url =window.location.href
let dat
let fd
let go
let yu
var arr1=[]
var arr2=[]
var cobmined


$.ajax({
  type: 'GET',
  url:`${url}data`,
  async:false,
  success:function(response){
   dat=response.data
   dat.forEach(el=>{
     for (const[question,answers] of Object.entries(el)){
       arr1.push(question)
       arr2.push(answers)
     }
      combined=arr1.map(function(v,k,a){
       return {
         meta:v,
         z:arr2[k]
       };
     })

   }

 )
  },
  error:function(error){
    console.log('error')
  }
})

var currentQuestion = 0;
var score = 0;
var totQuestions = combined.length;

var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');
var insta = document.getElementById('text');
var modal= document.getElementById('modal-body');
let dt = new Date(new Date().setTime(0));
let ctime = dt.getTime();
let seconds = Math.floor((ctime % (1000 * 60))/ 1000);
let minutes = Math.floor((ctime % (1000 * 60 * 60))/( 1000 * 60));
var t=0;

let time = 0;
var i;
var o=combined[t]['z'];
var y=function(){
  var q;
  for (var i=0; i<o.length; i++) {
   if(o[i]==true){
     q=o[i+1];
   }
}
  return q;
};
var we=o.toString();



let mytime = setInterval(function(){
        time++;

        if(seconds < 59) {
            seconds++;
        } else {
            seconds = 0;
            minutes++;
        }
        let formatted_sec = seconds < 10 ? `0${seconds}`: `${seconds}`;
        let formatted_min = minutes < 10 ? `0${minutes}`: `${minutes}`
        document.querySelector("span.time").innerHTML = `${formatted_min} : ${formatted_sec}`;
    }, 1000);

window.onload=function(){
  loadQuestion(0)
}

function abc(){
  insta.textContent='correct';
}
$(function(){
  $('.next-btn').click(function(e){
    e.preventDefault();
    var mymodal = $('#exampleModal');
    mymodal.find('.modal-body').text(function(){
      var q;
      for (var i=0; i<combined[t]['z'].length; i++) {
       if(combined[t]['z'][i]==true){
         q=combined[t]['z'][i+1];
       }
    }
      return q;
    });
    mymodal.modal('show');

  });
})
function loadQuestion (t) {


	questionEl.textContent =combined[t]['meta'] ;
  opt1.textContent = combined[t]['z'][1];

	opt2.textContent = combined[t]['z'][3];
	opt3.textContent = combined[t]['z'][5];
	opt4.textContent = combined[t]['z'][7];


};



function loadNextQuestion () {
  var selectedOption = document.querySelector('input[type=radio]:checked');


  var value=selectedOption.value;
	if(!selectedOption){
		alert('Please select your answer!');
		return;
	}


  var answer = selectedOption.value;
	if(combined[t]['z'][value] == true){
		score += 10;

	}



  t++;
  console.log(t)
  console.log(totQuestions)
  if(t == totQuestions){
		container.style.display = 'none';
		resultCont.style.display = '';
		resultCont.textContent = 'Your Score:  ' + score+' time:'+minutes+':'+seconds;
		return;
	}
  loadQuestion(t)

}
