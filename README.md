-- REST API that converts XML files to JSON without using any libraries
### Features

Custom XML parser (no third-party XML libs).

Supports:

XML declaration

Comments (<!-- -->)

Nested elements & hierarchy

Attributes (single & multiple)

Self-closing tags (<tag/>)

Text content

Entity references (&amp;, &lt;, etc.)

Mixed content

##  Live Links
- GitHub Repository:  https://github.com/vishh26/xmltojsonapi
- Deployed Backend API for default file: https://xmltojsonapi.onrender.com/api/xmlToJson
- Deployed Backend API for custom file:  https://xmltojsonapi.onrender.com/api/xmlToJson/upload

---

## Project Structure
index.js # Express server
parser.js # XML → JSON parser logic
test.xml # Sample XML input
output.json # Expected JSON output

## ⚡ Getting Started (Local Setup)
### 1️⃣ Clone the repo
```bash
git clone 

2️⃣ Backend Setup
cd Backend
npm install

npm start      # starts server on http://localhost:3000

POST http://localhost:3000/api/xmlToJson
Input: test.xml (local file inside backend folder)
Output: Returns JSON + writes output.json


🛠 API Documentation
###1 endpoint
POST https://xmltojsonapi.onrender.com/api/xmlToJson
Description: Parses the test.xml file from the project root and returns JSON.

### 2nd endpoint
POST https://xmltojsonapi.onrender.com/api/xmlToJson/upload
Description: Upload an XML file and convert it to JSON.
Request `Body :multipart/form-data with key: xmlFile → XML file   

