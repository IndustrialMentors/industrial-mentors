const fs = require('fs');
const path = require('path');

const dbFilePath = path.join(__dirname, '..', 'src','server', 'db.json');

export default (req, res) => {
  try {
    const data = fs.readFileSync(dbFilePath, 'utf8');
    const jsonData = JSON.parse(data);
    res.status(200).json(jsonData);
  } catch (error) {
    console.error('Error reading JSON file:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
