'use strict';
// error
// import {totalAmount,numOfItems,category,price,cards} from './DOM'

let totalAmount = document.getElementById('totalAmount');
let numOfItems = document.getElementById('numOfItems');
totalAmount.textContent = '0';
numOfItems.textContent = '0';

const category = document.getElementById('category');
const price = document.getElementById('price');

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


submitButton.addEventListener('click', (event)=>{
    if((inputMail.value).match(/\S+/) && inputPass.value.match(/\S+/)){
        totalAmount.textContent = '0';
        numOfItems.textContent = '0';

        alert('Спасибо за покупки!\nЗаходите на наш сайт ещё!')
    }
    else{
        event.preventDefault();
        alert('Данные введены не корректно.\nСделайте ещё одну попытку')
    }
})

checkout.addEventListener('click', (event)=>{
    modalWindow.classList.remove('displayNone');
})

addButtons.forEach((elem, index)=>{ 
    elem.addEventListener('click', (event)=>{
        if(!event.target.parentElement.children[1].children[0].value || event.target.parentElement.children[1].children[0].value === '0'){
            totalAmount.textContent = (strToNum(totalAmount.textContent) + strToNum(event.target.parentElement.children[0].textContent)).toString();
            numOfItems.textContent = (strToNum(numOfItems.textContent) + 1).toString();
        }
        else{
            totalAmount.textContent = (event.target.parentElement.children[1].children[0].value * strToNum(event.target.parentElement.children[0].textContent) + strToNum(totalAmount.textContent)).toString();
            numOfItems.textContent = (strToNum(event.target.parentElement.children[1].children[0].value) + strToNum(numOfItems.textContent)).toString();
            event.target.parentElement.children[1].children[0].value = '';
        }
    })
})

category.addEventListener('click', (event)=>{
    selectionItems(category, price);
});



price.addEventListener('click', (event)=>{
    selectionItems(category, price);
    
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
