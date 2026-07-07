let user= 0;
let computer=0;
const choices = document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
const useScore = document.querySelector("#user-score");
const comScore = document.querySelector("#Computer-score");

const music = document.getElementById("music");





const win= (userwin) => {
    if(userwin){
        msg.innerText = "You Win!!";
        user++;
        useScore.innerText = user;
        music.play();

    }else{
        
        msg.innerText = "You Lose!!";
        computer++;
        comScore.innerText = computer;
    }

}




choices.forEach((choice) =>{                          // user choice
    choice.addEventListener("click", ()=>{
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
        
    });

});
const computerchoice = () =>{                         //compute choice
    const option= ["r", "p", "s"];
    const idx=  Math.floor(Math.random() * 3);
    return option[idx];
}

const playgame = (userchoice) =>{         //  winner selecter
    
    const comchoice = computerchoice();
    
  
    if(userchoice === comchoice){
        draw();

    }
    else{
        let userwin = true;
        if(userchoice === "r"){ 
            userwin = comchoice === "p" ? false : true; //s,p
        }else if ( userchoice === "p"){
            userwin = comchoice === "s" ? false : true;  //s,r
        }else{
            userwin = comchoice === "r" ? false : true;
        }
        win(userwin);
    }
}



const draw = () =>{

msg.innerText = "Game is Draw";     // draw

}

