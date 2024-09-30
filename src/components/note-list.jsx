import React from "react";
import NoteItem from "./note/note-item.jsx";
function NoteList({
  id,
  title,
  body,
  onDelete,
  onArchive,
  createdAt,
  notes,
  name,
}) {
  if (notes.length == 0) {
    return (
      <div className="sm:w-1/2 w-3/4 m-auto note-container mb-12">
        <h1 className="text-2xl font-bold my-4">{name}</h1>
        <div className=" empty-note  bg-red-400 h-28  flex items-center justify-center rounded-md ">
          <h1 className="text-slate-50 font-bold text-lg">Catatan belum ada</h1>
        </div>
      </div>
    );
  }
  return (
    <div className="sm:w-1/2 w-3/4 m-auto note-container">
      <h1 className="text-2xl font-bold my-4">{name}</h1>
      {notes.map((note) => {
        return (
          <NoteItem
            onArchive={onArchive}
            onDelete={onDelete}
            id={id}
            key={note.id}
            title={title}
            body={body}
            createdAt={createdAt}
            {...note}
          />
        );
      })}
    </div>
  );
}

export default NoteList;
