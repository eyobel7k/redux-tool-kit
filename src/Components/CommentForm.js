import React,{useState} from 'react'
import{useDispatch}from 'react-redux';
import {setModalVissible}from '../Utils/appSlice'
import {addComment}from "../Utils/commentSlice"


function CommentForm() {

  const[newComment,setNewComment]=useState("");
  const dispatch = useDispatch();
  const onSubmit = ()=>{
    dispatch(addComment(newComment));
    dispatch(setModalVissible(false))
  };
  return (
    <>
    <div>CommentForm</div>
    <textarea placeholder='add your comment'
    value={newComment}
    onChange={(text)=>{setNewComment(text.target.value)}}
    />
    <button onClick={onSubmit}>Submit</button>
    </>
  );
}

export default CommentForm