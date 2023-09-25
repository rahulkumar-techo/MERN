import React, { useState } from "react";
// to call directly particular reducer
import { useDispatch } from "react-redux";
import { addUser } from "../store/slice/UserSlice";

function TodoForm() {
  const [text, setText] = useState();
  const dispatch = useDispatch();

  const addNewUser = () => {
    dispatch(addUser(text));
  };
  return (
    <div className=" container bg-orange-400 py-4 px-3 flex justify-between mx-auto gap-3 mt-5">
      <input
        type="text"
        className=" rounded-md w-4/5 h-full "
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button className="bg-green-600 w-1/5" onClick={addNewUser}>
        ➕
      </button>
    </div>
  );
}

export default TodoForm;
