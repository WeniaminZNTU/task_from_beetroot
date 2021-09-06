'use strict';

import {totalBuyPrice, countItems, category, priceCategory, inputs, addButtons, checkout, wrapperModalWindow, closeModalWindowBtn, inputMail, inputPass, submitButton} from './DOM.js'
import {toNum, selectionItems} from './functions.js';

// Task 3
// =========================================================================================================
console.log(checkout);
checkout.addEventListener('click', (event)=>{
    if((countItems.textContent) > 0){
        wrapperModalWindow.classList.add('wrapperModalWindow');
    }
    else{
        alert('Вы ничего не выбрали');
    }
})

closeModalWindowBtn.addEventListener('click', (event)=> {
    wrapperModalWindow.classList.toggle('wrapperModalWindow');
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
