//  CLASSES AND OOP 

//WHAT ARE SOME BASIC ELEMENTS OF A CLASS?
//-- THE NAME OF THE CLASS
// -- ALL CLASSES HAVE A CONSTRUCTOR
// -- CAN HAVE ATTRIBUTRES THAT GO IN THE CONSTRUCTOR
// -- CLASSES HAVE METHODS THAT ALLOW US TO PERFORM ACTIONS

class Character{
    constructor(name, health, strength, intelligence){
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.intelligence = intelligence;
    }

    attack(target){
        target.health -= this.strength;
        console.log(`\n${this.name} attacked ${target.name}, dealing ${this.strength}, damage!`);
        console.log(`\n${target.name} now has ${target.health} HP`);
    }

}

//INTRODUCING INHERITENCE

class MagicUser extends Character{
    constructor(name, health, strength, intelligence, mana){
        super(name, health, strength, intelligence);
        this.mana = mana;
    }

    attack(target){
        target.health -= this.intelligence;
        this.mana -= 13;

        console.log(`\n${this.name} fires a spell ${target.name}, dealing ${this.strength}, damage!`);
        console.log(`\n${target.name} now has ${target.health} HP`);
    }

}


const char1 = new Character("Erick", 100, 45, 87);
// console.log(char1.name);
const char2 = new Character("Link", 100, 35, 30);

//creating a new magic user
const char3 = new MagicUser("Zelda", 75, 20, 80, 60);

//this would only attack using the strength attribute
char1.attack(char2);
char2.attack(char1);

//we would use the mana attribute to attack
char3.attack(char2);