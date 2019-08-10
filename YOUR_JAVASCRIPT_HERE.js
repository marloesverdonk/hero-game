const hero = {
    name: "Marloes",
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: "gun",
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
    displayStats(hero)
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
    displayStats(hero)
}

const bag = document.getElementById('bag')
bag.addEventListener("click", function () { equipWeapon(hero) })

const gun = document.getElementById('gun')
const weapon = hero.weapon
gun.addEventListener("click", function () { pickUpItem(hero, weapon) })

function changeHeroName(hero) {
    const nameField = document.getElementById('name');
    const newName = nameField.value
    hero.name = newName
    displayStats(hero)
}

function displayStats(hero) {
    const statsdisplay = document.getElementById('display')
    statsdisplay.innerText = JSON.stringify(hero, null, 2)
    return hero
}

console.log(hero)
displayStats(hero)

// - Write `displayStats` function that writes your hero's name, health, weapontype, weapon damage to the page. Call it at the end of your script

// - Create a form that allow users to change the name of their hero.

// - Call `displayStats` when some data of the hero has changed to update the page.

