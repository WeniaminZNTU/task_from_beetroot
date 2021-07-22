'use strict';

import {totalBuyPrice, countItems, category, priceCategory, cards, prices, multiplierCost, inputs, addButtons, checkout, wrapperModalWindow, closeModalWindowBtn, inputMail, inputPass, submitButton} from './DOM.js'

// Task 3
// =========================================================================================================
checkout.addEventListener('click', (event)=>{
    if((countItems.textContent) > 0){
        wrapperModalWindow.classList.remove('displayNone');
    }
    else{
        alert('Вы ничего не выбрали');
    }
})

closeModalWindowBtn.addEventListener('click', (event)=> {
    wrapperModalWindow.classList.toggle('displayNone');
    inputMail.value = '';
    inputPass.value = '';
});

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

        if(input.value === ''){
            return;
        }

        if(input.value === '1'){
            totalBuyPrice.textContent = (toNum(totalBuyPrice.textContent) + toNum(p.textContent)).toString();
            countItems.textContent = (toNum(countItems.textContent) + 1).toString();

            input.value = '';
        }
        else if(toNum(input.value) > 1){
            totalBuyPrice.textContent = (input.value * toNum(p.textContent) + toNum(totalBuyPrice.textContent)).toString();
            countItems.textContent = (toNum(input.value) + toNum(countItems.textContent)).toString();

            input.value = '';
        }
        else if(input.value === '0' || input.valueAsNumber < 0){
            input.value = '';
            return;
        }
    })
})

inputs.forEach((input)=>{
    input.addEventListener('input', (event)=>{
        if(event.target.value === '-' || event.target.value < 0){
            event.target.value = '';
        }
    })
})

// Task 1
// =========================================================================================================
category.addEventListener('change', (event)=>{
    selectionItems(category, priceCategory);
});


priceCategory.addEventListener('change', (event)=>{
    selectionItems(category, priceCategory);
});



function toNum(str){
    let tempArr = str.match(/\d+/);

    console.log(tempArr);

    return Number(tempArr[0]);
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
        if(toNum(prices[index].textContent) < 30){
            item.classList.remove('displayNone');
        }
        else{
            item.classList.add('displayNone');
        }
    }

    if(priceIndex === 2){
        if(toNum(prices[index].textContent) < 50){
            item.classList.remove('displayNone');
        }
        else{
            item.classList.add('displayNone');
        }
    }

    if(priceIndex === 3){
        if(toNum(prices[index].textContent) < 100){
            item.classList.remove('displayNone');
        }
        else{
            item.classList.add('displayNone');
        }
    }

    if(priceIndex === 4){
        if(toNum(prices[index].textContent) < 150){
            item.classList.remove('displayNone');
        }
        else{
            item.classList.add('displayNone');
        }
    }

}