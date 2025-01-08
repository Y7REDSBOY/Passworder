function generatePassword(passwordLength, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols) {
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+';

    let allowedChars = '';
    let password = '';

    // Add characters based on selected options
    if (includeLowerCase) allowedChars += lowerCase;
    if (includeUpperCase) allowedChars += upperCase;
    if (includeNumbers) allowedChars += numbers;
    if (includeSymbols) allowedChars += symbols;

    // Check if password length is valid
    if (passwordLength <= 0) {
        alert("The password should be at least 1 character long.");
        return '';
    }

    // Check if at least one character set is selected
    if (allowedChars.length === 0) {
        alert("At least one character set should be selected.");
        return '';
    }

    // Generate password by picking random characters from allowedChars
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

function generateAndDisplayPassword() {
    // Get the values from the HTML elements
    const passwordLength = parseInt(document.getElementById("leem").value, 10);
    if (isNaN(passwordLength)) {
        alert("Please enter a valid password length.");
        return;
    }

    const includeLowerCase = document.getElementById("IncludeLowercase").checked;
    const includeUpperCase = document.getElementById("IncludeUppercase").checked;
    const includeSymbols = document.getElementById("IncludeSymbols").checked;
    const includeNumbers = document.getElementById("IncludeNumbers").checked;

    // Call the function to generate a password
    const password = generatePassword(passwordLength, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols);

    // Display the password in the container
    const myContainer = document.getElementById("myContainer");

    if (myContainer) {
        myContainer.value = password;
    }
}
