class Ninja{
    constructor(name, health, speed = 3, strength = 3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName(ninja){
        console.log(ninja.name);
    }

    showStats(ninja){
        console.log("\n============== " + ninja.name + "'s Stats ================");
        console.log("Name: " +ninja.name + "\nHealth: " + ninja.health + "\nSpeed: " + 
            ninja.speed + "\nStrength: " + ninja.strength);
        console.log("\n========================================================")
    }

    drinkSake(ninja){
        this.health += 10;
        console.log(`${ninja.name} drank Sake, +10 HP!`)
    }

}

class Sensei extends Ninja{
    constructor(name, health = 200, speed = 10, strength = 10, wisdom = 10){
        super(name, health, speed, strength);
        this.wisdom = wisdom;
    }

    speakWisdom(sensei){
        this.drinkSake(sensei);
        console.log("Where there's a will, there's a way.")
    }

}

const char1 = new Sensei("Sensei Meowmers");

char1.speakWisdom(char1);
char1.showStats(char1);