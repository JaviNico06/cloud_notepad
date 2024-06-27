const fs = require('fs');
const path = require('path');

export default function handler(req, res) {
    if (req.method === 'POST') {
        const note = req.body.note;
        const filePath = path.resolve('.', 'note.txt');
        fs.writeFile(filePath, note, (err) => {
            if (err) {
                res.status(500).json({ success: false });
            } else {
                res.status(200).json({ success: true });
            }
        });
    } else {
        res.status(405).end(); // Method Not Allowed
    }
}
