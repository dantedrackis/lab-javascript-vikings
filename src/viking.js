// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health = this.health - damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super (health, strength);
        this.name = name;
    }

    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health <= 0) {
            return `${this.name} has died in act of combat`;
        } else {
            return `${this.name} has received ${damage} points of damage`;
        }
    }

    battleCry() {
        return "Odin Owns You All!";
    }

}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health <= 0) {
            return `A Saxon has died in combat`;
        } else {
            return `A Saxon has received ${damage} points of damage`;
        }
    }
}

// War
class War {

    constructor () {
    this.vikingArmy = [];
    this.saxonArmy = [];
    }

    addViking(viking){
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }

    vikingAttack(){
        let randomViking = Math.floor(Math.random() * this.vikingArmy.length);
        let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);

        let attack = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength);
   
        if (this.saxonArmy[randomSaxon].health <= 0) {
             this.saxonArmy.splice(randomSaxon, 1)
        }
    
    return attack
        
        // const randomVikingIndex = Math.floor(Math.random() * (this.vikingArray.length));
        // const randomSaxonIndex = Math.floor(Math.random() * (this.saxonArmy.length));
        // let viking = this.vikingArmy[randomVikingIndex];
        // let saxon = this.saxonArmy[randomSaxonIndex];
        // let vikingDamage = viking.attack();
        // let combatResult = saxon.receiveDamage(vikingDamage);
        // if ((saxon.health - vikingDamage) <= 0) {
        //     this.saxonArmy.splice(randomSaxonIndex, 1);
        // }
        // return combatResult;
   
    }

    saxonAttack(){
        let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);

        let combatResult = this.vikingArmy[randomVikingIndex].receiveDamage(this.saxonArmy[randomSaxonIndex].strength);
        
        if (this.vikingArmy[randomVikingIndex].health <= 0) {
            this.vikingArmy.splice(randomVikingIndex, 1);
        }
        return combatResult;
    }

    showStatus(){
        if(this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
        } else if ((this.vikingArmy.length >= 1) && (this.saxonArmy.length >= 1)) {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}
