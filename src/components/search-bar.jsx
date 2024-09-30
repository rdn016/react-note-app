import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState({ query: value });
    this.props.onSearch(value);
  }

  render() {
    return (
      <input
        type="text"
        placeholder="Cari note..."
        className="text-base p-1 rounded-sm text-slate-900 sm:pl-3"
        value={this.state.query}
        onChange={this.handleChange}
      />
    );
  }
}

export default SearchBar;
