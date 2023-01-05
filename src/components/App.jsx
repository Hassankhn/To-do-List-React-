import React, { useState } from "react";
import CreateArea from "./CreateArea";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";

const App = () => {
  const [note, setnote] = useState([]);

  const addnote = (newnote) => {
    setnote((prevnotes) => {
      return [...prevnotes, newnote];
    });
    console.log(note);
  };

  const deletenote = (id) => {
    setnote((prevnotes) => {
      return prevnotes.filter((noteitem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div>
      <Header />
      <CreateArea onAdd={addnote} />
      {note.map((element, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={element.title}
            content={element.content}
            onDelete={deletenote}
          />
        );
      })}

      <Footer />
    </div>
  );
};

export default App;
