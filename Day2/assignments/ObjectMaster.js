const pokemon = Object.freeze([
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
        { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
        { "id": 52,  "name": "Meowth",     "types": ["normal"] },
        { "id": 63,  "name": "Abra",       "types": ["psychic"] },
        { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
        { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
        { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
        { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
        { "id": 98,  "name": "Krabby",     "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
        { "id": 133, "name": "Eevee",      "types": ["normal"] },
        { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ]);
    
//STEP 1
const divBy3 = pokemon.filter(val => val.id % 3 === 0);
console.log("\n===============TASK 1==========================");
console.log(divBy3);

//STEP 2
const fireType = pokemon.filter(val => val.types.includes("fire"));
console.log("\n=================== TASK 2 ======================");
console.log(fireType);

//STEP 3
console.log("\n=================== TASK 3 ======================");
const moreType = pokemon.filter(val => {
    if (val.types.length > 1){
        console.log(val)
    }});

//STEP 4
console.log("\n=================== TASK 4 ======================");
const namesOfPokemon = pokemon.filter(val => {
    console.log(val.name);
});

//STEP 5
console.log("\n=================== TASK 5 ======================");
const higherID = pokemon.filter(val => {
    if(val.id > 99){
        console.log(val.name);
    }
})

//STEP 6
console.log("\n=================== TASK 6 ======================");
const poisonTypes = pokemon.filter(val => {
    if(val.types.length == 1){
        return val.types.includes("poison");
    }
    
});
console.log(poisonTypes);


//STEP 7
console.log("\n=================== TASK 7 ======================");
const flyType = pokemon.filter(val => {
    if(val.types[1] == "flying"){
        return val.types.includes("flying");
    }
});
console.log(flyType);

//STEP 8
console.log("\n===================TASK 8======================");
const normalCount = pokemon.filter(val => {
    if(val.types.includes("normal")){
        let count = 0;
        count++;
        console.log(count);
        
    }
});

