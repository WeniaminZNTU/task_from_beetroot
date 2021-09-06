'use strict';
import {cards, prices} from './DOM.js'

function toNum(str){
  return Number(str.match(/\d+/)[0]);
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

export {toNum, selectionByPrice, selectionItems};
