const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/save', (req, res) => {
    const note = req.body.note;
    fs.writeFile('note.txt', note, (err) => {
        if (err) {
            res.status(500).send({ success: false });
        } else {
            res.send({ success: true });
        }
    });
});

app.get('/load', (req, res) => {
    fs.readFile('note.txt', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send({ success: false });
        } else {
            res.send({ note: data });
        }
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
