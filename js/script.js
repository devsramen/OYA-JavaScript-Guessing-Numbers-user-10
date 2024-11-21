"use strict"
const main = document.querySelector("#main");
const title = document.querySelector(".title");
const playerInput1 = document.querySelector("#playerInput1");
const playerInputBtn1 = document.querySelector("#playerInputBtn1");
const errorMessage = document.querySelector("#errorMessage");

const playerInput2 = document.querySelector("#playerInput2");
const playerInputBtn2 = document.querySelector("#playerInputBtn2");

const playerInput3 = document.querySelector("#playerInput3");
const playerInputBtn3 = document.querySelector("#playerInputBtn3");

const playerInput4 = document.querySelector("#playerInput4");
const playerInputBtn4 = document.querySelector("#playerInputBtn4");

const playerInput5 = document.querySelector("#playerInput5");
const playerInputBtn5 = document.querySelector("#playerInputBtn5");

const playerInput6 = document.querySelector("#playerInput6");
const playerInputBtn6 = document.querySelector("#playerInputBtn6");

const playerInput7 = document.querySelector("#playerInput7");
const playerInputBtn7 = document.querySelector("#playerInputBtn7");

const playerInput8 = document.querySelector("#playerInput8");
const playerInputBtn8 = document.querySelector("#playerInputBtn8");

const playerInput9 = document.querySelector("#playerInput9");
const playerInputBtn9 = document.querySelector("#playerInputBtn9");

const playerInput10 = document.querySelector("#playerInput10");
const playerInputBtn10 = document.querySelector("#playerInputBtn10");


const inputValueViewPlayer1 = document.querySelector("#inputValueViewPlayer1");
const inputValueViewPlayerOthers = document.querySelector("#inputValueViewPlayerOthers");
const winner1 = document.querySelector("#winner1");
const winner = document.querySelector("#winner");
let chance = document.querySelector("#chance");
let chanceCount = document.querySelector("#chanceCount");
const congratulation = document.querySelector("#congratulation");
const playerName = document.querySelector(".playerName");
const playerCounter = document.querySelector(".playerCounter");
const timer = document.querySelector("#timer");
const details = document.querySelector("#details");
const playAgain = document.querySelector("#playAgain");
const titleWrapper = document.querySelector(".titleWrapper");
const titleForFinal = document.querySelector(".titleForFinal");

let inputArrayPlayer1 = document.querySelector("#inputArrayPlayer1")
let inputArrayPlayer2 = document.querySelector("#inputArrayPlayer2")
let inputArrayPlayer3 = document.querySelector("#inputArrayPlayer3")
let inputArrayPlayer4 = document.querySelector("#inputArrayPlayer4")

let inputArrayPlayerValue1 = document.querySelector("#inputArrayPlayerValue1")
let inputArrayPlayerValue2 = document.querySelector("#inputArrayPlayerValue2")
let inputArrayPlayerValue3 = document.querySelector("#inputArrayPlayerValue3")
let inputArrayPlayerValue4 = document.querySelector("#inputArrayPlayerValue4")

let inputValuePlayer1;
let inputValuePlayer2 = []
let inputValuePlayer3 = []
let inputValuePlayer4 = []
let inputValuePlayer5 = []
let inputValuePlayer6 = []
let inputValuePlayer7 = []
let inputValuePlayer8 = []
let inputValuePlayer9 = []
let inputValuePlayer10 = []



let finalResultPlayer1 = []
let finalResult = []
let summaryResultWinnerP1 = 0;
let summaryResultLoserP1 = 0;
let summaryResultWinner = 0;
let summaryResultLoser = 0;
let allInputValueOfPlayer = [inputValuePlayer2,inputValuePlayer3,inputValuePlayer4,inputValuePlayer5,inputValuePlayer6,inputValuePlayer7,inputValuePlayer8,inputValuePlayer9,inputValuePlayer10]

let chanceReset = 5;
let count = chanceReset;


// timer start
let hour = 0;
let minute = 0;
let second = 0;
function timeCount(){
    second++
    if( second == 60 ){
        minute += 1;
        second = 0
    }
    if( minute == 60 ){
        hour += 1;
        minute = 0
    }
    if( hour == 24 ){
        hour = 0
    }
    timer.innerHTML = `Loaded before : ${hour} : ${minute} : ${second}`;
}

setInterval(()=>{
    timeCount()
},1000)
// timer end


// TypeJS Start
let titleContent = title.innerHTML;
title.innerHTML = "";

let charCount = -1;

function typeJS(){
    charCount++
    title.innerHTML += titleContent.charAt(charCount);
    if(charCount == titleContent.length){
        title.innerHTML = ""
        charCount = -1;
    }
    // console.log(charCount);
}

setInterval(()=>{
    typeJS()
},300)

// TypeJS End


playerInputBtn1.addEventListener("click",()=>{
    if(Boolean(Number(playerInput1.value)) && Number(playerInput1.value) >=1 && Number(playerInput1.value) <= 10 ){
        inputValuePlayer1 = Number(playerInput1.value)
        playerInput1.style.display = "none";
        playerInputBtn1.style.display = "none";
        errorMessage.style.display = "none";
        playerInput2.style.display = "inline-block";
        playerInputBtn2.style.display = "inline-block";
        chance.style.display = "inline-block";
        chanceCount.innerHTML = count;
        playerCounter.innerHTML = 2;
    }else{
        errorMessage.innerHTML = "Please Enter a Number between 1-10, characters & zero are not allowed."
    }    
    console.log(inputValuePlayer1);    
})

playerInputBtn2.addEventListener("click",(event)=>{
    if(Boolean(Number(playerInput2.value))){
        if((Number(playerInput2.value)) > 0 && (Number(playerInput2.value)) <= 10){
            inputValuePlayer2.push(Number(playerInput2.value))
            errorMessage.style.display = "none"
            errorMessage.innerHTML = "";
            playerInput2.value = "";
            console.log(inputValuePlayer2)
            chanceCount.innerHTML = count - inputValuePlayer2.length
            if( inputValuePlayer2.indexOf(inputValuePlayer1) != -1 ){
                displayControl("player2")
                count = chanceReset;
                chanceCount.innerHTML = count;
                playerCounter.innerHTML = 3;
                finalResult.push(`Player-2 is <strong class="winnerStrong">Winner</strong>`);
                summaryResultWinner++;
                finalResultPlayer1.push(`Player-1: <strong class="loserStrong">Loser</strong> against Player-2`)
                summaryResultLoserP1++;
                console.log(finalResult);  
                console.log(finalResultPlayer1)              
            }else if(inputValuePlayer2.length == count){
                displayControl("player2")
                count = chanceReset;
                chanceCount.innerHTML = count;
                playerCounter.innerHTML = 3;
                finalResult.push(`Player-2 is <strong class="loserStrong">Loser</strong>`);
                summaryResultLoser++;
                finalResultPlayer1.push(`Player1: <strong class="winnerStrong">Winner</strong> against Player-2`)
                summaryResultWinnerP1++
                console.log(finalResult);
                console.log(finalResultPlayer1)
            }
        }else{
            errorMessage.style.display = "block"
            errorMessage.innerHTML = "Please Enter a Number between 1-10"
        }        
    }else{
        errorMessage.style.display = "block"
        errorMessage.innerHTML = "Please Enter a Number, characters & zero are not allowed."
    } 
})
playerInputBtn3.addEventListener("click",(event)=>{
    if(Boolean(Number(playerInput3.value))){
        if((Number(playerInput3.value)) > 0 && (Number(playerInput3.value)) <= 10){
            inputValuePlayer3.push(Number(playerInput3.value))
            errorMessage.style.display = "none"
            errorMessage.innerHTML = "";
            playerInput3.value = "";
            console.log(inputValuePlayer3)
            chanceCount.innerHTML = count - inputValuePlayer3.length
            if( inputValuePlayer3.indexOf(inputValuePlayer1) != -1 ){
                displayControl("player3")
                count = chanceReset;
                chanceCount.innerHTML = count;
                playerCounter.innerHTML = 4;
                finalResult.push(`Player-3 is <strong class="winnerStrong">Winner</strong>`);
                summaryResultWinner++;
                finalResultPlayer1.push(`Player-1: <strong class="loserStrong">Loser</strong> against Player-3`)
                summaryResultLoserP1++;
                console.log(finalResult);  
                console.log(finalResultPlayer1)              
            }else if(inputValuePlayer3.length == count){
                displayControl("player3")
                count = chanceReset;
                chanceCount.innerHTML = count;
                playerCounter.innerHTML = 4;
                finalResult.push(`Player-3 is <strong class="loserStrong">Loser</strong>`);
                summaryResultLoser++;
                finalResultPlayer1.push(`Player1: <strong class="winnerStrong">Winner</strong> against Player-3`)
                summaryResultWinnerP1++
                console.log(finalResult);
                console.log(finalResultPlayer1)
            }
        }else{
            errorMessage.style.display = "block"
            errorMessage.innerHTML = "Please Enter a Number between 1-10"
        }        
    }else{
        errorMessage.style.display = "block"
        errorMessage.innerHTML = "Please Enter a Number, characters & zero are not allowed."
    } 
})
playerInputBtn4.addEventListener("click",(event)=>{
    if(Boolean(Number(playerInput4.value))){
        if((Number(playerInput4.value)) > 0 && (Number(playerInput4.value)) <= 10){
            inputValuePlayer4.push(Number(playerInput4.value))
            errorMessage.style.display = "none"
            errorMessage.innerHTML = "";
            playerInput4.value = "";
            console.log(inputValuePlayer4)
            chanceCount.innerHTML = count - inputValuePlayer4.length
            if( inputValuePlayer4.indexOf(inputValuePlayer1) != -1 ){
                displayControl("player4")
                count = chanceReset;
                chanceCount.innerHTML = count;
                playerCounter.innerHTML = 5;
                finalResult.push(`Player-4 is <strong class="winnerStrong">Winner</strong>`);
                summaryResultWinner++;
                finalResultPlayer1.push(`Player1: <strong class="loserStrong">Loser</strong> against Player-4`)
                summaryResultLoserP1++;
                console.log(finalResult);  
                console.log(finalResultPlayer1)              
            }else if(inputValuePlayer4.length == count){
                displayControl("player4")
                count = chanceReset;
                chanceCount.innerHTML = count;
                playerCounter.innerHTML = 5;
                finalResult.push(`Player-4 is <strong class="loserStrong">Loser</strong>`);
                summaryResultLoser++;
                finalResultPlayer1.push(`Player1: <strong class="winnerStrong">Winner</strong> against Player-4`)
                summaryResultWinnerP1++
                console.log(finalResult);
                console.log(finalResultPlayer1)
            }
        }else{
            errorMessage.style.display = "block"
            errorMessage.innerHTML = "Please Enter a Number between 1-10"
        }        
    }else{
        errorMessage.style.display = "block"
        errorMessage.innerHTML = "Please Enter a Number, characters & zero are not allowed."
    } 
})
playerInputBtn5.addEventListener("click",(event)=>{
    if(Boolean(Number(playerInput5.value))){
        if((Number(playerInput5.value)) > 0 && (Number(playerInput5.value)) <= 10){
            inputValuePlayer5.push(Number(playerInput5.value))
            errorMessage.style.display = "none"
            errorMessage.innerHTML = "";
            playerInput5.value = "";
            console.log(inputValuePlayer5)
            chanceCount.innerHTML = count - inputValuePlayer5.length
            if( inputValuePlayer5.indexOf(inputValuePlayer1) != -1 ){
                displayControl("player5")
                count = chanceReset;
                chanceCount.innerHTML = count;
                playerCounter.innerHTML = 6;
                finalResult.push(`Player-5 is <strong class="winnerStrong">Winner</strong>`);
                summaryResultWinner++;
                finalResultPlayer1.push(`Player-1: <strong class="loserStrong">Loser</strong> against Player-5`)
                summaryResultLoserP1++;
                console.log(finalResult);  
                console.log(finalResultPlayer1)              
            }else if(inputValuePlayer5.length == count){
                displayControl("player5")
                count = chanceReset;
                chanceCount.innerHTML = count;
                playerCounter.innerHTML = 6;
                finalResult.push(`Player-5 is <strong class="loserStrong">Loser</strong>`);
                summaryResultLoser++;
                finalResultPlayer1.push(`Player1: <strong class="winnerStrong">Winner</strong> against Player-5`)
                summaryResultWinnerP1++
                console.log(finalResult);
                console.log(finalResultPlayer1)
            }
        }else{
            errorMessage.style.display = "block"
            errorMessage.innerHTML = "Please Enter a Number between 1-10"
        }        
    }else{
        errorMessage.style.display = "block"
        errorMessage.innerHTML = "Please Enter a Number, characters & zero are not allowed."
    } 
})
playerInputBtn6.addEventListener("click",(event)=>{
    if(Boolean(Number(playerInput6.value))){
        if((Number(playerInput6.value)) > 0 && (Number(playerInput6.value)) <= 10){
            inputValuePlayer6.push(Number(playerInput6.value))
            errorMessage.style.display = "none"
            errorMessage.innerHTML = "";
            playerInput6.value = "";
            console.log(inputValuePlayer6)
            chanceCount.innerHTML = count - inputValuePlayer6.length
            if( inputValuePlayer6.indexOf(inputValuePlayer1) != -1 ){
                displayControl("player6")
                count = chanceReset;
                chanceCount.innerHTML = count;
                playerCounter.innerHTML = 7;
                finalResult.push(`Player-6 is <strong class="winnerStrong">Winner</strong>`);
                summaryResultWinner++;
                finalResultPlayer1.push(`Player-1: <strong class="loserStrong">Loser</strong> against Player-6`)
                summaryResultLoserP1++;
                console.log(finalResult);  
                console.log(finalResultPlayer1)              
            }else if(inputValuePlayer6.length == count){
                displayControl("player6")
                count = chanceReset;
                chanceCount.innerHTML = count;
                playerCounter.innerHTML = 7;
                finalResult.push(`Player-6 is <strong class="loserStrong">Loser</strong>`);
                summaryResultLoser++;
                finalResultPlayer1.push(`Player1: <strong class="winnerStrong">Winner</strong> against Player-6`)
                summaryResultWinnerP1++
                console.log(finalResult);
                console.log(finalResultPlayer1)
            }
        }else{
            errorMessage.style.display = "block"
            errorMessage.innerHTML = "Please Enter a Number between 1-10"
        }        
    }else{
        errorMessage.style.display = "block"
        errorMessage.innerHTML = "Please Enter a Number, characters & zero are not allowed."
    } 
})
playerInputBtn7.addEventListener("click",(event)=>{
    if(Boolean(Number(playerInput7.value))){
        if((Number(playerInput7.value)) > 0 && (Number(playerInput7.value)) <= 10){
            inputValuePlayer7.push(Number(playerInput7.value))
            errorMessage.style.display = "none"
            errorMessage.innerHTML = "";
            playerInput7.value = "";
            console.log(inputValuePlayer7)
            chanceCount.innerHTML = count - inputValuePlayer7.length
            if( inputValuePlayer7.indexOf(inputValuePlayer1) != -1 ){
                displayControl("player7")
                count = chanceReset;
                chanceCount.innerHTML = count;
                playerCounter.innerHTML = 8;
                finalResult.push(`Player-7 is <strong class="winnerStrong">Winner</strong>`);
                summaryResultWinner++;
                finalResultPlayer1.push(`Player-1: <strong class="loserStrong">Loser</strong> against Player-7`)
                summaryResultLoserP1++;
                console.log(finalResult);  
                console.log(finalResultPlayer1)              
            }else if(inputValuePlayer7.length == count){
                displayControl("player7")
                count = chanceReset;
                chanceCount.innerHTML = count;
                playerCounter.innerHTML = 8;
                finalResult.push(`Player-7 is <strong class="loserStrong">Loser</strong>`);
                summaryResultLoser++;
                finalResultPlayer1.push(`Player1: <strong class="winnerStrong">Winner</strong> against Player-7`)
                summaryResultWinnerP1++
                console.log(finalResult);
                console.log(finalResultPlayer1)
            }
        }else{
            errorMessage.style.display = "block"
            errorMessage.innerHTML = "Please Enter a Number between 1-10"
        }        
    }else{
        errorMessage.style.display = "block"
        errorMessage.innerHTML = "Please Enter a Number, characters & zero are not allowed."
    } 
})
playerInputBtn8.addEventListener("click",(event)=>{
    if(Boolean(Number(playerInput8.value))){
        if((Number(playerInput8.value)) > 0 && (Number(playerInput8.value)) <= 10){
            inputValuePlayer8.push(Number(playerInput8.value))
            errorMessage.style.display = "none"
            errorMessage.innerHTML = "";
            playerInput8.value = "";
            console.log(inputValuePlayer8)
            chanceCount.innerHTML = count - inputValuePlayer8.length
            if( inputValuePlayer8.indexOf(inputValuePlayer1) != -1 ){
                displayControl("player8")
                count = chanceReset;
                chanceCount.innerHTML = count;
                playerCounter.innerHTML = 9;
                finalResult.push(`Player-8 is <strong class="winnerStrong">Winner</strong>`);
                summaryResultWinner++;
                finalResultPlayer1.push(`Player-1: <strong class="loserStrong">Loser</strong> against Player-8`)
                summaryResultLoserP1++;
                console.log(finalResult);  
                console.log(finalResultPlayer1)              
            }else if(inputValuePlayer8.length == count){
                displayControl("player8")
                count = chanceReset;
                chanceCount.innerHTML = count;
                playerCounter.innerHTML = 9;
                finalResult.push(`Player-8 is <strong class="loserStrong">Loser</strong>`);
                summaryResultLoser++;
                finalResultPlayer1.push(`Player1: <strong class="winnerStrong">Winner</strong> against Player-8`)
                summaryResultWinnerP1++
                console.log(finalResult);
                console.log(finalResultPlayer1)
            }
        }else{
            errorMessage.style.display = "block"
            errorMessage.innerHTML = "Please Enter a Number between 1-10"
        }        
    }else{
        errorMessage.style.display = "block"
        errorMessage.innerHTML = "Please Enter a Number, characters & zero are not allowed."
    } 
})
playerInputBtn9.addEventListener("click",(event)=>{
    if(Boolean(Number(playerInput9.value))){
        if((Number(playerInput9.value)) > 0 && (Number(playerInput9.value)) <= 10){
            inputValuePlayer9.push(Number(playerInput9.value))
            errorMessage.style.display = "none"
            errorMessage.innerHTML = "";
            playerInput9.value = "";
            console.log(inputValuePlayer9)
            chanceCount.innerHTML = count - inputValuePlayer9.length
            if( inputValuePlayer9.indexOf(inputValuePlayer1) != -1 ){
                displayControl("player9")
                count = chanceReset;
                chanceCount.innerHTML = count;
                playerCounter.innerHTML = 10;
                finalResult.push(`Player-9 is <strong class="winnerStrong">Winner</strong>`);
                summaryResultWinner++;
                finalResultPlayer1.push(`Player-1: <strong class="loserStrong">Loser</strong> against Player-9`)
                summaryResultLoserP1++;
                console.log(finalResult);  
                console.log(finalResultPlayer1)              
            }else if(inputValuePlayer9.length == count){
                displayControl("player9")
                count = chanceReset;
                chanceCount.innerHTML = count;
                playerCounter.innerHTML = 10;
                finalResult.push(`Player-9 is <strong class="loserStrong">Loser</strong>`);
                summaryResultLoser++;
                finalResultPlayer1.push(`Player1: <strong class="winnerStrong">Winner</strong> against Player-9`)
                summaryResultWinnerP1++
                console.log(finalResult);
                console.log(finalResultPlayer1)
            }
        }else{
            errorMessage.style.display = "block"
            errorMessage.innerHTML = "Please Enter a Number between 1-10"
        }        
    }else{
        errorMessage.style.display = "block"
        errorMessage.innerHTML = "Please Enter a Number, characters & zero are not allowed."
    } 
})
playerInputBtn10.addEventListener("click",(event)=>{
    if(Boolean(Number(playerInput10.value))){
        if((Number(playerInput10.value)) > 0 && (Number(playerInput10.value)) <= 10){
            inputValuePlayer10.push(Number(playerInput10.value))
            errorMessage.style.display = "none"
            errorMessage.innerHTML = "";
            playerInput10.value = "";
            console.log(inputValuePlayer10)
            chanceCount.innerHTML = count - inputValuePlayer10.length
            if( inputValuePlayer10.indexOf(inputValuePlayer1) != -1 ){
                displayControl("player10")
                count = chanceReset;
                chanceCount.innerHTML = count;
                playerName.innerHTML = ""
                finalResult.push(`Player-10 is <strong class="winnerStrong">Winner</strong>`);
                summaryResultWinner++;
                finalResultPlayer1.push(`Player-1: <strong class="loserStrong">Loser</strong> against Player-10`)
                summaryResultLoserP1++;
                console.log(finalResult);  
                console.log(finalResultPlayer1)
                finalResultSummary()
            }else if(inputValuePlayer10.length == count){
                displayControl("player10")
                count = chanceReset;
                chanceCount.innerHTML = count;
                playerName.innerHTML = ""
                finalResult.push(`Player-10 is <strong class="loserStrong">Loser</strong>`);
                summaryResultLoser++;
                finalResultPlayer1.push(`Player1: <strong class="winnerStrong">Winner</strong> against Player-10`)
                summaryResultWinnerP1++
                console.log(finalResult);
                console.log(finalResultPlayer1)
                finalResultSummary()
            }
        }else{
            errorMessage.style.display = "block"
            errorMessage.innerHTML = "Please Enter a Number between 1-10"
        }        
    }else{
        errorMessage.style.display = "block"
        errorMessage.innerHTML = "Please Enter a Number, characters & zero are not allowed."
    } 
})
details.addEventListener("click",()=>{
    finalResultInDetails()
});
// Result Showing function
let finalResultSummary = ()=>{
    displayControl("finalResultSummaryControl");
    // winner1.innerHTML = inputValuePlayer1;
    
    winner1.innerHTML += `<strong class="resultPlayerHeading">Player-1</strong><br><strong class="winnerStrong">Winner</strong> against <strong class="winnerStrong">${summaryResultWinnerP1}</strong> player <br> <strong class="loserStrong">Loser</strong> against <strong class="loserStrong">${summaryResultLoserP1}</strong> player.<br><br>`;
    winner.innerHTML = `<strong class="resultPlayerHeading">Other player</strong><br><strong class="winnerStrong">Winner</strong> : <strong class="winnerStrong">${summaryResultWinner}</strong> player <br> <strong class="loserStrong">Loser</strong>:  <strong class="loserStrong">${summaryResultLoser}</strong> player`;        
}
let finalResultInDetails = ()=>{
    displayControl("finalResultInDetailsControl");
    winner1.innerHTML = ""
    winner.innerHTML = ""
    inputValueViewPlayer1.innerHTML = `<span class="inputValueViewPlayer1Span">Player-1</span> had provided = <span class="inputValueViewPlayer1ValueSpan">[ ${inputValuePlayer1} ]</span>`;
    finalResultPlayer1.map((item)=>{
        winner1.innerHTML += `${item}<br>`;   
    })
    finalResult.map((item)=>{
        winner.innerHTML += `${item}<br>`;        
    })
    allInputValueOfPlayer.map((item)=>{
        inputValueViewPlayerOthers.innerHTML += `<li>[ ${item} ]</li>`;

    })
}




let displayControl = (type)=>{
    if( type == "none" ){
        titleWrapper.style.display = "none";
    }else if( type == "inlineBlock" ){
        titleWrapper.style.display = "inline-block";
    }else if( type == "player2" ){
        playerInput2.style.display = `none`;
        playerInputBtn2.style.display = `none`;
        playerInput3.style.display = "inline-block";
        playerInputBtn3.style.display = "inline-block";
    }else if( type == "player3" ){
        playerInput3.style.display = `none`;
        playerInputBtn3.style.display = `none`;
        playerInput4.style.display = "inline-block";
        playerInputBtn4.style.display = "inline-block";
    }else if( type == "player4" ){
        playerInput4.style.display = `none`;
        playerInputBtn4.style.display = `none`;
        playerInput5.style.display = "inline-block";
        playerInputBtn5.style.display = "inline-block";
    }else if( type == "player5" ){
        playerInput5.style.display = `none`;
        playerInputBtn5.style.display = `none`;
        playerInput6.style.display = "inline-block";
        playerInputBtn6.style.display = "inline-block";
    }else if( type == "player6" ){
        playerInput6.style.display = `none`;
        playerInputBtn6.style.display = `none`;
        playerInput7.style.display = "inline-block";
        playerInputBtn7.style.display = "inline-block";
    }else if( type == "player7" ){
        playerInput7.style.display = `none`;
        playerInputBtn7.style.display = `none`;
        playerInput8.style.display = "inline-block";
        playerInputBtn8.style.display = "inline-block";
    }else if( type == "player8" ){
        playerInput8.style.display = `none`;
        playerInputBtn8.style.display = `none`;
        playerInput9.style.display = "inline-block";
        playerInputBtn9.style.display = "inline-block";
    }else if( type == "player9" ){
        playerInput9.style.display = `none`;
        playerInputBtn9.style.display = `none`;
        playerInput10.style.display = "inline-block";
        playerInputBtn10.style.display = "inline-block";
    }else if( type == "player10" ){
        playerInput10.style.display = `none`;
        playerInputBtn10.style.display = `none`;
        chance.style.display = `none`;
        chanceCount.style.display = `none`;
    }else if( type == "finalResultInDetailsControl" ){
        main.style.minHeight = "1020px";
        winner1.style.display = "block";
        winner.style.display = "block";
        details.style.display = "none";
        congratulation.style.display = "none";
        playAgain.style.display = "inline-block";
        titleForFinal.style.display = "block";
        titleWrapper.style.display = "none";
        inputValueViewPlayer1.style.display = "inline-block";
        inputValueViewPlayerOthers.style.display = "inline-block";
    }else if( type == "finalResultSummaryControl" ){
        winner1.style.display = "block";
        winner.style.display = "block";
        details.style.display = "inline-block";
        congratulation.style.display = "inline-block";
    }
}