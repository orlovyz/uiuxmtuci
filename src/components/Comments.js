import {React, useState, useEffect } from 'react';
import "./Comments.css";

function Comments() {
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
    const [user, setUser] = useState("");
  
    useEffect(() => {
      const url = window.location.href;
      const storedComments = localStorage.getItem(url);
      if (storedComments) {
        setComments(JSON.parse(storedComments));
      }
    }, []);
 
    const handleDeleteComment = (index) => {
      const updatedComments = [...comments];
      updatedComments.splice(index, 1);
      setComments(updatedComments);
    };
  


    const onClickHandler = () => {
      const newComment = { user, comment };
      const updatedComments = [...comments, newComment];
      setComments(updatedComments);
      const url = window.location.href;
      localStorage.setItem(url, JSON.stringify(updatedComments));
      setComment("");
    };
  
    const onChangeHandler = (e) => {
      setComment(e.target.value);
    };
  
    const onUserChangeHandler = (e) => {
      setUser(e.target.value);
    };

    const onEnterKeyDown = (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        onClickHandler();
      }
    };

    return (
      <div className="main-container">
        {comments.map((item, index) => (
          <div key={index} className='comment-container'>
            <p><strong>{item.user}</strong>: {item.comment}</p>
            <button onClick={() => handleDeleteComment(index)} className='delete-button'>Delete</button>

          </div>
        ))}
        <div className='comment-flexbox'>
          <h3 className='comment-text'>Comments</h3>
          <input value={user} onChange={onUserChangeHandler} placeholder="Your name" className='input-box-name'/>
          <textarea value={comment} onKeyDown={onEnterKeyDown} onChange={onChangeHandler} placeholder="Your comment" className='input-box'/>
          <button onClick={onClickHandler} className='comment-button'>Submit</button>
        </div>
      </div>
    );
  }
  
  export default Comments;
