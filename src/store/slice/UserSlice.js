import { createSlice } from "@reduxjs/toolkit";
import { deleteUser } from "../action/action";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    removerUser(state, action) {
      state.splice(action.payload, 1);
    },
    // deleteUsers(state, action) {
    //   // state.splice(action.payload,state.length)
    //   return [];
    // },
  },
  // This extra reducer will be appied in all micro reducer to impact the userSlice reducers.
  // All MICRO reducer can be use it
  // But have a caution don't delete userSlice -> deleteUsers because it is a main micro reducers.
  extraReducers(builder) {
    builder.addCase(deleteUser, () => {
      return [];
    });
  },
});

export default userSlice.reducer;

export const { addUser, removerUser } = userSlice.actions;
