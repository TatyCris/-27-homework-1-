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

console.log(document.getElementById('inn'));

document.getElementById('inn').onclick = function(event) {
    hero.health = 10
}

function pickUpItem(params) {
    
}

function equipWeapon(params) {
    
}