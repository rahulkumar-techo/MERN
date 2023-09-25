import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteUsers } from '../store/slice/UserSlice';
import { deleteUser } from '../store/action/action';

function Clear() {
const dispatch = useDispatch();
const deleteAll =() =>{
dispatch(deleteUser())
};

  return (
    <div className='w-full flex justify-end container' >
        <button className='py-3 px-4 rounded-md mt-5 bg-green-500 hover:bg-green-300'
        onClick={deleteAll}
        >Clear All </button>
    </div>
  )
}

export default Clear