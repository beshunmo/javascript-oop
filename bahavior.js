function attack(target) {
    target.health -= this.weapon.damage;
}

function castSpell(target, spell) {
    target.health -= this.spell.damage;
}

class Character {
    constructor(name) {
        this.name = name;
    }
}

class Warrior extends Character {
    constructor(name, weapon) {
        super(name)

        this.weapon = weapon;
    }
}

class Wizard extends Character {
    constructor(name, spell) {
        super(name, speal);

        this.spell = spell;
    }
}

class Knigt extends Character {
    constructor(name, weapon, spell) {
        super(name);

        this.weapon = weapon;
        this.spell = spell;
    }
}

Warrior.prototype.attack = attack;

Wizzard.prototype.castSpell = castSpell;

Knigt.prototype.attack = attack;
Knigt.prototype.attack = castSpell;