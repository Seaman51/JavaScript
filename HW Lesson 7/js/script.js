//2 Реализовать модуль корзины. Создать блок товаров и блок корзины. У каждого товара есть кнопка «Купить», 
//  при нажатии на которую происходит добавление имени и цены товара в блок корзины.Корзина должна уметь считать общую сумму заказа.

let items = document.getElementsByClassName('item'),
    recycle = document.getElementById('recycle'),
    infotext = document.getElementById('infotext'),
    summ = document.getElementsByClassName('summ'),
    del_button = recycle.getElementsByClassName('del_button')

function addItem() {
    infotext.style.display = 'none';
    let item_clone = this.parentElement.cloneNode(true);
    recycle.appendChild(item_clone)
    for (var i = 0; i < del_button.length; i++) {
        del_button[i].onclick = delItem;
    }
    total_sum();
}

function total_sum() {
    let prices = recycle.getElementsByClassName('price')
    totalprice = 0;
    for (let j = 0; j < prices.length; j++) {
        totalprice = totalprice + Number(prices[j].innerHTML);
    }
    summ[0].innerHTML = 'Общая сумма ' + totalprice;
}

let item_button = document.getElementsByClassName('item_button');
for (var i = 0; i < item_button.length; i++) {
    item_button[i].onclick = addItem;
}

let buttonClear = document.getElementById('clear');
buttonClear.onclick = function () {
    recycle.innerHTML = ''
    recycle.appendChild(infotext)
    infotext.style.display = 'block';
    summ[0].innerText = '';
}

function delItem() {
    this.parentElement.remove();
    total_sum();
}