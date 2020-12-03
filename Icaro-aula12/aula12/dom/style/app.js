console.log('esta funcionando');


let list = [
    'banana',
    'maça',
    'pera',
    'abacate',
    'tomate',
    'alface',
    'ameixa',
];

let ListElement = document.querySelector('ul');
console.log(ListElement);

function renderList() {
    let html = '';
    for (let item of list) {
        html += `<li>${item}</li>`;
    }
    ListElement.innerHTML = html;
}


renderList();


let textItem = document.querySelector('#js-itemSacolao');

console.log(textItem);

let buttonItem = document.querySelector('button');
console.log(buttonItem);


buttonItem.addEventListener('click', function () {
    event.preventDefault();
    textItem.value;
    console.log(textItem);
    console.log('clicou no botao 2');
    html += `<li>${item}</li>`;
});


