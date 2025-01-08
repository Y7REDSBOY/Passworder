function generateAndDisplayPassword() {
    const passwordLength = parseInt(document.getElementById("leem").value, 10);
    if (isNaN(passwordLength)) {
        alert("Please enter a valid password length.");
        return;
    }

    const IncludeLowerCase = document.getElementById("IncludeLowercase").checked;
    const IncludeUpperCase = document.getElementById("IncludeUppercase").checked;
    const IncludeNumbers = document.getElementById("IncludeNumbers").checked;
    const IncludeSymbols = document.getElementById("IncludeSymbols").checked;

    // Debugging log
    console.log({
        IncludeLowerCase,
        IncludeUpperCase,
        IncludeNumbers,
        IncludeSymbols,
    });

    const password = generatePassword(passwordLength, IncludeLowerCase, IncludeUpperCase, IncludeNumbers, IncludeSymbols);

    document.getElementById("myContainer").value = password;
}
