class Card{
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card{
    constructor(name, cost, power, res){
        super(name, cost);
        this.power = power;
        this.res = res;
    }

    attack(target){
        //reduce target res by power
        console.log(`${this.name} attacks ${target.name}, dealing ${this.power} damage
        towards ${target.name}'s resilience which is ${target.res}\n`)
        target.res -= this.power;
        if(target.res < 0){
            console.log(`${target.name} has been destroyed by ${this.name} and is no longer on the field\n`);
        }
    }

    showStatUnit(){
        console.log(`Name: ${this.name}\nCost: ${this.cost}\nPower: ${this.power}\nResilience: ${this.res}\n`)
    }

}

class Effect extends Card{
    constructor(name, cost, text, stat, magnitude){
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
        
    }

    play(target){
        if(target instanceof Unit){
            if(this.stat == "Resilience"){
                target.res += this.magnitude;
                console.log(`\n${this.name} targets ${target.name}\nEffect: ${this.text}\n`)
            }
            else if(this.stat == "Power"){
                target.power += this.magnitude;
                console.log(`\n${this.name} targets ${target.name}\nEffect: ${this.text}\n`)
            }
        }
        else{
            throw new Error("Target must be a unit!");
        }
    }

    showStatEffect(){
        console.log(`Name: ${this.name}\nCost: ${this.cost}\n${this.text}\n`)
    }

}

//          UNIT CARD (ATTACKING CARDS)
const RedBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const BlackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);

//          EFFECT CARDS
const HardAlgorithm = new Effect("Hard Algorithm", 2, "Increase target's resilience by 3",
    "Resilience", 3);
const UnhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1,
    "Reduce target's resilience by 2", "Resilience", -2);
const PairProgramming = new Effect("Pair Programming", 3, "Increase target's power by 2",
    "Power", 2);

//DUEL
//TURN 1
console.log("\n\n\n============= TURN 1 ===============");
RedBeltNinja.showStatUnit();
HardAlgorithm.play(RedBeltNinja);
RedBeltNinja.showStatUnit();

//TURN 2
console.log("\n\n\n=============== TURN 2 ===============");
UnhandledPromiseRejection.play(RedBeltNinja);
RedBeltNinja.showStatUnit();

//TURN 3
console.log("\n\n\n================ TURN 3 ===============");
RedBeltNinja.showStatUnit();
PairProgramming.play(RedBeltNinja);
RedBeltNinja.showStatUnit();

BlackBeltNinja.showStatUnit();
RedBeltNinja.attack(BlackBeltNinja);
BlackBeltNinja.showStatUnit();