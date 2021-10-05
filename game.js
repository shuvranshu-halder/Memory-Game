const cards= document.querySelectorAll('.card')
// console.log(cards)
const result=document.querySelector('.result')
let first,second=null;
let firstcard,secondcard=null;
var match=0;
let lockboard=false;

cards.forEach(card=>{
    let randomnumb= Math.floor(Math.random()*12);
    card.style.order=randomnumb;
    card.addEventListener('click',flipandcheckCard)
})

function flipandcheckCard(){
    if(lockboard)return;
    if(this === firstcard)return;
    this.classList.toggle('flip')

    if(!first){
        first=this.dataset.id;
        firstcard=this;
        return;
    }
    if(!second){
        second=this.dataset.id;
        secondcard=this;
        // console.log(firstcard,secondcard)
        if(first==second){
            firstcard.removeEventListener('click',flipandcheckCard);
            secondcard.removeEventListener('click',flipandcheckCard);
            first=second=firstcard=secondcard=null;
            match++;
            if(match==6){
                result.innerHTML="-----Hurrah!! You have won the match-----";
            }

        }else{

            lockboard= true;
            setTimeout(()=>{
            firstcard.classList.remove('flip')
            secondcard.classList.remove('flip')
            lockboard=false;
            first=second=firstcard=secondcard=null;
            },500)  
        }
    }

}

// if(match==6){
//     alert("Hurrah!!You have won the match");
// }
// console.log(match);


// (function shuffle(){

//     cards.forEach(card=>{
//         let randomnumb= Math.floor(Math.random()*12);
//         card.style.order=randomnumb;
//     })
    
// })()
