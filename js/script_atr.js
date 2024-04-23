// Places
function ChoosePlaceAll(){
    var btn = document.querySelector('#chooseall');
    var place1 = document.querySelector('#place1');
    var place2 = document.querySelector('#place2');
    var place3 = document.querySelector('#place3');
    var place4 = document.querySelector('#place4');
    var place5 = document.querySelector('#place5');
    btn.classList.toggle('active');
    place1.classList.remove('unshow');
    place2.classList.remove('unshow');
    place3.classList.remove('unshow');
    place4.classList.remove('unshow');
    place5.classList.remove('unshow');
    ChoosePlace1 = false;
}
document.querySelector('#chooseall').onclick = ChoosePlaceAll;

function ChoosePlace1(){
    var btn1 = document.querySelector('#choose1');
    // var btn2 = document.querySelector('#choose2');
    // var btn3 = document.querySelector('#choose3');
    // var btn4 = document.querySelector('#choose4');
    // var btn5 = document.querySelector('#choose5');
    var place2 = document.querySelector('#place2');
    var place3 = document.querySelector('#place3');
    var place4 = document.querySelector('#place4');
    var place5 = document.querySelector('#place5');
    btn1.classList.toggle('active');
    // btn2.classList.remove('active');
    // btn3.classList.remove('active');
    // btn4.classList.remove('active');
    // btn5.classList.remove('active');
    place2.classList.toggle('unshow');
    place3.classList.toggle('unshow');
    place4.classList.toggle('unshow');
    place5.classList.toggle('unshow');
}
document.querySelector('#choose1').onclick = ChoosePlace1;

function ChoosePlace2(){
    var btn2 = document.querySelector('#choose2');
    var place1 = document.querySelector('#place1');
    var place3 = document.querySelector('#place3');
    var place4 = document.querySelector('#place4');
    var place5 = document.querySelector('#place5');
    btn2.classList.toggle('active');
    place1.classList.toggle('unshow');
    place3.classList.toggle('unshow');
    place4.classList.toggle('unshow');
    place5.classList.toggle('unshow');
}
document.querySelector('#choose2').onclick = ChoosePlace2;

function ChoosePlace3(){
    var btn3 = document.querySelector('#choose3');
    var place1 = document.querySelector('#place1');
    var place2 = document.querySelector('#place2');
    var place4 = document.querySelector('#place4');
    var place5 = document.querySelector('#place5');
    btn3.classList.toggle('active');
    place1.classList.toggle('unshow');
    place2.classList.toggle('unshow');
    place4.classList.toggle('unshow');
    place5.classList.toggle('unshow');
}
document.querySelector('#choose3').onclick = ChoosePlace3;

function ChoosePlace4(){
    var btn4 = document.querySelector('#choose4');
    var place1 = document.querySelector('#place1');
    var place2 = document.querySelector('#place2');
    var place3 = document.querySelector('#place3');
    var place5 = document.querySelector('#place5');
    btn4.classList.toggle('active');
    place1.classList.toggle('unshow');
    place2.classList.toggle('unshow');
    place3.classList.toggle('unshow');
    place5.classList.toggle('unshow');
}
document.querySelector('#choose4').onclick = ChoosePlace4;

function ChoosePlace5(){
    var btn5 = document.querySelector('#choose5');
    var place1 = document.querySelector('#place1');
    var place2 = document.querySelector('#place2');
    var place3 = document.querySelector('#place3');
    var place4 = document.querySelector('#place4');
    btn5.classList.toggle('active');
    place1.classList.toggle('unshow');
    place2.classList.toggle('unshow');
    place3.classList.toggle('unshow');
    place4.classList.toggle('unshow');
}
document.querySelector('#choose5').onclick = ChoosePlace5;