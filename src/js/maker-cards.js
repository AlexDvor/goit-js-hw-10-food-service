import cardsTpl from '../templates/cards.hbs'
import menuData from '../js/menu.json'

const menuRef = document.querySelector('.js-menu')


function makerMenuCards(obj) {
    return cardsTpl(obj)
}


const menuItem = makerMenuCards(menuData)
menuRef.insertAdjacentHTML('beforeend', menuItem)









