player1_name=localStorage.getItem("player1name")
player2_name=localStorage.getItem("player2name")

player1score=0;
player2score=0;

document.getElementById("player1name_score").innerHTML=player1_name+": "+player1score;
document.getElementById("player2name_score").innerHTML=player2_name+": "+player2score;


document.getElementById("player_answer").innerHTML="Answer Turn -";
document.getElementById("player_question").innerHTML="Question Turn - ";
document.getElementById("player1name").innerHTML=player1_name;
document.getElementById("player2name").innerHTML=player2_name;

function send(){
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    console.log(number1);
    console.log(number2);
    console.log(actual_answer);

    question_number = "<h4 id='multiply'>" + number1 + " X " + number2 + "</h4>";
    input_box = "<br> <label id='aLabel'>Answer</label> : <input class='input' type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-danger' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button ;

    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}