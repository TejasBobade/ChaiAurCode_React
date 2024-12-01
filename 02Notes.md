# How to inject variable in jsx function 
- curly brace syntax
- <h1>Chai Aur Code {username}</h1>
- expresion -> evaluate expresion -> we don't write entier js we write final evaluated outcome

# Why we need hooks in react
- Problem ours when we need to change one thing for ex. we need to change the counter but counter is present at 3 to 5 position if we use js then we have to get each element evey time to change the counter using querySelector or getElementById etc.
- React controls the UI updatation.
- import { useState } from 'react'; -> used to get hooks

# Learn about virtual DOM
- createRoot -> create a new of it's own DOM why it need to create a DOM, it compaire his DOM with main Dom and only update the things which are needed to update at UI.
- Each time we reload at browser the entier DOM get re-created or re-painted.
- But in case of virtual DOM it only changes the things which are updated and keep a track of evey thing.

# React Fiber
- now we have the virtual dom but the algorithm to update it is now is react fider.
- we can pause , abort , reuse the work also have the ability to assign priority to updates.
- we crate a buttons and they don't do anything so we include js this process called HYDRATION.
- Reconciliation -> react algorith which reconsider what to update , check etc. It's diff  one tree with another.
- Reconciliation is algorithm behind -> Virtual DOM

- Interview -> Diffing of lists is performed using keys. Keys should be "stable, predictable,and unique."
- There is an array we have to loop through  a array and get the values to list , button , paragraph anywhere. 
The concept comes why we need to introduce keys we can directly do it with react it just gives you an warrning.
But in the new algorithm react fiber if we need to increase the performence of the lists we need to add keys.

- Main Points
pause work and come back to it later.
assign priority to different types of work.
reuse previously completed work.
abort work if it's no longer needed.
