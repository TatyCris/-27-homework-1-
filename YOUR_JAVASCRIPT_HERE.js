// Hero object ----------
const hero = {
    name: 'Jose',
    heroic: true,
    inventory: [
        {
            type: 'dagger',
            damage: 2
        },
        {
            type: 'dagger',
            damage: 2
        },
        {
            type: 'dagger',
            damage: 2
        },
        {
            type: 'dagger',
            damage: 2
        }
    ],
    health: 10,
    weapon: {
        type: 'dagger',
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
    if (hero.inventory.length !== 0) {
        hero.weapon = hero.inventory[0]  
    }
    return hero
}

// UI ----------
document.getElementById('inn').onclick = function(event) {
    rest(hero)
}

document.getElementById('dagger').onclick = function(event) {
    pickUpItem(hero, {
        type: 'dagger',
        damage: 2
    })
}

document.getElementById('bag').onclick = function(event) {
    equipWeapon(hero)
}

// Update Hero name ----------
const form = document.getElementById('nameForm')
form.onsubmit = () => {
    const inputName = form.getElementsByTagName('input')[0];    
    hero.name = inputName.value;
    displayStats();
    inputName.value = '';
    
    return false;   
}

// Display Status ----------
function displayStats() {
    const name = document.getElementById('name')
    const health = document.getElementById('health')
    const weapon = document.getElementById('weapon')
    const inventory = document.getElementById('inventory')

    name.appendChild(document.createElement("span")).innerHTML = hero.name
    health.appendChild(document.createElement("span")).innerHTML = hero.health
    weapon.appendChild(document.createElement("span")).innerHTML = hero.weapon.type + '<br>damage: ' + hero.weapon.damage 
    hero.inventory.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = item.type + ' / ' + item.damage;
        inventory.appendChild(li);       
    });
}