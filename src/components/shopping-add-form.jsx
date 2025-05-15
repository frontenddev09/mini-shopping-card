import React from "react";

class ShoppingAddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Buy ",
      number: "",
    };
  }
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onAdd = () => {
    let data = {
      title: this.state.title,
      number: this.state.number,
    };
    if (this.state.number.length == 0 || this.state.title.length == 0) {
      alert("All fields should be completed");
    } else {
      this.props.onAdd(data);
    }
  };
  render() {
    let { title, number } = this.state;
    return (
      <form className="form">
        <input
          name="title"
          type="text"
          className="title"
          placeholder="Title..."
          onChange={this.onChange}
          value={title}
        />
        <input
          name="number"
          type="number"
          className="number"
          placeholder="14"
          onChange={this.onChange}
          value={number}
        />
        <button type="button" onClick={this.onAdd}>
          Add
        </button>
      </form>
    );
  }
}

export default ShoppingAddForm;
