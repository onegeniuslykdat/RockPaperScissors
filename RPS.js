function computerPlay(){
    turn = ["Rock", "Scissors", "Paper"];
    let t = Math.floor(Math.random() * 3);
    let t1 = Math.random();
    return turn[t];
}

function Winner(){
     let p = document.querySelector("#Options").value;
     let c = computerPlay();
    switch(p)
    {
        case "Rock":
                if(c == "Rock"){
            alert("Computer plays: " +c + " Game = Draw");
                }
                else if (c == "Scissors"){
             alert("Computer plays: " +c + " Game = You win")
                }
                else {alert("Computer plays: " +c + " Game = You lose")}
            break;
        case "Scissors":
                if(c == "Scissors"){
            alert("Computer plays: " +c + " Game = Draw");
                }
                else if (c == "Paper"){
             alert("Computer plays: " +c + " Game = You win")
                }
                else {alert("Computer plays: " +c + " Game = You lose")}
            break;
        case "Paper":
                if(c == "Paper"){
            alert("Computer plays: " +c + " Game = Draw");
                }
                else if (c == "Rock"){
             alert("Computer plays: " +c + " Game = You win")
                }
                else {alert("Computer plays: " +c + " Game = You lose")}
            break;
        default:
            alert();
            break;
    }
}
