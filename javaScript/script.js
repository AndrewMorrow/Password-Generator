// -------Global Variables-------
// this targets the generate password button and stores it in a variable
let generateBtn = document.querySelector("#generate");
// this is an empty array to concatenate our accepted values to
var possibleChars = [];
// initializes passLength variable
var passLength;
var password = "";
var numberSelected = 0;
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
var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// ------- End Global Variables --------
// This will tell the user what to click
alert(`Welcome to the Password Generator!
Click the "Generate Password" button to generate a new password!`);

// this listens for a user click on the generate password button
generateBtn.addEventListener("click", userPrompts);

// function that runs all of the user prompts when the generate password button is clicked
function userPrompts() {
    possibleChars = [];
    password = "";
    alert(
        `The next few prompts will gather your requirements for your password.
The "OK" button will select yes and the "Cancel" button will select no.`
    );
    // this stores the users input for the length of the password they want
    passLength = +prompt(
        "Please enter a length between 8 and 128 characters that you would like your password to be."
    );
    // this checks passLength value to see if it is between 8 and 128 and the function will be called again if it isnt
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
        // this checkes to see if they want numeric characters in the password and returns a true or false value
        includeNumeric = confirm(
            `Would you like to include numbers? 
Click "OK" for yes or "Cancel" for no`
        );
        if (
            !includeLower &&
            !includeUpper &&
            !includeSpecial &&
            !includeNumeric
        ) {
            alert(
                " Please select at least one character set. The generator will now start over."
            );
            userPrompts();
        }
    } else {
        // this will show if the user input a incorrect value
        alert(
            " That was not a valid input! The generator will now start over."
        );
        // this restarts the function after an invalid input
        userPrompts();
    }
    // this adds the special characters to the array if the user selected the yes option
    if (includeSpecial) {
        passLength--;
        // this guarantees at least one special character will be in password if selected
        password += specialChar[Math.floor(Math.random() * specialChar.length)];
        possibleChars = possibleChars.concat(specialChar);
    }
    // this adds the lowercase characters to the array if the user selected the yes option
    if (includeLower) {
        passLength--;
        // this guarantees at least one lowercase will be in password if selected
        password +=
            alphabeticalLowerChar[
                Math.floor(Math.random() * alphabeticalLowerChar.length)
            ];
        possibleChars = possibleChars.concat(alphabeticalLowerChar);
    }
    // this adds the uppercasecharacters to the array if the user selected the yes option
    if (includeUpper) {
        passLength--;
        // this guarantees at least one uppercase will be in password if selected
        password +=
            alphabeticalUpperChar[
                Math.floor(Math.random() * alphabeticalUpperChar.length)
            ];
        possibleChars = possibleChars.concat(alphabeticalUpperChar);
    }
    // this adds the uppercasecharacters to the array if the user selected the yes option
    if (includeNumeric) {
        passLength--;
        // this guarantees at least one numeric will be in password if selected
        password += numeric[Math.floor(Math.random() * numeric.length)];
        possibleChars = possibleChars.concat(numeric);
    }
    // this calls the writePassword function to display to the password id box
    writePassword();
}

//this function generates the password using the Math.random function and concatenating the selected requirements arrays
function generatePassword() {
    for (i = 0; i < passLength; i++) {
        password +=
            possibleChars[Math.floor(possibleChars.length * Math.random())];
    }
    return password;
}

// Writes password to the #password text field
function writePassword() {
    // this runs the function and sets the returned generated password in a variable
    password = generatePassword();
    // this targets the textarea and sets a variable for it
    var passwordText = document.querySelector("#password");
    // this sets the textarea variable to equal the password variable
    passwordText.value = password;
}
