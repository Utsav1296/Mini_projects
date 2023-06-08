-----Hex-----

##### Hex-color #####
The Random Hex Color Generator is a JavaScript code snippet that generates random hex colors and updates the background color of a webpage dynamically. This documentation will explain the purpose, functionality, and usage of the Random Hex Color Generator code.

##### Functionality #####
The code generates a random color by randomly selecting characters from an array of hexadecimal values. When a button is clicked, a new random hex color is generated and applied as the background color of the webpage. The generated hex color is also displayed on the webpage.


JavaScript Setup:

Fetch the button element using document.getElementById('btn') and assign it to the btn variable.
Fetch the element with the class "color" using document.querySelector('.color') and assign it to the color variable.
Create an array arr containing the hexadecimal characters used to generate the random hex color.
Event Listener Setup:

Attach an event listener to the button using the addEventListener() method. Pass the event name (e.g., "click") and the function clickHandler as arguments.
Define the clickHandler function, which will be executed when the button is clicked.
Generating Random Hex Color:

Inside the clickHandler function, declare a variable hex and initialize it with the "#" symbol to indicate a hex color.
Use a for loop to iterate six times (representing the six digits in a hex color code).
Within the loop, generate a random index by using Math.floor(Math.random() * arr.length).
Append the character at the random index to the hex variable.
After the loop, the hex variable will contain a randomly generated hex color code.
Updating the Webpage:

Assign the value of hex to the newColor variable.
Set the textContent property of the color element to newColor, displaying the generated color on the webpage.
Set the backgroundColor property of the document.body element to newColor, updating the background color of the webpage.
Repeat:

Clicking the button will trigger the clickHandler function, generating a new random hex color and updating the webpage.


**********************************************************
**********************************************************
**********************************************************

----- RGBA -----

##### Functionality #####
The code generates a random RGBA color by generating random values for the red (R), green (G), blue (B), and alpha (A) components of the color. When a button is clicked, a new random RGBA color is generated, and it is applied as the background color of the webpage. The generated RGBA color is also displayed on the webpage.


JavaScript Setup:

Create a constant variable Possible_Limit_for_colors and set it to 255. This value represents the maximum limit for generating random values for the RGB components of the color.
Fetch the button element using document.getElementById('btn') and assign it to the btn variable.
Fetch the element with the class "color" using document.querySelector('.color') and assign it to the color variable.
Define four functions: random1(), random2(), random3(), and random4(). Each of these functions generates a random value based on the specified logic.
Generating Random RGBA Color:

The random1(), random2(), and random3() functions generate random values for the red (R), green (G), and blue (B) components of the color, respectively. They use Math.floor(Math.random() * Possible_Limit_for_colors) to generate a random number within the range of 0 to 255.
The random4() function generates a random value for the alpha (A) component of the color. It uses Math.random().toFixed(1) to generate a random decimal number with one decimal place.
Event Listener Setup:

Attach an event listener to the button using the addEventListener() method. Pass the event name (e.g., "click") and an anonymous function as the event handler.
Inside the event handler function, generate random values for r, g, b, and a by calling the corresponding random functions.
Updating the Webpage:

Set the backgroundColor property of the document.body element to new RGBA color.