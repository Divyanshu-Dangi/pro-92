player1_name=localStorage.getItem("player1_name");
player1_score=0;
document.getElementById("player1_name").innerHTML=player1_name+" : ";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player_question").innerHTML="Question turn -"+player1_name;

player2_name=localStorage.getItem("player2_name");
player2_score=0;
document.getElementById("player2_name").innerHTML=player2_name+" : ";
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_answer").innerHTML="Answer turn -"+player2_name;
function send(){
    get_number=document.getElementById("number").value;
    word=get_number.toLowerCase();

    charat1=word.charAt(1);

    length_divide_2=Math.floor(Number.length/2);
   charat2 =Number.charAt(length_divide_2);

   length_minus_1=word.length-1;
   charat3=word.charAt(length_minus_1);

   remove_charat1=word.replace(charat1,"_");
   remove_charat2=remove_charat1.replace(charat2,"_");
   remove_charat3=remove_charat2.replace(charat3,"_");

   question_word="<h4 id='number_display'>Q."+remove_charat3+"</h4>";
   input_box="<br>answer;<input type='number' id='input_check_box'>";
   check_button="<Br><br><button onclick='check()'>check</button>";
   row= question_number+input_box+check_button;
   document.getElementById("output").innerHTML=row;
   document.getElementById("number").value="";
}
question_turn="player1";
answer_turn="player2";

function check(){
    get_answer=document.getElementById("input_check_box").value;
    answer=get_answer.toLowerCase();

    if (answer==word) {
       if(answer_turn=="player1") 
       {
           player1_score=player1_score+1;
           document.getElementById("player1_score").innerHTML=player1_score;
       }
       else
       {
        player2_score=player2_score+1;
        document.getElementById("player2_score").innerHTML=player2_score;   
       }
    }
    if(question_turn=="player1"){
        question_turn="player2";
        document.getElementById("player_question").innerHTML="question turn -"+player2_name;
    }
    else 
    {
        question_turn="player1";
        document.getElementById("player_question").innerHTML="question turn -"+player1_name;    
    }
    if (answer_turn=="player1") {
        answer_turn="player2";
        document.getElementById("player_answer").innerHTML="answer turn -"+player2_name;
    }
    else
    {
        answer_turn="player1";
        document.getElementById("player_answer").innerHTML="answer turn -"+player1_name;   
    }
}