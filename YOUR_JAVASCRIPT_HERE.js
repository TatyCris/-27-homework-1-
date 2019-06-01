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

const hero2 = {
    name: '',
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: 'arrow',
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

// UI player1 ----------
document.getElementById('heroImg2').onclick = () => {
    hero2.health = hero2.health - hero.weapon.damage
    hero.weapon.type = ''
    hero.weapon.damage = 0
    displayStats()    
    displayStats2()
}

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

// UI player2 ----------
document.getElementById('heroImg').onclick = () => {
    hero.health = hero.health - hero2.weapon.damage
    hero2.weapon.type = ''
    hero2.weapon.damage = 0
    displayStats()    
    displayStats2()
}

document.getElementById('inn2').onclick = () => {
    rest(hero2)
    displayStats2()
}

document.getElementById('dagger2').onclick = () => {
    pickUpItem(hero2, {
        type: 'dagger',
        damage: 2
    })
    displayStats2()
}

document.getElementById('bag2').onclick = () => {
    equipWeapon(hero2)
    displayStats2()
}

// Update Hero name player1 ----------
const form = document.getElementById('nameForm')
form.onsubmit = () => {
    hero.name = ''
    const inputName = form.getElementsByTagName('input')[0]    
    hero.name = inputName.value
    displayStats()
    inputName.value = ''
    
    return false
}

// Update Hero name player2 ----------
const form2 = document.getElementById('nameForm2')
form2.onsubmit = () => {
    hero2.name = ''
    const inputName2 = form2.getElementsByTagName('input')[0]    
    hero2.name = inputName2.value
    displayStats2()
    inputName2.value = ''
    
    return false
}

// Display Status player1 ----------
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

// Display Status player2 ----------
const name2 = document.getElementById('name2')
const health2 = document.getElementById('health2')
const weapon2 = document.getElementById('weapon2')
const inventory2 = document.getElementById('inventory2')

function displayStats2() {
    name2.innerHTML = hero2.name
    health2.innerHTML = hero2.health
    weapon2.innerHTML = hero2.weapon.type + '<br>damage: ' + hero2.weapon.damage
    inventory2.innerHTML = ''
    hero2.inventory.forEach(item => {
        const li = document.createElement('li')
        li.innerHTML = item.type + ' / ' + item.damage
        inventory2.appendChild(li)       
    })
}