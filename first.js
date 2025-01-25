// for finding winner
const winner=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
const board_array= new Array(9).fill('E');
let turn="p1"
let totalturn=0;

function checkwinner(){
    
   for(let [i,j,k] of winner){
    if(board_array[i]!='E' && board_array[i]==board_array[j] && board_array[j]==board_array[k]) return 1;
   }
   return 0;
        
    
}
const gamer=(event)=>{

    const element=event.target;
    // if board is empty than allow to write values
    if(board_array[element.id]=='E'){
        totalturn++;
        // turn of player 1
        if(turn=="p1"){
            
            element.textContent="O"
            board_array[element.id]="O"
            if(checkwinner()){
                let w = document.getElementById("lp1");
                let u= w.value.toUpperCase()
                document.getElementById("result").innerHTML=`Winner is ${u}`
                board_array.forEach((value,index)=>{
                    board_array[index]="E";
                })
                const board= document.querySelector(".board");
                board.removeEventListener("click",gamer)
                totalturn=0;
                return;
            }
            turn="p2"
        }
        else{ // turn of player 2
            element.textContent="X"
         
            board_array[element.id]="X"
            if(checkwinner()){
                let w = document.getElementById("rp2");
                let u= w.value.toUpperCase()
                document.getElementById("result").innerHTML=`Winner is ${u}`
                board_array.forEach((value,index)=>{
                    board_array[index]="E";
                })
                const board= document.querySelector(".board");
                board.removeEventListener("click",gamer) // jab winner mill gya uske baad board listen naa kre click ko
                totalturn=0;
                return;
            }
            turn="p1"
        }
        if(totalturn==9){
        document.getElementById("result").innerHTML="Match is draw"
        board_array.forEach((value,index)=>{
            board_array[index]="E";
        })
        totalturn=0;
        return;
    
        }
    }
    
}

const board= document.querySelector(".board");
board.addEventListener("click",gamer)



const rbtn=document.getElementById("rbutton");
rbtn.addEventListener("click",()=>{
    totalturn=0;
    turn="p1"
    const box= document.getElementsByClassName("box"); // restart p hr cell ko empty kia hai
    Array.from(box).forEach((value)=>{
          value.innerHTML=""
    })
    board_array.forEach((value,index)=>{
        board_array[index]="E";
    })
    
  
    document.getElementById("result").innerHTML=""
    board.addEventListener("click",gamer)
})


