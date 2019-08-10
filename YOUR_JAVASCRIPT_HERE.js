const hero = {
    name: "Aart",
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: "Knife",
        damage: 2,
    }
}

function rest(hero) {
    if (hero.health == 10) {
        alert("Health already has value of 10")
    }
    else {
        hero.health = 10
    }
    return hero
}

const inn = document.getElementById('inn')
inn.addEventListener("click", function () { rest(hero) })


function pickUpItem(hero, weapon) {
    hero.inventory.push(weapon)
}

const dagger = document.getElementById('dagger')
const weapon2 = {
    type: "dagger",
    damage: 2,
}
dagger.addEventListener("click", function () { pickUpItem(hero, weapon2) })


function equipWeapon(hero) {
    if (hero.inventory.length > 0) {
        hero.weapon = hero.inventory[0]
    }
}

const bag = document.getElementById('bag')
bag.addEventListener("click", function(){ equipWeapon(hero) })

