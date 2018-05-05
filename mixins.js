const warriorBahavior = {
    warrior: {
        attack(target) {
            target.health -= this.weapon.damage;
        },
    
        defend() {
    
        }
    }
};

const wizardBehavior = {
    wizard: {
        attack() {

        },
        castSpell() {}
    }
};

class Character {
    constructor(name) {}
    move() {}
    speak() {}
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

function withWarriorBehavior(Superclass) {
    return class WarriorBehavior extends Superclass {
        attack() {}
        defend() {}
    };
}

function withWizardBehavior(Superclass) {
    return class extends Superclass {
        castSpell() {}
    }
}

class Warrior extends withWizardBehavior(withWarriorBehavior(Character)) {

}