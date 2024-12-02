# Tailwind
- https://tailwindcss.com/

# props
- just giving props does not affect the chsnges we have to handle the props
ex. we change btn text to something and now we want it to get refelected in the UI we have go inside component and add it.
<Card username= "Tejas" paragraphText = "Hello to chai aur code."/>
function Card({username , paragraphText = "Default Value"}){
    return( <h2>{username} {paragraphText}</h2>)
}
- we can also give default props value

// 3.48

# useCallback 
- useCallback is a React Hook that lets you cache a function definition between re-renders.
- https://react.dev/reference/react/useCallback

# useEffect
- useEffect is a React Hook that lets you synchronize a component with an external system.
- https://react.dev/reference/react/useEffect

# useRef
