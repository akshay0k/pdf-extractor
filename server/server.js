const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

app.use(express.static('public'));

app.post('/upload', upload.single('pdf'), (req, res) => {
  if (req.file) {
    res.json({ message: 'PDF uploaded successfully', path: req.file.path });
  } else {
    res.status(400).json({ error: 'No PDF provided' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
