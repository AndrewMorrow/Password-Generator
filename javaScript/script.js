// -------Global Variables-------
// this targets the generate password button and stores it in a variable
let generateBtn = document.querySelector("#generate");
// this is an empty array to concatenate our accepted values to
var possibleChars = [];
// initializes passLength variable
var passLength;
// array of lowercase alphabetical possibilities
var alphabeticalLowerChar = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
];
// array of UPPERCASE characters
var alphabeticalUpperChar = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
];
// array of special characters
var specialChar = [
    "!",
    '"',
    "#",
    "$",
    "%",
    "&",
    "'",
    "(",
    ")",
    "*",
    "+",
    ",",
    "-",
    ".",
    "/",
    ":",
    ";",
    "<",
    "=",
    ">",
    "?",
    "@",
    "[",
    "]",
    "^",
    "\\",
    "_",
    "`",
    "{",
    "|",
    "}",
    "~",
];

// ------- End Global Variables --------
// This will tell the user what to click
alert(`Welcome to the Password Generator!
Click the "Generate Password" button to generate a new password!`);

// this listens for a user click on the generate password button
generateBtn.addEventListener("click", userPrompts);

// function that runs all of the user prompts when the generate password button is clicked
function userPrompts() {
    alert(
        `The next few prompts will gather your requirements for your password.
The OK button will select yes and the Cancel button will select no.`
    );
    // this stores the users input for the length of the password they want
    passLength = +prompt(
        "Please enter a length between 8 and 128 characters that you would like your password to be."
    );
    // this checks passLength value to see if it is between 8 and 128
    if (passLength >= 8 && passLength <= 128) {
        // this checkes to see if they want uppercase in the password and returns a true or false value
        includeLower = confirm(
            `Would you like to include lowercase letters? 
Click "OK" for yes or "Cancel" for no`
        );
        // this checkes to see if they want uppercase in the password and returns a true or false value
        includeUpper = confirm(
            `Would you like to include uppercase letters? 
Click "OK" for yes or "Cancel" for no`
        );
        // this checkes to see if they want special characters in the password and returns a true or false value
        includeSpecial = confirm(
            `Would you like to include special characters? 
Click "OK" for yes or "Cancel" for no`
        );
    } else {
        alert(
            " That was not a valid input! The generator will now start over."
        );
        userPrompts();
    }
    if (includeSpecial) {
        possibleChars = possibleChars.concat(specialChar);
    }
    if (includeLower) {
        possibleChars = possibleChars.concat(alphabeticalLowerChar);
    }
    if (includeUpper) {
        possibleChars = possibleChars.concat(alphabeticalUpperChar);
    }
    // this calls the writePassword function to display to the password id box
    writePassword();
}

function generatePassword() {
    var password = "";
    for (i = 0; i < passLength; i++) {
        password +=
            possibleChars[Math.floor(possibleChars.length * Math.random())];
    }

    return password;
}

// Writes password to the #password text field
function writePassword() {
    // this runs the function and sets the returned generated password in a variable
    var password = generatePassword();
    // this targets the textarea and sets a variable for it
    var passwordText = document.querySelector("#password");
    // this sets the textarea variable to equal the password variable
    passwordText.value = password;
}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
