function collectFormData() {
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;

        var formData = {
            "name": name,
            "email": email
        };

        // Display JSON data
        document.getElementById("jsonDataDisplay").innerText = JSON.stringify(formData, null, 2);
    }