// Hero object ----------
const hero = {
    name: '',
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: 'punch',
        damage: 2
    }
}

// Game logic functions ----------
function rest(hero) {
    if (hero.health === 10) {
        alert('Health already 10!')
    }
    hero.health = 10
    return hero
}

function pickUpItem(hero, weapon) {
    hero.inventory.push(weapon)
}

function equipWeapon(hero) {
    if (hero.inventory.length > 0) {
        hero.weapon = hero.inventory.shift() 
    }
    return hero
}

// UI ----------
document.getElementById('inn').onclick = () => {
    rest(hero)
    displayStats()
}

document.getElementById('dagger').onclick = () => {
    pickUpItem(hero, {
        type: 'dagger',
        damage: 2
    })
    displayStats()
}

document.getElementById('bag').onclick = () => {
    equipWeapon(hero)
    displayStats()
}

// Update Hero name ----------
const form = document.getElementById('nameForm')
form.onsubmit = () => {
    hero.name = ''
    const inputName = form.getElementsByTagName('input')[0]    
    hero.name = inputName.value
    displayStats()
    inputName.value = ''
    
    return false
}

// Display Status ----------
const name = document.getElementById('name')
const health = document.getElementById('health')
const weapon = document.getElementById('weapon')
const inventory = document.getElementById('inventory')

function displayStats() {
    name.innerHTML = hero.name
    health.innerHTML = hero.health
    weapon.innerHTML = hero.weapon.type + '<br>damage: ' + hero.weapon.damage
    inventory.innerHTML = ''
    hero.inventory.forEach(item => {
        const li = document.createElement('li')
        li.innerHTML = item.type + ' / ' + item.damage
        inventory.appendChild(li)       
    })
}