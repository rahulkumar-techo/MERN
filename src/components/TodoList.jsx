import React from "react";
import { checked, removerUser } from "../store/slice/UserSlice";
import { useDispatch } from "react-redux";

function TodoList({ msg, id }) {
  const dispatch = useDispatch();
  const deleteUser = () => {
    dispatch(removerUser(id));
  };
  return (
    <div className=" bg-slate-700 p-2 rounded-md flex justify-between container mx-auto mt-5">
      <input type="checkbox" />
      <textarea name="" className=" w-4/6 p-3 h-auto" value={msg}></textarea>
      <button className="bg-green-700" onClick={deleteUser}>
        🗑️
      </button>
    </div>
  );
}

export default TodoList;
