const express = require('express');
const app = express();
const path = require('path');
app.use(express.static("public"));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public'));
})

const port = process.env.PORT || 4004;


app.listen(port, () => console.log(`Server is up on ${port}...`));