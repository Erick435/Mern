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
        console.log("\n==========================================================")
    }

    drinkSake(){
        this.health += 10;
        console.log(`${this.name} drank Sake, +10 HP!`)
    }

}


const char1 = new Ninja("Bob", 25);

// char1.sayName(char1);
char1.showStats(char1);
char1.drinkSake();
char1.showStats(char1);