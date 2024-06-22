```mermaid
sequenceDiagram
    participant client
    participant browser
    participant server
    
    client->>browser: Put URL 
    client->>browser: Press Enter button
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTTP 200 OK<br/>the HTML document
    deactivate server

    Note left of browser: The browser retrieves the HTML-code and executes<br/>the link-tag of the HEAD for loading the CSS file.
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: HTTP 200 OK<br/>the CSS file
    deactivate server

    Note left of browser: The browser retrieves the HTML-code and executes<br/>the script-tag of the HEAD for loading the JavaScript file.
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>browser: HTTP 200 OK<br/>the JavaScript file
    deactivate server

    Note left of browser: The JavaScript code sets event handler<br/>and waits for the response from the server  
    Note left of browser: The JavaScript code makes<br/>GET-request to the server for the notes
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: HTTP 200 OK<br/>[JSON file with all notes inside]
    deactivate server

    Note left of browser: The event handler of Javascript code is triggered, then the received<br/> notes are inserted into the local         array and rendered on the HTML page
    Note left of browser: The JavaScript code sets the event handler in the form<br/>and waits for the Save button to be pressed   
    Note right of client: The client fills the form<br/>with a new note and clicks the Save button 
    
    client->>browser: Fill Form
    client->>browser: Click Save button
    Note left of browser: The JavaScript's form event is triggered and the new note is fetched<br/>and added into local array, then the form field is cleared
    Note left of browser: The JavaScript code re-renders the notes using local array<br/>and delete the first note ul-element from HTML-code  
    Note left of browser: The JavaScript code sends the new note in JSON format
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    Note right of browser: Send the new note attached as JSON file.
    Note right of server: Put the new note into array
    server-->>browser: HTTP 201 Created<br/>{"message":"note created"}
    Note left of browser:  The Javascript code's callback function is triggered<br/>and responded text is printed in the console
    deactivate server    

```
