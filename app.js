const RATING = document.getElementById('rating');
const THANKS = document.getElementById('thanks');
const RATES = document.querySelectorAll('.circle-number');
const BTN = document.querySelector('button');
const RATEDISPLAY = document.getElementById('rate-value')
let selectedRate=0;
let selectedElement;
const ratesvalues = [];


//add rates to array of number to secure html value changes
RATES.forEach((e,index)=>{
    ratesvalues.push(index+1);
    e.addEventListener('click',()=>{
        selectRate(index+1)
    })
})
//on rate selection
function selectRate(val){
    selectedRate=val;
    RATES.forEach((e)=>{
        e.className='circle-number';
    });
    if( RATES[val-1].id == selectedRate){
        RATES[val-1].className = RATES[val-1].className+ " selected"
    }
}

//add event to btn
BTN.addEventListener('click',onBtn)

function onBtn(){
    if(selectedRate!=0){
        RATEDISPLAY.innerText=selectedRate;
        RATING.style.display='none';
        THANKS.style.display='block';
    }else{
        alert('Please select a number.')
    }
}