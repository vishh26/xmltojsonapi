-- REST API that converts XML files to JSON without using any libraries


##  Live Links
- GitHub Repository:  https://github.com/vishh26/xmltojsonapi
- Deployed Backend API for default file: https://xmltojsonapi.onrender.com/api/xmlToJson
- Deployed Backend API for custom file:  https://xmltojsonapi.onrender.com/api/xmlToJson/upload

---

## How to test API in Postman
 
# Default file

Open Postman and select GET method.

Enter the URL: https://xmltojsonapi.onrender.com/api/xmlToJson

Click Send → You will get the JSON response from the default XML file.

# Custom file upload

Open Postman and select POST method.

Enter the URL: https://xmltojsonapi.onrender.com/api/xmlToJson/upload

Go to the Body tab → select form-data.

Add a key named xmlFile → Type: File → Choose the XML file you want to upload.

Click Send → You will get the JSON response converted from your uploaded XML file.

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
## Project Structure
index.js # Express server
parser.js # XML → JSON parser logic
test.xml # Sample XML input
output.json # Expected JSON output

## ⚡ Getting Started (Local Setup)
### 1️⃣ Clone the repo
```bash
git clone 

# Backend Setup
cd Backend
npm install

npm start      # starts server on http://localhost:3000


#1)for Default file
POST :http://localhost:3000/api/xmlToJson

Input: test.xml (local file inside backend folder)

Output: Returns JSON + writes output.json

Select POST method.

2) Custom file upload

-POST: http://localhost:3000/api/xmlToJson/upload

-Body → form-data → key = xmlFile, type = File → select your XML file

-Click Send → Get JSON response




