# Currency Converter
// 5.22

# create a custom hook
- create a folder name hooks
- name of file -> useCurrencyInfo.js
- name of hook -> useCurrencyInfo

# API
- https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json
- when you get the data from api in json format many times it's type is string we have convetre it into json

# How to make components re-usable
- we are going to make two files inside of it
- InputBox.jsx
- we should use key when we are looping in componenets

# Hook -> useId
- useId is a React Hook for generating unique IDs that can be passed to accessibility attributes.

# reactRouter
- https://reactrouter.com/en/main/start/tutorial
- npm install react-router-dom
- import {Link, NavLink} from 'react-router-dom'

# Link , Navlink instead of a tag -> Interview
- we know that page get refreshed when we call the a tag
- But in react we only change the component and do not refresh page
- That's why we use link instead of a tag

# Navlink -> {isActive}
- How the user know that they are present at home page or about page and how we can change color highlighting based on the change in page.
- inside Navlink take a call back <NavLink className={({isActive}) => border-b $ ${isActive ? "text-orange-700" : "text-gray-700"} } >Home</NavLink>
- check if the page is active for the specific page like home , about etc.

# <RouterProvider router={router} />
- It take a props 
# How to create router
# Outlet
- import { Outlet } from 'react-router-dom'
-         <>
        <Header />
        <Outlet />
        <Footer />
        </>
- Use above layout as base and keep the Header and Footer same components can be changed , we can change the things where we given the Outlet
- inside -> main.jsx
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
    ]
  }
])

# hook -> 
- import { useParams } from 'react-router-dom'
- const { userid } = useParams(); // Access the dynamic `userid` from the URL

// 7.18