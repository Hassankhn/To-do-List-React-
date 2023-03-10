import React from "react";

const Note = (props) => {
  const handledelete = () => {
    props.onDelete(props.id);
  };
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handledelete}>Delete</button>
    </div>
  );
};

export default Note;
