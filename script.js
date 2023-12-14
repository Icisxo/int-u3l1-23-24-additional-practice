// 1. Create a variable named `place` and set the value to a string that says whatever place you want.

let place = "japan";

// 2. Create a variable named `creatureName` and set the value to a string that says whatever name you want to give the creature.

let creatureName = "kamaitachi";

// 3. Create a variable named `color` and set the value to a string that says whatever color you want.

let color = "red";

// 4. Create a variable named `color2` and set the value to a string that says a different color you want.

let color2 = "white";

// 5. Create a variable named `emotion` and set the value to a string that says whatever emotion you want.

let emotion = "mad";

// 6. Create a variable named `character` and set the value to a string that says whatever name for a character you want.

let character = "nakai";

// 7. Create a variable named `number` and set the value to a number greater than 1.

let number = 9;

// 8. Create a variable named `item` and set the value to a string that says whatever item/thing you want.

let item = "sword";

// 9. Create a variable named `item2` and set the value to a string that says a different item/thing you want.

let item2 = "umbrella";

// 10. Create a variable named `verb` and set the value to a string that says whatever verb you want.

let verb = "run";

// 11. Create a variable named `adverb` and set the value to a string that says whatever adverb you want.

let adverb = "clearly";

// 12. Create a variable named `number2` and set the value to a number greater than 1.

let number2 = "8";

// 13. Replace the null values with the appropriate variable you created above.
// - Afterwards, run your code and press the button to see your story!

document.querySelector("button").onclick = function() {
    //replace null below with variable for first volunteer
     document.querySelector(".volunteer1").innerHTML = place;
      //replace null below with variable for second volunteer
 document.querySelector(".volunteer2").innerHTML = creatureName;
      //replace null below with variable for first number
    document.querySelector(".number1").innerHTML = color;
    //replace null below with variable for second number
    document.querySelector(".number2").innerHTML = color2;
    //replace null below with variable adding numbers
    document.querySelector(".adding").innerHTML = emotion;
     //replace null below with variable subtracting numbers
    document.querySelector(".subtracting").innerHTML =character;
  //replace null below with variable for the adjective
    document.querySelector(".adjective").innerHTML = number;
     //replace null below with variable for fist student's name
    document.querySelector(".classmate1").innerHTML = item;
     //replace null below with variable for second student's name
    document.querySelector(".classmate2").innerHTML = item2;
     //replace null below with variable for celebrity's name
    document.querySelector(".celebrity").innerHTML = verb;
    //replace null below with variable for celebrity's name
     document.querySelector(".celebrity-again").innerHTML=adverb;
    //replace null below with variable for the verb
    document.querySelector(".verb").innerHTML = number2;
     document.querySelector(".storyOne").style="display:block";
};

// ## (If time): Spicy Thought Provoking Questions:

// 1. Take a look at the HTML (scroll down!) How do you think you were able to make the JavaScript interact with the HTML?

// 2. What would happen if you have put the number values you assigned in quotes? (Try it out and see!)

// 3. What do you think `document.querySelector()` is doing? (Hint: look at what's in the parenthesis following it).

// 4. What do you think .innerHTML is doing?