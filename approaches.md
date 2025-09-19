# Approach:  How to convert the XML to JSON 

## Parser Design (parser.js)
### 1. Preprocessing
- Remove XML declaration (`<?xml version="1.0"?>`)
- Remove XML comments (`<!-- ... -->`)

### 2. Entity Handling
- `decodeEntities()` replaces common XML entities:
  - `&amp;` → `&`
  - `&lt;` → `<`
  - `&gt;` → `>`
  - `&quot;` → `"`
  - `&apos;` → `'`

### 3. Attribute Parsing
- `parseAttributes()` uses a regex `(\w+)="([^"]*)"` to capture key-value pairs.
- Each attribute stored with `_` prefix to avoid collision with tag names:
  - Example: `<user id="001">` → `{ "_id": "001" }`

### 4. Recursive Node Parsing
- Core function `parseNode()`:
  - Uses regex to match `<tag>...</tag>` or `<tag .../>` (self-closing).
  - Recursively parses inner content.
  - If multiple elements of same name exist, converts to array.
  - Combines attributes + children + text content into a single object.

---

## 5 Uploading File
-- used Multer to upload file for new xml files



## Backend (index.js)
- Built with Express

### Endpoints 
### 1. POST /api/xmlToJson
- Reads `test.xml` from project root 
- Writes `output.json`.
- Returns parsed JSON.

### 2. POST /api/xmlToJson/upload
- Accepts `multipart/form-data` with file field `xmlFile`.
- Parses uploaded XML file and returns JSON.






