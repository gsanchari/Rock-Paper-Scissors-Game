let userScore=0;
let compScore=0;

const choices= document.querySelectorAll(".choice");

const msg= document.querySelector("#msg");

const userScorePara= document.querySelector("#user-score");
const compScorePara= document.querySelector("#comp-score");

const gencompChoice= ()=>{
    //rock, paper, scissors
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}



const drawGame=()=>{
    console.log("Game was Draw.");
    msg.innerText="Game was Deaw.Play Again.";
    msg.style.backgroundColor="black";
}

const showWinner=(userWin, userChoice, compChoice) => {
    if(userWin===true){
        userScore++;
        userScorePara.innerText=userScore;

        console.log("You Win!");
        msg.innerText=`You Win! YEEP!!!! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;

        console.log("You Lost!");
        msg.innerText=`You Lost! Try Again..${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playgame=(userChoice)=>{
    console.log("User choice = ", userChoice);
    //generate computer choice
    const compChoice=gencompChoice();
    console.log("Computer choice = ", compChoice);

    if(userChoice=== compChoice)
    {
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper" ? false : true ;
        }
        else if(userChoice==="paper")
        {
            userWin=compChoice==="scissors" ? false : true ;
        }
        else{
            userWin=compChoice==="rock" ? false : true ; 
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", ()=> {  
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    });
});
