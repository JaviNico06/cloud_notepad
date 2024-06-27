const fs = require('fs');
const path = require('path');

export default function handler(req, res) {
    const filePath = path.resolve('.', 'note.txt');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).json({ success: false });
        } else {
            res.status(200).json({ note: data });
        }
    });
}
