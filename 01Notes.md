# Basic Way to create React App
- Takes time there is better way to it
- bulky utility gives lots of things which may not be needed in bunddle
npx create-react-app 01basicreact
## Way to read react package
- Go inside Package.json and read name of project , version etc.
## Who to start/run react app
- Get inside react folder we created using -> cd 01basicreact
- check if package.json is present use -> dir
- Then we can run your start script
- npm run start

# Build react project using vite
- https://vite.dev/guide/
- It is bunddler
- npm create vite@latest
- 01vitereact
- javascript
## Install the dependencies which are needed
- here we need node_modules
- Command to install -> npm i
## Run the vite react project
- command -> npm run dev

# Learn about folder structure
- In both react & vite

- when JS is runing it runing only JS we have to inject it into html we have to call the scripts without exception.

# create react app folder structure 
- build -> we are ignoring it for now
- node_modules -> all the dependencies which are present in package.json after it get installed are get added inside this folder node_modules.
You will not find this folder in many repositories.
It will get created after npm install.
Lat ignore it for now
- src -> we deleted all the un-necessary file for now.
We only have two files which are 1. app.js 2. index.js
- .gitignore -> which files we want push on git or which we don't want to push.
We add name of files and folders which we don't want to push.
- package-lock.json -> this is similar to package.json but here your dependencies get locked.
We lock the stable version of dependencies.
like it going to work on this perticular version.
Ther are many more details but we does not need it right now.
- README.md -> Basic markdown file
- public -> index.html -> this file needs to br present.
manifest.json -> this is useful for mibile devices.
robots.txt ->  this is for search engine.
favicon , images. 
above files does't matter present or not for now.

- src & public -> majority of work is done inside this folders.

# react using npm
- we have a index file but it does not contain script tag how can react get applied to it. -> It's done by react script you will find it in package.json.
- we have app.js contain react , raactDom , app
- react creates its own DOM know as virtual dom we compaire it with main dom and apply the changes.Need more diging about this topic.
- const root = ReactDOM.createRoot(document.getElementById('root')); -> ReactDOM create virtual dom and createRoot is method of this ReactDOM.
- root.render { 
    <React.StrictMode>
    <App />
  </React.StrictMode>
  }; -> render the root inside <App /> using jsx which is basically allow you to create your own html tag it also has many more functionallity.
  React.StrictMode -> This is for developer use.
- App.js -> is basically a function and it return as export default App;

# react using vite
- index.html -> it contain script tag and render it as we done before does not contain react script

- <> </> -> ass we come to know that jsx component render only one element to solve this problem they created fragment.

# Good Practice

- When we are building component we are creating a function name of the function should be in capitalized manner.

- name of files for component should be in captitalized manner it does not give error good pratices.

- Some libraries force you to create a files with .jsx extention for ex. vite when you are creating component in the file or you are giving jsx code.
 
