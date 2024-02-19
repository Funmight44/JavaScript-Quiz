let form = document.querySelector(".quiz-form");
let correctAnswers = ["B", "B", "D", "A", "C", "B", "B", "C", "C", "C", "B", "A", "B", "A", "B"];     //store the correct answer in a varaible
let score = 0;
let result = document.querySelector(".Result");
let questions = document.querySelectorAll(".question");
// let resultDisplay = document.querySelector("p.result"); ///this can't work

form.addEventListener("submit", function(event){
    event.preventDefault();
    let userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value, form.q6.value, form.q7.value, 
        form.q8.value, form.q9.value, form.q10.value, form.q11.value, form.q12.value, form.q13.value, form.q14.value, form.q15.value];
     userAnswers.forEach(function(Answer, index){
        if(Answer == correctAnswers[index]){
            score++;
            questions[index].classList.add("correct");
        } else{
            questions[index].classList.add("wrong");
        }
    });
    
    scrollTo(0,0); //// to scroll to the top page automatically
    result.classList.remove("hide");
    result.querySelector("p").textContent = `your score is ${score}/15`; // selecting the first (p) of result div
    



    console.log(score);

})

