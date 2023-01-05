import React, { useState } from "react";

const CreateArea = (props) => {
  const [notes, setnotes] = useState({
    title: "",
    content: ""
  });

  function handlechange(e){
    const { name, value } = e.target;

    setnotes(preval => {
      return {
        ...preval,
        [name]: value
      };
    });
  };

  function handleadd(e){
    props.onAdd(notes);
    setnotes({
      title: "",
      content: ""
    });
    e.preventDefault();
  };

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          value={notes.title}
          onChange={handlechange}
        />
        <textarea
          name="content"
          placeholder="The new text...."
          rows="3"
          value={notes.content}
          onChange={handlechange}
        />
        <button onClick={handleadd}>Add</button>
      </form>
    </div>
  );
};
export default CreateArea;
