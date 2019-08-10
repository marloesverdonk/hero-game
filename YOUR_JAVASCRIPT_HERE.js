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

const img = document.getElementById('inn')
img.addEventListener("click", function () {rest(hero)})



function pickUpItem() {

}

function equipWeapon() {

}