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

const express = require('express');
const app = express();
const port = 3000;

app.get('/', async (req, res) => {
    try {
        // Simulate an asynchronous operation, e.g., fetching data from a database
        await new Promise(resolve => setTimeout(resolve, 2000));

        res.send('Hello, this is your asynchronous server!');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

