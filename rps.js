confirm("Let's play a game?");

  loss=0;
  win=0;
  tie=0;
    
var userChoice; 
userChoice = prompt("Do you accept? (enter yes or no)");
if(userChoice === "yes")
{
alert("Challenge accepted");
} 
else if (userChoice === "no") {
	alert("Challenge unwillingly accepted.. ha ha!."); 
}


confirm("Okay how about a little game of rock, paper, scissors?"); 
userChoice = prompt("Want to give it a shot?(enter yes or no)");


if(userChoice === "yes")
	{
	alert("Alright bring it!");
	}
else {
	alert("I see you're scared of me. It's okay I'll go easy on you.");
}

//10 rounds start

//10 rounds stop0





//display wins, losses, ties totals
//compare(userChoice,computerChoice);


//var compare = function(userChoice , computerChoice) {
i =0;
while (i <= 5) {
   if (i !== 5) {
    userChoice = prompt("Choose your weapon(rock,paper,scissors)" + "Win: " +win + 
            "Lose: " +loss +"Tie: "+tie + "Round: "+i );

var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
}

else if (computerChoice <= 0.67) {
	computerChoice ="paper";
}
 else {
	computerChoice = "scissors";
	
}

alert("Computer: " + computerChoice);  
    if (userChoice === computerChoice)  {
    	
    	
    	alert("The result is a tie!");
    	alert("What are the odds?");
        i++;
        alert("Current Round: " + i);
  	   tie=tie+1;
           
        
    }
    
    //user chose rock
   else if (userChoice === "rock") {
	   
	   
        if(computerChoice === "scissors") {
        	alert("rock wins, you beat the computer");
        	win=win+1;
                i++;
                alert("Current Round: " + i);
        }//ends scissors check
        else {
        	alert ("computer chose paper.  Paper wins.  You lose");
        	lose=lose+1;
                i++;
                alert("Current Round: " + i);
        
        }
    }
    //user chose paper
  else if (userChoice === "paper") {
    	 if(computerChoice === "scissors") {
    	    	alert("scissors wins, you lose");
    	    	loss=loss+1;
                i++;
                alert("Current Round: " + i);
    	 }//ends scissors check
    	 else {
    	     	alert("paper wins. You win.");
    	        win=win+1;
                i++;
                alert("Current Round: " + i);
    	        }
   }
   
    
    	else if (computerChoice === "paper"){
    		alert("scissors wins, you win.");
    		win=win+1;
                i++;
                alert("Current Round: " + i);
    	}
    	else {
    		alert("rock wins, you lose");
    		loss=loss+1; 
                i++;
                alert("Current Round: " + i);
    	} 
   }
   
}

//}; //ends the function
    	
        	
        	
    






 





