const logomenu = document.getElementById('menuLateral');
const menu = document.getElementById('aside');
const exit = document.getElementById('exit');

logomenu.addEventListener('click', function(){
    menu.classList.add('mostrar')
})

exit.addEventListener('click', function(){
    menu.classList.remove('mostrar')
})

const izquierda = document.getElementsByClassName('izquierda');
const derecha = document.getElementsByClassName('derecha');
const container = document.getElementsByClassName('container');
const imagenes = document.getElementsByClassName('carroimg');
const carrusel = document.getElementsByClassName('carrusel');

let D = 0;
let I = 400;

const inicio = document.getElementById('inicio');
const btnswitch = document.getElementById('switch');


btnswitch.addEventListener('click', function(){
    inicio.classList.toggle('dark');
    if(btnswitch.classList.toggle('active')){
        btnswitch.classList.add('return');
    }else{
        btnswitch.classList.remove('return');
    }
});

derecha[0].addEventListener('click',function(){
    D += 100
    carrusel[0].style.marginLeft = '-' + D + '%';
    if(D>300){
        D=0
        carrusel[0].style.marginLeft = '-' + D + '%';
    }
})

izquierda[0].addEventListener('click',function(){
    I -= 100
    carrusel[0].style.marginLeft = '-' + I + '%';
    if(I == 0){
        carrusel[0].style.marginLeft = '-' + I + '%';
        I = 300
    }
})

window.open('index2.html', 'width: 40px', 'height: 40px');
