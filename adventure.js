function startGame() {
    let player = prompt("Ready to start your own adventure? Please start by entering your name: ");
    alert("Welcome, " + player + "! Click okay or close to begin.");

alert("Welcome to the Adventure Game! You are standing at a crossroad.");

var choice1 = prompt("Do you want to go left or right?").toLowerCase();

if (choice1 === "left") {
  alert("You chose to go left. You find a treasure chest filled with gold!");
  var action1 = prompt("What will you do with the treasure? (take/leave)").toLowerCase();
  if (action1 === "take") {
    alert("You take the treasure and become rich. Congratulations, you win!");
  } else if (action1 === "leave") {
    alert("You leave the treasure and continue your adventure.");
  } else {
    alert("Invalid choice. You stand there confused.");
  }
} else if (choice1 === "right") {
  alert("You chose to go right. You encounter a dragon!");
  var action1 = prompt("What will you do? (fight/flee)").toLowerCase();
  if (action1 === "fight") {
    alert("You bravely fight the dragon and defeat it. You are a hero!");
  } else if (action1 === "flee") {
    alert("You run away from the dragon and live to tell the tale.");
  } else {
    alert("Invalid choice. The dragon roars in confusion.");
  }
} else {
  alert("Invalid choice. You stand there unsure of what to do.");
}

var choice2 = prompt("You come to a river. Swim across or look for a bridge?").toLowerCase();

if (choice2 === "swim") {
  alert("You swim across the river and reach the other side safely.");
} else if (choice2 === "bridge") {
  alert("You find a bridge and cross the river without any trouble.");
} else {
  alert("Invalid choice. You remain stuck at the riverbank.");
}

var choice3 = prompt("You encounter a mysterious door. Open it or walk away?").toLowerCase();

if (choice3 === "open") {
  alert("You open the door and discover a hidden treasure room!");
} else if (choice3 === "walk away") {
  alert("You decide not to open the door and continue your journey.");
} else {
  alert("Invalid choice. The door taunts you.");
}

var choice4 = prompt("You reach a fork in the road. Go left or go right?").toLowerCase();

if (choice4 === "left") {
  alert("You go left and find a beautiful garden. You rest and continue your adventure.");
} else if (choice4 === "right") {
  alert("You go right and discover a dark cave. It's too scary, and you quickly turn back.");
} else {
  alert("Invalid choice. You're stuck at the fork, unsure of where to go.");
}

alert("Thanks for playing the Adventure Game!");
}


