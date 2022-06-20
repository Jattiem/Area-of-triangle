const calculate2 = document.getElementById('calculate2');

calculate2.addEventListener('click',()=>{
    let base = document.getElementById('base').value;
    let height = document.getElementById('height').value;
    let total = (0.5 *(base * height) );
    document.getElementById('display2').innerHTML =
    total + " meters" ;
}
);

