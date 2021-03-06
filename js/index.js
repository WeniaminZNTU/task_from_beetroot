'use strict';

// import {totalAmount,numOfItems,category,price,cards} from './DOM'

const totalAmount = document.getElementById('totalAmount').textContent = '0';
const numOfItems = document.getElementById('numOfItems').textContent = '0';

const category = document.getElementById('category');
const price = document.getElementById('price')

const cards = [...document.getElementsByClassName('product-box__item')];
const prices = [...document.getElementsByTagName('p')]

const addButtons = [...document.getElementsByClassName('product-box__btn')];


category.addEventListener('click', (event)=>{
    selectionItems(category, price);
})



price.addEventListener('click', (event)=>{
    selectionItems(category, price);
    
})


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
