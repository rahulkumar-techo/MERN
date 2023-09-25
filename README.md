### Redux Toolkit

1. CreateSlice ()
   This is the initial state .
2. ConfigureStore(); 
   This is to save();
3. actionCreator;
4. CreateAction
5. useDispatch
6. useSelector.


### # FIRST STEP CREATE A SLICE :

```js
import {createSlice} from '@redux/toolkit'

const userSlice = createSlice({
  name:'user',
  initialState:[],
  reducers:{
    addUser(state,action){},
    removerUser(state,action){},
    deleteUsers(state,action){},
  }
})
```

### # CREATE STORE 
configure store

```JS

import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./slice/UserSlice";

const store = configureStore({
    reducer:{
        users:UserSlice
    }
})

export default store;

```
### # 
To access Reducer in react-reducer

```js
// index.js
import { Provider } from "react-redux";
import store from './store/index'
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 <Provider store={store}>
  <App/>
 </Provider>
);
```

### # UPDATE STATE DATA

```js
// TodoForm 
import React, { useState } from "react";
// to call directly particular reducer
import { useDispatch } from "react-redux";
import { addUser } from "../store/slice/UserSlice";

  const [text, setText] = useState();
  const dispatch = useDispatch();

  const addNewUser = () => {
    dispatch(addUser(text));
  }
```

```js
// addUser
export const  {addUser} = userSlice.actions;
```
### # Access and Display Data/

```js
// to get data from state 
//

import { useSelector } from 'react-redux';

const data = useState((state)=>{
return state.users ;
})

```

### Delete a Single data 

```js
import { checked, removerUser } from "../store/slice/UserSlice";
import { useDispatch } from "react-redux";
  const dispatch = useDispatch();
  const deleteUser = () => {
    dispatch(removerUser(id));
  };
```

### # EXTRA REDUCER ?

```js
 // This extra reducer will be appied in all micro reducer to impact the userSlice reducers.
  // All MICRO reducer can be use it
  // But have a caution don't delete userSlice -> deleteUsers because it is a main micro reducers.
  extraReducers(builder) {
    builder.addCase(userSlice.actions.deleteUsers, () => {
      return [];
    });
  },
```


### # CREATE ACTION FUNCTION

There is no need to define for a particular reducers.


```js
import { createAction } from "@reduxjs/toolkit";
export const deleteUser = createAction('deleteUsers')
```