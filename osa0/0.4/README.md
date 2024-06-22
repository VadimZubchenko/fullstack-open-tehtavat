```mermaid
sequenceDiagram
    participant client
    participant browser
    participant server
    
    Note right of client: The client fills the form input field with<br/>a new note and clicks the Save button
    client->>browser: Fill Form
    client->>browser: Click Save Button
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    Note right of browser: The new note attached as data to POST requests is sending.
    Note right of server: The server creates a new note object<br/>and adds it into "notes" array.
    Note right of server: The sever redirects request<br/>to another location                         
    server-->>browser: HTTP 302 Found<br/>Location: /exampleapp/notes
    deactivate server

    Note left of browser: The browser makes request<br/>to another location
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTTP 200 OK<br/>the HTML document
    deactivate server

    Note left of browser: HTML-code executes the link-tag of the HEAD<br/>for loading the CSS file.
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: HTTP 200 OK<br/>the CSS file
    deactivate server
    Note left of browser: HTML-code executes the script-tag of the HEAD<br/>for loading the JavaScript file.

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: HTTP 200 OK<br/>the JavaScript file
    deactivate server
    
    Note left of browser: Browser executes the JavaScript code, that<br/>makes request for the JSON with the notes   
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: HTTP 200 OK<br/>[JSON file with all notes inside]
    deactivate server    

    Note left of browser: The Javascript code's AJAX onreadystatechange<br/> event is triggered and browser renders the notes
```
