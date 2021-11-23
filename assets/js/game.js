var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this

var enemyNames = ["Roborto", "Amy Anroid", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
     // fight function statements

  // Alert players that they are start this round   
  window.alert("Welcome to Robot Gladiators!");

  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
  // if player choses to fight, then fight
  if (promptFight === "fight" || promptFight === "FIGHT") {

  //Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth'  variable
  enemyHealth = enemyHealth - playerAttack;
  //Log a resulting message to the console so we know that it worked 
  console.log(
      playerName + " attacked " + enemyName + " . " + enemyName + "now has " + enemyHealth + "health remaining."
  );
  // check enemy's health
  if (enemyHealth  <= 0) {
      window.alert(enemyName + " has died!");
  }
  else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
  }
  
  //remove players health by subtract the value of the 'enemyAttack' from the value of the 'playerHealth' and use that to update the value in the 'playerHealth' variable.
  playerHealth = playerHealth - enemyAttack;
  
  //Log a resulting message to the console so we know that it worked
  console.log( enemyName + " attacked " + playerName + " . " + playerName + " now has " + playerHealth + "health remianing.");

  // check player's health 
  if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
  }
  else {
      window.alert(playerName + " still has " + playerHealth + " Health left.");
  }
  //if player choses to skip 
   } else if (promptFight === "skip" || promptFight === "SKIP") {
    //confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    //if yes (true), leave fight
    if (confirmSkip){
        window.alert(playerName + " has decided to skip this fight, Goodbye!");
        // subtract player money for skiping
        playerMoney = playerMoney - 2;
    }
    //if no (false), ask questions again by running fight() again
    else {
        fight();}
    }else { 
    window.alert("You need to choose a valid option. Try again!");}
};
for(var i=0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}

