import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      createdAt: Date.now(),
      title: "",
      body: "",
    };
  }

  handleTitleChange = (event) => {
    const { value } = event.target;
    if (value.length <= 50) {
      this.setState({ title: value });
    }
  };

  handleBodyChange = (event) => {
    this.setState({ body: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addNote(this.state);
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className="flex flex-col mt-8 border sm:w-1/2 w-3/4 m-auto p-8 border-dashed rounded-lg"
      >
        <section>
          <h1 className="text-2xl font-bold mb-4">Tambah Catatan</h1>
          <label htmlFor="judul" className="text-lg">
            Judul
          </label>
          <input
            type="text"
            name="judul"
            id="judul"
            className="border-green-300 rounded border w-full h-10 mt-1 p-2"
            value={this.state.title}
            onChange={this.handleTitleChange}
            maxLength="50"
            placeholder="Masukkan judul (max 50 karakter)"
          />
          <p className="text-sm text-gray-500 mt-1">
            {this.state.title.length}/50 karakter
          </p>
        </section>
        <section className="mt-6">
          <label htmlFor="catatan" className="text-lg">
            Catatan
          </label>
          <textarea
            name="catatan"
            id="catatan"
            className="border-green-300 rounded border w-full h-16 mt-1 p-2"
            value={this.state.body}
            onChange={this.handleBodyChange}
            placeholder="Masukkan catatan"
          ></textarea>
        </section>
        <button
          type="submit"
          className="bg-sky-500 text-slate-50 w-fit py-1 px-4 rounded mt-5 text-lg"
        >
          Simpan
        </button>
      </form>
    );
  }
}

export default NoteInput;
