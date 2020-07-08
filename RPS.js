function computerPlay(){
    turn = ["Rock", "Scissors", "Paper"];
    let t = Math.floor(Math.random() * 3);
    let t1 = Math.random();
    return turn[t];
}

function Winner(event){
     let p = event.target.id;
     let c = computerPlay();
     //let c2 = document.querySelector('button#'+c);
     document.querySelector("#ComputerChoice").innerText = c;

    switch(p)
    {
        case "Rock":
                if(c == "Rock"){
            alert("Draw");
                }
                else if (c == "Scissors"){
             alert("You win")
                }
                else {alert("You lose")}
            break;
        case "Scissors":
                if(c == "Scissors"){
            alert("Draw");
                }
                else if (c == "Paper"){
             alert("You win")
                }
                else {alert("You lose")}
            break;
        case "Paper":
                if(c == "Paper"){
            alert("Draw");
                }
                else if (c == "Rock"){
             alert("You win")
                }
                else {alert("You lose")}
            break;
        default:
            alert();
            break;
    }
}
