async function collectFormData() {
            var name = document.getElementById("name").value;
            var email = document.getElementById("email").value;
            var age = document.getElementById("age").value;
            var country = document.getElementById("country").value;
            var interests = document.getElementById("interests").value;

            var formData = {
                "name": name,
                "email": email,
                "age": age,
                "country": country,
                "interests": interests
            };

            // Display JSON data
            var jsonDataDisplay = document.getElementById("jsonDataDisplay");
            jsonDataDisplay.innerHTML = "Submitting data...";

            // Simulate an asynchronous request (you can replace this with your actual server API)
            setTimeout(() => {
                jsonDataDisplay.innerHTML = "<pre>" + JSON.stringify(formData, null, 2) + "</pre>";
            }, 1500);
        }
