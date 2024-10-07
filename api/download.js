const path = require('path');
const fs = require('fs');

module.exports = async (req, res) => {
  if (req.method === 'GET') {
    const filePath = path.join(__dirname, '..', 'public', 'cv.pdf');  
    if (fs.existsSync(filePath)) {
      res.setHeader('Content-Disposition', 'attachment; filename=mi-cv.pdf');
      res.setHeader('Content-Type', 'application/pdf');
      fs.createReadStream(filePath).pipe(res);
    } else {
      res.status(404).json({ message: 'File not found' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};
