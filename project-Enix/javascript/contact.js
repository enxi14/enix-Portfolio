function validateForm() {
    var name = document.getElementById("Name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    if (name.trim() === "") {
        alert("Please enter a name.");
        return false;
    }

    if (email.trim() === "") {
        alert("Please enter an email address.");
        return false;
    } else if (!isValidEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (phone.trim() === "") {
        alert("Please enter a phone number.");
        return false;
    } else if (!isValidPhoneNumber(phone)) {
        alert("Please enter a valid phone number.");
        return false;
    }

    // Create a JSON object with the form data
    var formData = {
        "Name": name,
        "Email": email,
        "Phone": phone
    };

    // Display the JSON data on the page
    var jsonDataDisplay = document.getElementById("jsonDataDisplay");
    jsonDataDisplay.textContent = JSON.stringify(formData, null, 2);

    return false; // Prevent the form from actually submitting
}

// Rest of your code...

var registrationForm = document.getElementById("registrationForm");
registrationForm.onsubmit = function () {
    return validateForm();
};
