function generatePassword(passwordLength, IncludeLowerCase, IncludeUpperCase, IncludeNumbers, IncludeSymbols) {
    const LowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const UpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const Numbers = '0123456789';
    const Symbols = '!@#$%^&*()_+';

    let allowedChars = '';
    let password = '';

    // Add characters based on selected options
    allowedChars += IncludeLowerCase ? LowerCase : '';
    allowedChars += IncludeUpperCase ? UpperCase : '';
    allowedChars += IncludeNumbers ? Numbers : '';
    allowedChars += IncludeSymbols ? Symbols : '';

    // Check if password length is valid
    if (passwordLength <= 0) {
        alert("The password should at least be 1 character long");
        return ''; // Return empty if invalid length
    }

    // Check if at least one character set is selected
    if (allowedChars.length === 0) {
        alert("At least 1 set of characters should be selected");
        return ''; // Return empty if no character sets are selected
    }

    // Generate password by picking random characters from allowedChars
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password; // Return the generated password
}

function generateAndDisplayPassword() {
    // Get the values from the HTML elements
    const passwordLength = parseInt(document.getElementById("leem").value, 10);
    const IncludeLowerCase = document.getElementById("IncludeLowercase").checked;
    const IncludeUpperCase = document.getElementById("IncludeUppercase").checked;
    const IncludeSymbols = document.getElementById("IncludeSymbols").checked;
    const IncludeNumbers = document.getElementById("IncludeNumbers").checked;

    // Call the function to generate a password
    const password = generatePassword(passwordLength, IncludeLowerCase, IncludeUpperCase, IncludeSymbols, IncludeNumbers);

    // Display the password in the container
    const myContainer = document.getElementById("myContainer");

    if (myContainer) {
        myContainer.value = password;
    }
}
