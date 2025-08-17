const air_a = document.getElementById("input_a")
const air_b = document.getElementById("input_b")
const air_c = document.getElementById("input_c")
const air_sum = document.getElementById("input_sum")
const air_sub = document.getElementById("input_sub")
const air_mlt = document.getElementById("input_mlt")
const air_dov = document.getElementById("input_dov")
const air_clear = document.getElementById("input_clear")

function sum(){
    air_c.value = parseFloat(air_a.value) + parseFloat(air_b.value);
}

function sub(){
    air_c.value = parseFloat(air_a.value) - parseFloat(air_b.value);
}

function mlt(){
    air_c.value = parseFloat(air_a.value) * parseFloat(air_b.value);
}

function glass(){
    air_c.value = parseFloat(air_a.value) / parseFloat(air_b.value);
}

function king(){
    air_a.value = "";
    air_b.value = "";
    air_c.value = "";
}

air_sum.addEventListener('click', sum);
air_sub.addEventListener('click', sub);
air_mlt.addEventListener('click', mlt);
air_dov.addEventListener('click', glass);
air_clear.addEventListener('click', king);
