'use strict'

const tabItem = document.querySelectorAll('.tabs__btn-item');
const tabContent = document.querySelectorAll('.tabs__content-item')

tabItem.forEach(function(element){
    element.addEventListener('click', open)
});

function open(evt) {
    const tabTarget = evt.currentTarget;
    const
}