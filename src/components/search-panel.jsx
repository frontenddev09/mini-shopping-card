import React from "react";

class SearchPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }
  onChange = (e) => {
    let value = e.target.value;
    this.setState({ search: value });
    this.props.onUpdateSearch(value);
  };
  render() {
    let { search } = this.state;
    return (
      <input
        onChange={this.onChange}
        type="text"
        className="search"
        placeholder="Search..."
        value={search}
      />
    );
  }
}
export default SearchPanel;
