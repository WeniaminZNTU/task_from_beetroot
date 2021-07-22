'use strict';


let totalBuyPrice = document.getElementById('totalAmount');
let countItems = document.getElementById('numOfItems');
totalBuyPrice.textContent = '0';
countItems.textContent = '0';


const category = document.getElementById('category');
const priceCategory = document.getElementById('price');

const cards = [...document.getElementsByClassName('product-box__item')];
const prices = [...document.getElementsByTagName('p')];
const multiplierCost = [...document.getElementsByClassName('qty__item')];
const inputs = [...document.getElementsByTagName('input')];
const addButtons = [...document.getElementsByClassName('product-box__btn')];

const checkout = document.getElementById('checkout');

const wrapperModalWindow = document.getElementById('wrapperModalWindow');

const inputMail = document.getElementById('inputMail');
const inputPass = document.getElementById('inputPass');
const submitButton = document.getElementById('submitButton');
const closeModalWindowBtn = document.getElementById('closeModalWindow');

inputs.pop();
inputs.pop();

export {totalBuyPrice, countItems, category, priceCategory, cards, prices, multiplierCost, inputs, addButtons, checkout, wrapperModalWindow, closeModalWindowBtn, inputMail, inputPass, submitButton};