let lista =     [
                    'Latte',
                    'Pane',
                    'Biscotti',
                    'Birra',
                    'Farina',
                    'Zucchine',
                    'Melanzane',
                ]



let listaDom = document.getElementById('lista-spesa');
let i = 0;

while (i < lista.length){
    listaDom.innerHTML += `<li>${lista[i]}</li>`;
    i++;
}

