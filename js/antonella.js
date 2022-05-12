const $dia = document.getElementById('dias'),
    $hora = document.getElementById('horas'),
    $minuto = document.getElementById('minutos'),
    $segundo = document.getElementById('segundos'),
    $mensajeFinal = document.querySelector('final');

//fecha a futuro
const contador = new Date('jun 04, 2022 17:00:00').getTime();

let interval = setInterval(function () {
    //obeteber fecha actual y milisegundo

    const now = new Date().getTime();

    //obtener distancia entre ambas fechas
    let distancia = contador - now;

    //calculos a dias, horas, minutos, segundos
    let dia = Math.floor(distancia / (1000 * 60 * 60 * 24));
    let hora = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minuto = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    let segundo = Math.floor((distancia % (1000 * 60)) / (1000));

    //escribimos los resultados 
    $dia.innerHTML = dia;
    $hora.innerHTML = hora;
    $minuto.innerHTML = minuto;
    $segundo.innerHTML = ('0' + segundo).slice(-2);

    //cuando llegue a 0
    if (distancia < 0) {
        clearInterval(interval);
        $mensajeFinal.style.transform = 'translateY(0)';

    }

}, 1000);