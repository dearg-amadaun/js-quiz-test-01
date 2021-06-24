function check(){
//Question variable values
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var correct = 0;


    // question1 || = "yes" allows for spelling variables of yes i.e "YES, Yes, yEs, YES, etc..."
    if (question1 == "yes") {
        correct++; 
    //correct ++ = "correct and adds 1 to the "correct" counter
    }

    if (question2 == "Yes") {
        correct++;
    }

    if (question3 === "No") {
        correct++;
    }

    var messages = ["Great job!", "Almost there!", "Please try again!"];
    var pictures = ["assets/images/correct.gif", "assets/images/some.gif", "assets/images/none.gif"];

    var range;

        if (correct < 1) {
            range = 2;
        }

        if (correct > 0 && correct < 3) {
            range = 1;
        }

        if (correct > 2) {
            range = 0;
        }

    document.getElementById("after_submit").style.visibility = "visible";

    document.getElementById("message").innerHTML = messages[range];
    document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
    document.getElementById("picture").src = pictures[range];

}