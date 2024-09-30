import React from "react";

function Button({ 
  id, 
  onArchive, 
  onDelete, 
  archived }) {
  return (
    <div className="button mt-3">
      <button
        className="bg-blue-300 px-3 py-2 rounded text-base mr-1"
        onClick={() => onArchive(id)}
      >
        {archived ? "Aktifkan" : "Arsipkan"}
      </button>
      <button
        className="bg-rose-300 px-3 py-2 rounded text-base"
        onClick={() => onDelete(id)}
      >
        Hapus
      </button>
    </div>
  );
}
export default Button;
