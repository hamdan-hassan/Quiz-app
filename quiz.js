const questions = [

{

question: "Is HTML a programming language?",

answers: ["Yes","No","Maybe","Partially a programming language"],

correct: "No"
},

{

question: "Inside which HTML element do we put the JavaScript?",

answers: ["<scripting>","<script>","<javascript>","<js>"],

correct: "<script>"
},

{

question: "How to print 'Hello World in JavaScript'?",

answers: ["print('Hello World')","System.out.println('Hello World')","console.log('Hello World')","<?php echo 'Hello, World'"],

correct: "console.log('Hello World')"
},

{

question: "This language was originally developed by James Gosling at Sun Microsystems in 1991 and was intended for interactive television. The original name for the product was Oak but following a brainstorming meeting was named after which type of coffee?",

answers: ["Arabica","Java","Kona","Typica"],

correct: "Java"
},

{

 question: "Not a programming language, but a popular group of interrelated client-side web development techniques to exchange data without full webpage reloads.",

 answers: ["Delphi","Ajax","J++","ActionScript"],

 correct: "Ajax"
},

{

 question: "Computer language since 1982 for creating vector graphics, best known for its use as a page description language in the electronic and desktop publishing areas.",
 
 answers: ["ActionScript","LiveScript","PostScript","JavaScript"],

 correct: "PostScript"
},

{
 
 question: "Influential programming language, published in 1970 by Niklaus Wirth as a small and efficient language intended to encourage good programming practices using structured programming and data structuring",

 answers: ["Pascal","Perl","Python","PHP"],

 correct: "Pascal"
},

{

 question: "Programming language and software environment for statistical computing and graphics. It was introduced in 1993 and has become popular among statisticians and data miners.",

 answers: ["R","MATLAB","Prolog","Objective-C"],

 correct: "R"

},

{
 
 question: "Interpreted programming language for text processing and data extraction and was very popular in the late 1970s and 1980s. It is a standard feature of most Unix-like operating systems.",

 answers: ["Python","AWK","Ruby","Miranda"],

 correct: "Ruby"
},

{

 question: "What does JSON stands for?",

 answers: ["JavaScript scripting Object Notation","JavaScript OpenSource Network","JavaScript Object Notation","None of the above"],

 correct: "JavaScript Object Notation"
}
]

class Element{

constructor({className = null,idName = null}) {

this.className = className;
this.idName = idName;

}

get getId(){

	return document.getElementById(this.idName);
}

get getClass() {

	return document.getElementsByClassName(this.className);
}


}

const btn = new Element({className: "btn"}).getClass;
const btns_wrapper = new Element({idName: "btns-wrapper"}).getId
const qtn = new Element({idName: "question"}).getId;
const start_btn = new Element({idName: "start-btn"}).getId;
const content = new Element({idName: "wrapper"}).getId;
const qtn_count = new Element({idName: "qtn-count"}).getId;
const max_qtn = new Element({idName: "max-qtn"}).getId;
const score = new Element({idName: "score"}).getId;
const max_score = new Element({idName: "max-score"}).getId;
let i=0;
let isCorrect = false;


start_btn.addEventListener("click" , ()=> {

	content.style.display = "block";
	start_btn.style.display = "none";
	score.textContent = 0;
	qtn.textContent = questions[i].question;
	qtn_count.textContent = 1;
    max_qtn.textContent = questions.length;
	max_score.textContent = questions.length;

	btn[0].textContent = questions[0].answers[0];
	btn[1].textContent = questions[0].answers[1];
	btn[2].textContent = questions[0].answers[2];
	btn[3].textContent = questions[0].answers[3];


});

class Display {

constructor({question = null,btn_index = null,answer_index = null}) {

this.question = question;
this.btn_index = btn_index;
this.answer_index = answer_index;
}

setButton() {
return this.btn_index.textContent = questions[i].answers[this.answer_index];

}

setQuestion() {

	return this.question.textContent = questions[i].question;
}

}












btns_wrapper.addEventListener("click" , (e)=> {



	if (e.target.tagName === "BUTTON") {    //If a button is clicked

		if (e.target.innerText === questions[i].correct.toString()) {;		
		isCorrect = true;
		checkAnswer(e.target);  //If answer is correct it changes the background color to green    
		score.textContent++;     //If answer is correct increase score
        
        

		}

		else {
		   isCorrect = false;	
		   checkAnswer(e.target);   //If answer is wrong it changes the background color to red
			
		}
         
        
        
        btns_wrapper.style.pointerEvents = "none";    //Disables click events

        setTimeout(function () {
        	btns_wrapper.style.pointerEvents = "auto";  //Enable click events after going to the next question
        },1500)

		setTimeout(function() {
            i++
			if (i >= questions.length) {
				alert(`You got ${score.textContent} answers right out of ${questions.length} questions`);   //If it's the last question
				reset();
			}
			
			
            const question = new Display({question: qtn}).setQuestion();
			const btn0 = new Display({btn_index: btn[0],answer_index: 0}).setButton();
            const btn1 = new Display({btn_index: btn[1],answer_index: 1}).setButton();
            const btn2 = new Display({btn_index: btn[2],answer_index: 2}).setButton();
            const btn3 = new Display({btn_index: btn[3],answer_index: 3}).setButton();
            qtn_count.textContent++;

			},1500)


		}

	
});








//function to check if answer is right
function checkAnswer(obj){
   let original = obj.style.backgroundColor;

   if (isCorrect) {
      obj.style.backgroundColor = 'lightgreen';

   }

   else {
      obj.style.backgroundColor = '#e4333b';

   }
  
   setTimeout(function(){
        obj.style.backgroundColor = original;
   }, 1500);
}



//function to restart the quiz after the last question
function reset() {
i = 0;
score.textContent = 0;
score.textContent = 0;	
content.style.display = "none";
start_btn.style.display = "block";
}
