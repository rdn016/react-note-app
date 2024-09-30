import React from "react";
import SearchBar from "./search-bar.jsx";
function Header({ onSearch }) {
  return (
    <header className="text-lg h-14 bg-amber-700 text-slate-50 flex justify-between items-center px-3">
      <h1>Notes App</h1>
      <SearchBar onSearch={onSearch} />
    </header>
  );
}

export default Header;
