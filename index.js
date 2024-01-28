//1
let inp1 = document.getElementById('inp1');
let txt1 = document.getElementById('txt1').innerHTML;

document.getElementById('btn1').onclick = (e) => {
    e.preventDefault();
    let reg1 = new RegExp(`\\b${inp1.value}[a-z]+\\b`, 'gi')
    document.getElementById('ans1').innerHTML = txt1.match(reg1);
}

//2
let inp2 = document.getElementById('inp2');
let reg2 = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[012])-[0-9][0-9]$/;

document.getElementById('btn2').onclick = (e) => {
    e.preventDefault();
    if (reg2.test(inp2.value)) {
        alert('date correct')
    } else {
        alert('date error')
    }
}

//3
let reg3 = /[а-я]+/gi;
let txt3 = document.getElementById('txt3').innerHTML;

document.getElementById('btn3').onclick = (e) => {
    e.preventDefault();
    document.getElementById('ans3').innerHTML = txt3.match(reg3);
}

//4
let reg4 = /^[0-9]+$/
let inp4 = document.getElementById('inp4');

document.getElementById('btn4').onclick = (e) => {
    e.preventDefault();
    if (reg4.test(inp4.value)) {
        alert('строка из цифр');
    } else {
        alert('строка не из цифр');
    }
}

//5
let reg5 = /[^а-яa-z]/gi
let inp5 = document.getElementById('inp5');

document.getElementById('btn5').onclick = (e) => {
    let a = inp5.value.replace(reg5, "").toLowerCase();
    if ((a.length > 0) && (a === a.split("").reverse().join(""))) {
        alert('палиндром');
    } else {
        alert('не палиндром');
    }
}

//6
let inp6 = document.getElementById('inp6');
let txt6 = document.getElementById('txt6').innerHTML;

document.getElementById('btn6').onclick = (e) => {
    e.preventDefault();
    let reg6 = new RegExp(`\\b[a-z]+${inp6.value}\\b`, 'gi')
    document.getElementById('ans6').innerHTML = txt6.match(reg6);
}

//7
let reg7 = /^[A-ZА-Я]+$/
let inp7 = document.getElementById('inp7');

document.getElementById('btn7').onclick = (e) => {
    e.preventDefault();
    if (reg7.test(inp7.value)) {
        alert('строка из прописных букв');
    } else {
        alert('строка не из прописных букв');
    }
}