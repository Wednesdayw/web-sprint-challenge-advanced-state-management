1. What problem does the context API help solve?
Context API provides a way to share values between components without having to explicitly pass a prop through every level of the tree.
We use the Context API when we have global data that lots of components share (things like user or theme), or when we have to pass data through intermediate components. The API can help keep your state relatively clean.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions are an object that modify state reducers.
Reducers are the logic that tells state how to change when the actions tells it to change.
Store is the data provider for an app.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state: When you have data that is going to be used in other parts of the application, so you need a way to pass down props to every component that needs it.
Component state: When you need to keep track of state but it doesn't need to used by other components. 

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
redux-thunk provides the ability to turn an action creator into a thunk or a function that returns another function call.

5. What is your favorite state management system you've learned and this sprint? Please explain why!
useReducer,it's so useful and functional. It provides access to both the state and a function that dispatch actions to the reducer. 