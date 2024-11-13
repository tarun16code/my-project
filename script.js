let btn = document.getElementById('btn');
let screen = document.getElementById('screen');
let load = document.getElementById('load');

function* newsgenerator() {
    yield 'Laptop prices drop down to 40%,grab now!!!.';
    yield 'Australia will beat india 5-0 in BGT series said Nathan Lyon.';
    yield 'Cold waves warning in upcoming weeks!! PREDICTED IMD';
    yield 'A rare golden spott tiger seen in WEST BENGAL.';
}

let gen = newsgenerator();
btn.addEventListener('click', () => {
    setTimeout(() => {
        screen.innerHTML = `${gen.next().value}`;
        if (screen.innerHTML === 'undefined') {
            screen.innerHTML = `sorry no more news ,Come back later...`;
        }
    }, 2800);
    load.style.animationName = 'ani';
    setTimeout(() => {
        load.style.animationName = 'none';
    }, 3000);
})