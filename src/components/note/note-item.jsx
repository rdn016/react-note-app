import React from "react";
import Button from "./button.jsx";

function NoteItem({
  id,
  title,
  body,
  onDelete,
  onArchive,
  createdAt,
  archived,
}) {
  return (
    <div className="note bg-rose-100 p-3 rounded-md my-2" id={id}>
      <h2 className="text-xl font-semibold mb-1">{title}</h2>
      <p className="text-sm text-slate-500 mb-2">{createdAt}</p>
      <p className="text-base text-slate-800 mt-2">{body} </p>
      <Button
        onDelete={onDelete}
        onArchive={onArchive}
        id={id}
        archived={archived}
      />
    </div>
  );
}
export default NoteItem;
