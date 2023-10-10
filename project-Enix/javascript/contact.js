function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    if (username.trim() === "") {
        alert("Please enter a username.");
        return false;
    }

    if (password.trim() === "") {
        alert("Please enter a password.");
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

    return true;
}

function isValidEmail(email) {
}

function isValidPhoneNumber(phone) {
    
}

var registrationForm = document.getElementById("registrationForm");
registrationForm.onsubmit = function () {
    return validateForm();
};

function isValidEmail(email) {
    // Basic email format validation using a regular expression
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

function isValidPhoneNumber(phone) {
    // Basic phone number format validation using a regular expression
    var phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
}

