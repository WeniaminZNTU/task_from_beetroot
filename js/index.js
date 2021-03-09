'use strict';
// error
// import {totalAmount,numOfItems,category,price,cards} from './DOM'

let totalBuyPrice = document.getElementById('totalAmount');
let countItems = document.getElementById('numOfItems');
totalBuyPrice.textContent = '0';
countItems.textContent = '0';

const category = document.getElementById('category');
const priceCategory = document.getElementById('price');

const cards = [...document.getElementsByClassName('product-box__item')];
const prices = [...document.getElementsByTagName('p')];
const multiplierCost = [...document.getElementsByClassName('qty__item')];
const addButtons = [...document.getElementsByClassName('product-box__btn')];

const checkout = document.getElementById('checkout');

const modalWindow = document.getElementById('modalWindow');
modalWindow.classList.add('displayNone');

const inputMail = document.getElementById('inputMail');
const inputPass = document.getElementById('inputPass');
const submitButton = document.getElementById('submitButton');

// Task 3
// =========================================================================================================
checkout.addEventListener('click', (event)=>{
    modalWindow.classList.remove('displayNone');
})

submitButton.addEventListener('click', (event)=>{
    if((inputMail.value).match(/\S+/) && inputPass.value.match(/\S+/)){
        totalBuyPrice.textContent = '0';
        countItems.textContent = '0';

        alert('Спасибо за покупки!\nЗаходите на наш сайт ещё!')
    }
    else{
        event.preventDefault();
        alert('Данные введены не корректно.\nСделайте ещё одну попытку')
    }
})

// Task 2
// =========================================================================================================
addButtons.forEach((elem, index)=>{ 
    elem.addEventListener('click', (event)=>{
        let {target:{
            parentElement:{
                children:[p,div]
            }}} = event;

        let {children:[input]} = div;

        if(input.value === '' || input.value === '1'){
            totalBuyPrice.textContent = (strToNum(totalBuyPrice.textContent) + strToNum(p.textContent)).toString();
            countItems.textContent = (strToNum(countItems.textContent) + 1).toString();
        }
        else if(strToNum(input.value) > 1){
            totalBuyPrice.textContent = (input.value * strToNum(p.textContent) + strToNum(totalBuyPrice.textContent)).toString();
            countItems.textContent = (strToNum(input.value) + strToNum(countItems.textContent)).toString();
            event.target.parentElement.children[1].children[0].value = '';
        }
        else{
            input.value = '';
            return;
    }
    })
})

// Task 1
// =========================================================================================================
category.addEventListener('click', (event)=>{
    selectionItems(category, priceCategory);
});


priceCategory.addEventListener('click', (event)=>{
    selectionItems(category, priceCategory);
    
});



function strToNum(str){
    const tempArr = str.match(/[\-\d]+/);
    return Number(tempArr.toString());
}

function selectionItems(category, price){
    cards.forEach((elem, index)=>{
        if(category.selectedIndex === 0){
            selectionByPrice(elem, price.selectedIndex, index);
        }

        if(category.selectedIndex === 1){
            if(index < 4){
            selectionByPrice(elem, price.selectedIndex, index);
            }
            else{
                elem.classList.add('displayNone');
            }
        }

        if(category.selectedIndex === 2){
            if(index >= 4 && index <= 7){
                selectionByPrice(elem, price.selectedIndex, index);
            }
            else{
                elem.classList.add('displayNone');
            }
        }

        if(category.selectedIndex === 3){
            if(index > 7 && index <= 11){
                selectionByPrice(elem, price.selectedIndex, index);
            }
            else{
                elem.classList.add('displayNone');
            }
        }

    
    })


}

function selectionByPrice(item, priceIndex, index){

    if(priceIndex === 0){
        item.classList.remove('displayNone');
    }

    if(priceIndex === 1){
        if(strToNum(prices[index].textContent) < 30){
            item.classList.remove('displayNone');
        }
        else{
            item.classList.add('displayNone');
        }
    }

    if(priceIndex === 2){
        if(strToNum(prices[index].textContent) < 50){
            item.classList.remove('displayNone');
        }
        else{
            item.classList.add('displayNone');
        }
    }

    if(priceIndex === 3){
        if(strToNum(prices[index].textContent) < 100){
            item.classList.remove('displayNone');
        }
        else{
            item.classList.add('displayNone');
        }
    }

    if(priceIndex === 4){
        if(strToNum(prices[index].textContent) < 150){
            item.classList.remove('displayNone');
        }
        else{
            item.classList.add('displayNone');
        }
    }

}