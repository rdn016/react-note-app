import React from "react";
import { createRoot } from "react-dom/client";
import Footer from "./components/footer.jsx";
import Header from "./components/header.jsx";
import NoteList from "./components/note-list.jsx";
import { getInitialData } from "./components/data/data.js";
import NoteInput from "./components/NoteInput.jsx";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      filteredNotes: getInitialData(), // Menyimpan notes yang difilter
    };
    this.addNoteHandler = this.addNoteHandler.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onArchive = this.onArchive.bind(this);
    this.onSearch = this.onSearch.bind(this); // Tambahkan binding untuk onSearch
  }

  addNoteHandler({ title, body }) {
    const newNote = {
      title,
      body,
      id: Date.now(),
      createdAt: new Date().toLocaleString(),
      archived: false,
    };
    this.setState((prevState) => ({
      notes: [...prevState.notes, newNote],
      filteredNotes: [...prevState.notes, newNote], // Tambahkan ke filteredNotes juga
    }));
    alert("Berhasil menambahkan note");
  }

  onDelete(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({
      notes,
      filteredNotes: notes, // Update filteredNotes juga saat delete
    });
  }

  onArchive(id) {
    const notes = this.state.notes.map((note) => {
      if (note.id === id) {
        return { ...note, archived: !note.archived };
      }
      return note;
    });
    this.setState({
      notes,
      filteredNotes: notes, // Update filteredNotes juga saat archive
    });
  }

  onSearch(query) {
    if (query === "") {
      // Jika input kosong, kembalikan semua notes
      this.setState({ filteredNotes: this.state.notes });
    } else {
      // Filter notes berdasarkan judul atau body
      const filteredNotes = this.state.notes.filter(
        (note) =>
          note.title.toLowerCase().includes(query.toLowerCase()) ||
          note.body.toLowerCase().includes(query.toLowerCase())
      );
      this.setState({ filteredNotes });
    }
  }

  render() {
    const activeNotes = this.state.filteredNotes.filter(
      (note) => !note.archived
    );
    const archivedNotes = this.state.filteredNotes.filter(
      (note) => note.archived
    );

    return (
      <>
        <Header onSearch={this.onSearch} /> {/* Kirim onSearch ke Header */}
        <NoteInput addNote={this.addNoteHandler} />
        <NoteList
          notes={activeNotes}
          onDelete={this.onDelete}
          onArchive={this.onArchive}
          name="List Catatan"
        />
        <NoteList
          notes={archivedNotes}
          onDelete={this.onDelete}
          onArchive={this.onArchive}
          name="Arsip"
        />
        <Footer />
      </>
    );
  }
}

const root = createRoot(document.getElementById("root"));
root.render(<NoteApp />);
