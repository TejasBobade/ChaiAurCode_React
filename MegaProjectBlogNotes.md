// 2.36
# Mega Project -> Blog App
- appwrite -> backend as a service ->https://cloud.appwrite.io
- tinymce -> richtext editor -> https://github.com/tinymce/tinymce
- html-react-parser -> parse html to content -> https://www.npmjs.com/package/html-react-parser
- react-hook-form -> https://www.react-hook-form.com/
- create-react-app-environment-variable ->      https://create-react-app.dev/docs/adding-custom-environment-variables
- Env Variables and Modes -> vite ->
https://vite.dev/guide/env-and-mode.html

// 2.50
# Steps to create react project
- npm create vite@latest
- 12MegaBlog
- React
- JavaScript
- cd 12MegaBlog
- npm install
- npm install @reduxjs/toolkit react-redux react-router-dom appwrite @tinymce/tinymce-react html-react-parser react-hook-form

// 3.01
# Create .env file
- create this file in root 
- Put this file in .gitignore
- here we have to remember using which we are building app for ex. we are using vite here so the environment variable declare in different way than create react app env variables
- Keep it in mind we have to change way we define environment varible depending on what we are using
- 1. .env & .env.sample files -> VITE_APPWRITE_URL="test environment"
- 2. for access of env variable -> console.log(import.meta.env.VITE_APPWRITE_URL);

// 3.10
# Set-up appwrite
- create project
- project name -> chaiblog
- setting -> api endpoint -> copy -> past it in .env -> VITE_APPWRITE_URL
- setting -> project id -> copy -> past it in .env -> VITE_APPWRITE_PROJECT_ID
- database -> create database -> name -> blog -> copy id -> past it in .env -> VITE_APPWRITE_DATABASE_ID
- databases -> blog -> create collection -> name -> articles -> copy id -> past it in .env -> VITE_APPWRITE_COLLECTION_ID
- articles -> setting -> permissions -> allusers -> crud operation(Remenber this step and do it)
- articles -> attributes -> create attribute -> select type of attribute -> key , size , required -> create
- articles -> indexes -> create index -> index key = status -> index type = key -> attribute = status -> order = ASC
- storage -> create bucket -> name = images -> copy id -> past it in .env -> VITE_APPWRITE_BUCKET_ID
- storage -> images -> setting -> permissions -> allusers -> crud operation(Remenber this step and do it)

# create a conf
- src -> new folder = conf -> new file = conf.js
- Ther put all the environment variable 
- ex. 
const conf = {
    // add all the environment with same below format
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
}
export default conf;


# some notes 
- There is a concept now as vender locking 
- we have to right a code in the way even if we need to remove the authutication service of appwrite our app should still be runing
- And heres comes the concept of services -> are basically a class -> we export methods from there and we don't need to worry about what in happing in it.
- your application does not need to worry about what is been used it would be appwrite , firebox , or server etc.

// 3.28
# appwrite -> service
- src -> new folder = appwrite -> new file = auth.js
- appwrite -> new file = cong.js
- auth.js -> 
1. import { Client, Account, ID } from "appwrite";
2. create a AuthService
3. create new client
4. create a method we are going to use in appwrite , This is basically a wraper for all appwrite services
- similary done for cong.js

// 4.25
# set a state -> redux , redux-toolkit
- 1. src -> create new folder = store -> create new file = store
- store -> import a configureStore -> import {configureStore} from '@reduxjs/toolkit'; -> store always comes from redux
- create a configureStore
- inside store -> create reducer
- 2. store -> create new file = authSlice -> import { createSlice } from "@reduxjs/toolkit";
- Slice need three things name , initialState , reducers
- create initialState
- create new object = authSlice -> give properties like -> name , initialState , reducers
- exported actions from reducers -> export const { login, logout} = authSlice.actions;
- export the reducers -> export default authSlice.reducer;

// 4.35
# Create components
- src -> create new folder = components
- components -> create new folder = Header -> create new file = Header
- components -> create new folder = Footer -> create new file = Footer

// 4.38
# Some notes 
- Inside app.jsx
- when app get load up we have to see if the user is logged in or not.
- if logged in we will show user some things.
- if user is not logged in we will show user that you are not logged in
- First we are going to build state for loading
- when we are going to fetch data from appwrite is not like is inside our home or it is not in our local system some time work may not be done immedietly 
- even is production that network request may take some time so we are we asking something to database or network it good to build loading state on that basis we can do conditional rendering  using if else 
- if loading is true we will show loading icon else we will shaow data

// 4.53
# pages
- src -> create new folder = pages

// 4.54
# Work On Components
- src -> create new folder = container -> create new file = Container.jsx 
- container accept properties as children 
- container is like box which has something above and below
- we define styling properties inside it

// 5.21

// 5.51

// 5.56 -> use react form

// 6.40 -> RTE(real time editor)

// 6.52 -> post form

// 7.23 -> pages

// 7.44 -> routing

// 7.50 -> debugging

// 8.04 -> add integration platform in appwrite -> web

// 8.10 -> Todos