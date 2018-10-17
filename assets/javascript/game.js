// a character is represented by an object
    // properties: Name, HP, base attack power, counterattack power
// methods: 
    // reset game: 
        // place character imgs at top
        // set hp, current attack
    // attack
    
// use global variable to track state of game?
    // states: 
        // 1. choose player character (entered by page load or reset game)
        // 2. choose enemy character (entered after player chooses character)
            // revert to this when an enemy is defeated
        // 3. fight current enemy (entered after player chooses enemy)
        // 4. game over (entered after player loses or defeats all enemies)

// possible "positions" of a character: 
    // ready to choose in state1
    // player's selected character
    // player's selected enemy

// clickables 
    // character images
    // buttons


var character1 = {
    Name: "Character 1",
    healthPoints: ,
    basePower: ,
    counterPower: 
}

var character2 = {
    Name: "Character 2",
    healthPoints: ,
    basePower: ,
    counterPower: 
}

var character3 = {
    Name: "Character 3",
    healthPoints: ,
    basePower: ,
    counterPower: 
}

var character4 = {
    Name: "Character 4",
    healthPoints: ,
    basePower: ,
    counterPower: 
}


$(".gameCharacter").on("click", function(){
    // consider: here, evaluate the gamestate variable to determine what should happen when a characterImg is clicked
    // e.g. the click either makes the character the player's or the enemy's. or, it does something else
    // the power variables should be global; these are set when the player/enemy are selected.

})