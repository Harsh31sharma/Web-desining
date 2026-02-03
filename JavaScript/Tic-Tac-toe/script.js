let btn = document.querySelectorAll(".box");
let para = document.querySelector("p");
let restart = document.querySelector("#restart");

let turnx = true;

const winp = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
btn.forEach((box)=>{
    box.addEventListener("click" , ()=>{
        if (turnx){
            box.innerText = "X";
            turnx = false;
        }
        else{
            box.innerText="O";
            turnx= true;
        }
        box.disabled = true;
        checkwinner();
    })
});

const checkwinner = ()=>{
    for (let pat of winp){
        let a = btn[pat[0]].innerText;
        let b = btn[pat[1]].innerText;
        let c = btn[pat[2]].innerText;

        if (a!="" && b!="" && c!=""){
            if (a===b && b===c && c == a){
                showwinner(a);
                disable();
                
            }
        }
    }

};
const showwinner = (a)=>{
    para.innerText = `winner is ${a}`;
}

const restartgame =  ()=>{
    console.log("k");
    turnx = true;
    enable();
    para.innerText = "";
    

}
// diable all the boxes 
const disable = ()=>{
    for (let box of btn){
        box.disabled = true;
    }
}

const enable = ()=>{
    for (let box of btn){
        box.disabled = false;
        box.innerHTML="";
    }
}
restart.addEventListener("click" , restartgame);