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
