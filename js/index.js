'use strict';
// error
// import {totalAmount,numOfItems,category,price,cards} from './DOM'

let totalBuyPrice = document.getElementById('totalAmount');
let count = document.getElementById('numOfItems');
totalBuyPrice.textContent = '0';
count.textContent = '0';

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
        count.textContent = '0';

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
        if(!event.target.parentElement.children[1].children[0].value || event.target.parentElement.children[1].children[0].value === '0'){
            totalBuyPrice.textContent = (strToNum(totalBuyPrice.textContent) + strToNum(event.target.parentElement.children[0].textContent)).toString();
            count.textContent = (strToNum(count.textContent) + 1).toString();
        }
        else{
            totalBuyPrice.textContent = (event.target.parentElement.children[1].children[0].value * strToNum(event.target.parentElement.children[0].textContent) + strToNum(totalBuyPrice.textContent)).toString();
            count.textContent = (strToNum(event.target.parentElement.children[1].children[0].value) + strToNum(count.textContent)).toString();
            event.target.parentElement.children[1].children[0].value = '';
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
    const tempArr = str.match(/\d+/);
    return Number(tempArr.toString());
}

function selectionItems(category, price){

    if(category.selectedIndex === 0 && price.selectedIndex === 0){
        cards.forEach((elem, index,)=>{
             elem.classList.remove('displayNone');
        })
     }

     if(category.selectedIndex === 0 && price.selectedIndex === 1){
        cards.forEach((elem, index,)=>{
            if(strToNum(prices[index]) > 30){
                elem.classList.add('displayNone');                
            }
            else{
                elem.classList.remove('displayNone');
            }
        });
    }

    if(category.selectedIndex === 0 && price.selectedIndex === 2){
        cards.forEach((elem, index,)=>{
            if(strToNum(prices[index]) > 50){
                elem.classList.add('displayNone');                
            }
            else{
                elem.classList.remove('displayNone');
            }
        });
    }

    if(category.selectedIndex === 0 && price.selectedIndex === 3){
        cards.forEach((elem, index,)=>{
            if(strToNum(prices[index]) > 100){
                elem.classList.add('displayNone');                
            }
            else{
                elem.classList.remove('displayNone');
            }
        });
    }

    if(category.selectedIndex === 0 && price.selectedIndex === 4){
        cards.forEach((elem, index,)=>{
            if(strToNum(prices[index]) > 150){
                elem.classList.add('displayNone');                
            }
            else{
                elem.classList.remove('displayNone');
            }
        });
    }

    if(category.selectedIndex === 1 && price.selectedIndex === 0){
        cards.forEach((elem, index)=>{
            if(index < 4){
                elem.classList.remove('displayNone');
            }
            else{
                elem.classList.add('displayNone');
            }
        })
     }

     if(category.selectedIndex === 1 && price.selectedIndex === 1){
        cards.forEach((elem, index)=>{
            if(index < 4 && strToNum(prices[index].textContent) < 30){
                elem.classList.remove('displayNone');
            }
            else{
                elem.classList.add('displayNone');
            }
        })
     }

     if(category.selectedIndex === 1 && price.selectedIndex === 2){
        cards.forEach((elem, index)=>{
            if(index < 4 && strToNum(prices[index].textContent) < 50){
                elem.classList.remove('displayNone');
            }
            else{
                elem.classList.add('displayNone');
            }
        })
     }

     if(category.selectedIndex === 1 && price.selectedIndex === 3){
        cards.forEach((elem, index)=>{
            if(index < 4 && strToNum(prices[index].textContent) < 100){
                elem.classList.remove('displayNone');
            }
            else{
                elem.classList.add('displayNone');
            }
        })
     }

     if(category.selectedIndex === 1 && price.selectedIndex === 4){
        cards.forEach((elem, index)=>{
            if(index < 4 && strToNum(prices[index].textContent) < 150){
                elem.classList.remove('displayNone');
            }
            else{
                elem.classList.add('displayNone');
            }
        })
     }

    if(category.selectedIndex === 2 && price.selectedIndex === 0){
        cards.forEach((elem, index)=>{
            if(index >= 4 && index <= 7){
                elem.classList.remove('displayNone');
            }
            else{
                elem.classList.add('displayNone');
            }
    })
 }

    if(category.selectedIndex === 2 && price.selectedIndex === 1){
    cards.forEach((elem, index)=>{
        if((index >= 4 && index <= 7) && strToNum(prices[index].textContent) < 30){
            elem.classList.remove('displayNone');
        }
        else{
            elem.classList.add('displayNone');
        }
    })
 }


     if(category.selectedIndex === 2 && price.selectedIndex === 2){
       cards.forEach((elem, index)=>{
            if((index >= 4 && index <= 7) && strToNum(prices[index].textContent) < 50){
                elem.classList.remove('displayNone');
            }
            else{
                elem.classList.add('displayNone');
            }
        })
    }


    if(category.selectedIndex === 2 && price.selectedIndex === 3){
        cards.forEach((elem, index)=>{
             if((index >= 4 && index <= 7) && strToNum(prices[index].textContent) < 100){
                 elem.classList.remove('displayNone');
             }
             else{
                 elem.classList.add('displayNone');
             }
         })
     }

     if(category.selectedIndex === 2 && price.selectedIndex === 4){
        cards.forEach((elem, index)=>{
             if((index >= 4 && index <= 7) && strToNum(prices[index].textContent) < 150){
                 elem.classList.remove('displayNone');
             }
             else{
                 elem.classList.add('displayNone');
             }
         })
     }
 
    if(category.selectedIndex === 3 && price.selectedIndex === 0){
    cards.forEach((elem, index)=>{
        if(index >= 8 && index <= 11){
            elem.classList.remove('displayNone');
        }
        else{
            elem.classList.add('displayNone');
        }
    })
 }

     if(category.selectedIndex === 3 && price.selectedIndex === 1){
        cards.forEach((elem, index)=>{
            if((index >= 8 && index <= 11) && strToNum(prices[index].textContent) < 30){
                elem.classList.remove('displayNone');
            }
            else{
                elem.classList.add('displayNone');
            }
        })
    }

    if(category.selectedIndex === 3 && price.selectedIndex === 2){
        cards.forEach((elem, index)=>{
            if((index >= 8 && index <= 11) && strToNum(prices[index].textContent) < 50){
                elem.classList.remove('displayNone');
            }
            else{
                elem.classList.add('displayNone');
            }
        })
    }

    if(category.selectedIndex === 3 && price.selectedIndex === 3){
        cards.forEach((elem, index)=>{
            if((index >= 8 && index <= 11) && strToNum(prices[index].textContent) < 100){
                elem.classList.remove('displayNone');
            }
            else{
                elem.classList.add('displayNone');
            }
        })
    }

    if(category.selectedIndex === 3 && price.selectedIndex === 4){
        cards.forEach((elem, index)=>{
            if((index >= 8 && index <= 11) && strToNum(prices[index].textContent) < 150){
                elem.classList.remove('displayNone');
            }
            else{
                elem.classList.add('displayNone');
            }
        })
    }

}
