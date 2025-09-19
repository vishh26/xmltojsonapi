
require('dotenv').config();
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const multer = require("multer");
const parser = require("./Parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// Multer setup for file upload
const upload = multer({ dest: "uploads/" });

//default test.xml file parsing
app.post("/api/xmlToJson", (req, res) => {
  try {
    const xmlData = fs.readFileSync(path.join(__dirname, "test.xml"), "utf-8");
    const jsonData = parser(xmlData);
    fs.writeFileSync(path.join(__dirname, "output.json"), JSON.stringify(jsonData, null, 4));
    res.json(jsonData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to parse XML" });
  }
});


 // Upload and parse custom XML file
 
app.post("/api/xmlToJson/upload", upload.single("xmlFile"), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const xmlData = fs.readFileSync(req.file.path, "utf-8");
    const jsonData = parser(xmlData);

    fs.writeFileSync(path.join(__dirname, "output.json"), JSON.stringify(jsonData, null, 4));

    res.json(jsonData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to parse uploaded XML" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
