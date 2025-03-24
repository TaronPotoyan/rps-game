const rock = document.querySelector('#Rock');
const paper = document.querySelector('#paper'); 
const Scissors = document.querySelector('#Scissors');

let game  = [0,1,2]; 

function get_elelemt (name = '') {
    const el = document.querySelector(name);
    let text = +el.textContent;
    text += 1;
    el.textContent = text + ''; 
}

function changeText (pl,flag,element ) {
    if (pl === 0 )  {
          if (flag == 1) {
               get_elelemt('#first');
          }else {
            get_elelemt('#second');
          }
    } else if (pl === 1) {
        if (flag === 2) {
            get_elelemt('#second');
        }else {
            get_elelemt('#first');
        }
    }else {
        if (flag === 0) {
            get_elelemt('#first');
        }else {
            get_elelemt('#second');
        }

    } 
}

rock.addEventListener('click',(elemnt)=>{
    let num = Math.floor(Math.random() * 3); 
    num = Math.floor(num);
     // 0 qar ,1 mkrat , 2 tuxt;
    changeText(0,num);    
})

paper.addEventListener('click',(elemnt)=>{
    let num = Math.floor(Math.random() * 3); 
    num = Math.floor(num);
     // 0 qar ,1 mkrat , 2 tuxt;
    changeText(0,num);    
})
Scissors.addEventListener('click',(elemnt)=> {
    let num = Math.floor(Math.random() * 3); 
    num = Math.floor(num);
     // 0 qar ,1 mkrat , 2 tuxt;
    changeText(0,num);    
})




