const hero = {
    name: '',
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: '',
        damage: 2
    }
}

function rest(hero) {
    if (hero.health === 10) {
        alert('Health already 10!')
    }
    hero.health = 10
    return hero
}

document.getElementById('inn').onclick = function(event) {
    rest(hero)
}

function pickUpItem(hero, weapon) {
    hero.inventory.push(weapon)
}

document.getElementById('dagger').onclick = function(event) {
    pickUpItem(hero, {
        type: 'dagger',
        damage: 2
    })
}

function equipWeapon(params) {
    
}