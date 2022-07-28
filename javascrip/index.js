const azul = document.getElementById ( 'pepsi01' );
const vermelho = document.getElementById ( 'pepsi02' );
const preto = document.getElementById ( 'pepsi03' );
let container = document.getElementById ('container')

function fundoAzul () {
    produto.src = './images/pepsiblue.png';
    container.style.backgroundColor = '#0062be';
}

function fundoVermelho () {
    produto.src = './images/pepsiwhite.png';
    container.style.backgroundColor = '#e60c2c';
}

function fundoPreto () {
    produto.src = './images/pepsiblack.png';
    container.style.backgroundColor = '#1e1e1e';
}


azul.addEventListener ( 'click', fundoAzul );
vermelho.addEventListener ( 'click', fundoVermelho);
preto.addEventListener ('click', fundoPreto);