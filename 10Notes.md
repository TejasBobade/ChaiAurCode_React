# TODO -> Context Api and Local Storage
# Steps of project
1. Create a Project
- create a project using vite
- name of project -> 10todocontextLocal
- With React , Tailwind
- Add contexts folder in src
### contexts
- Inside it create a file name -> TodoContext.js
- create index.js to export TodoContext

### Create a function in app
- add all the function in app.jsx ex. add , update, delete etc.
- hook used are useState
- also import TodoProvider
// 40.10

### Local Storage
- Window localStorage
- Set and retrieve localStorage name/value pair:
localStorage.setItem("lastname", "Smith");
localStorage.getItem("lastname");
- Description
The localStorage object allows you to save key/value pairs in the browser.
- Note
The localStorage object stores data with no expiration date.
The data is not deleted when the browser is closed, and are available for future sessions.

2. Local Storage setup
- useEffect to get todos
