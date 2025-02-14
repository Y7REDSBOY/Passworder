function generatePassword(passwordLength, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols) {
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+';

    let allowedChars = '';
    let password = '';

    // Add characters based on selected options
    allowedChars += includeLowerCase ? lowerCase : '';
    allowedChars += includeUpperCase ? upperCase : '';
    allowedChars += includeNumbers ? numbers : '';
    allowedChars += includeSymbols ? symbols : '';

    // Check if password length is valid
    if (passwordLength <= 0 || isNaN(passwordLength)) {
        alert("The password length must be a positive number.");
        return ''; // Return empty if invalid length
    }

    // Check if at least one character set is selected
    if (allowedChars.length === 0) {
        alert("At least one character set must be selected.");
        return ''; // Return empty if no character sets are selected
    }

    // Generate password by picking random characters from allowedChars
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    // Ensure the password meets the selected criteria
    if (
        (includeLowerCase && !password.split('').some(char => lowerCase.includes(char))) ||
        (includeUpperCase && !password.split('').some(char => upperCase.includes(char))) ||
        (includeNumbers && !password.split('').some(char => numbers.includes(char))) ||
        (includeSymbols && !password.split('').some(char => symbols.includes(char)))
    ) {
        // If the password doesn't meet the criteria, regenerate it
        return generatePassword(passwordLength, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols);
    }

    return password; // Return the generated password
}

function generateAndDisplayPassword() {
    // Get the values from the HTML elements
    const passwordLength = parseInt(document.getElementById("leem").value, 10);
    const includeLowerCase = document.getElementById("IncludeLowercase").checked;
    const includeUpperCase = document.getElementById("IncludeUppercase").checked;
    const includeNumbers = document.getElementById("IncludeNumbers").checked;
    const includeSymbols = document.getElementById("IncludeSymbols").checked;

    // Call the function to generate a password
    const password = generatePassword(passwordLength, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols);

    // Display the password in the container
    const myContainer = document.getElementById("myContainer");

    if (myContainer) {
        myContainer.value = password; // Display the password
        myContainer.setAttribute('readonly', true); // Make the field read-only
    }
}
