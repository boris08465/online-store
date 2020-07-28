let open = document.getElementsByClassName('open-btn')[0],
    name_value = document.getElementsByClassName('name-value')[0],
    budget_value = document.getElementsByClassName('budget-value')[0],
    goods_value = document.getElementsByClassName('goods-value')[0],
    items_value = document.getElementsByClassName('items-value')[0],
    employers_value = document.getElementsByClassName('employers-value')[0],
    discount_value = document.getElementsByClassName('discount-value')[0],
    isopen_value = document.getElementsByClassName('isopen-value')[0],
    goods_item = document.getElementsByClassName('goods-item'),
    goods_btn = document.getElementsByClassName('goods-item-btn')[0],
    budget_btn = document.getElementsByClassName('count-budget-btn')[0],
    employers_btn = document.getElementsByClassName('hire-employers-btn')[0],
    choose_item = document.querySelector('.choose-item'),
    time_value = document.querySelector('.time-value'),
    count_budget_value = document.querySelector('.count-budget-value'),
    hire_employers_item = document.querySelectorAll('.hire-employers-item'),
    mainList = {
    budget: 30,
    shopName: 'Shop',
    shopGoods: [],
    employers: {},
    open: true,
    discount: false,
    shopItems: []
}
console.log(goods_btn)
console.log(employers_btn)

if (mainList.open == false) {
    goods_btn.disabled = true,
    budget_btn.disbed = true,
    employers_btn.disabled = true
} else {
    budget_btn.disabled = false
}
console.log(count_budget_value)
let money,
    price,
    peopname,
    check=0;
let currentprice = price;
open.addEventListener('click', () => {
    money = prompt('Ваш бюджет?', '');
    while (isNaN(money) || money == '' || money == null){
        money = prompt('Введите Ваш бюджет еще раз')
    }

        budget_value.textContent = money;

        name_value.textContent = prompt('Название вашего магазина?').toUpperCase();
})
for (let i = 0; i < goods_item.length; i++){
    goods_item[i].addEventListener('change', () =>{
        if (mainList.open == false){
            goods_btn.disabled = true
        } else {
            goods_btn.disabled = false
        }
    });
}
goods_btn.addEventListener('click', () => {
    for (let i = 0; i < goods_item.length; i++){
        let a = goods_item[i].value;
        if ((typeof(a)) === 'string' && (typeof(a)) != null && a.length < 50 ){
            console.log('')
            mainList.shopGoods[i] = a;

            goods_value.textContent = mainList.shopGoods
            console.log(mainList.shopGoods)
        } else{
            i = i - 1
        }
    }
})
choose_item.addEventLisener('change', () => {
    let items = choose_item.value;
        if (isNaN(items) && items !=''){
            mainList.shopItems = items.split(', ');
            mainList.shopItems.sort();
            itons_value.textContent = mainList.shopItems;
        }
});