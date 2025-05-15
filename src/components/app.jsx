import Filter from "./filter";
import Information from "./information";
import ShoppingAddForm from "./shopping-add-form";
import ShoppingList from "./shopping-list";

import React from "react";
import SearchPanel from "./search-panel";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          size: 14,
          title: "Buy Ananas",
          active: false,
        },
        {
          id: 2,
          size: 10,
          title: "Buy Kivi",
          active: true,
        },
        {
          id: 3,
          size: 6,
          title: "Buy Milk",
          active: false,
        },
      ],
      search: "",
      filter: "all",
      maxId: 4,
    };
  }
  onDelete = (id) => {
    let newArr = this.state.data.filter((item) => item.id !== id);
    this.setState({ data: newArr });
  };

  onToggleActive = (id) => {
    let newArr = this.state.data.map((item) => {
      if (item.id === id) {
        return { ...item, active: !item.active };
      }
      return item;
    });
    this.setState({ data: newArr });
  };

  onAdd = (newData) => {
    const { title, number } = newData;
    this.setState({ maxId: ++this.state.maxId });
    let newObj = {
      title,
      size: number,
      id: this.state.maxId,
      active: false,
    };
    console.log(newObj);
    this.setState({ data: [...this.state.data, newObj] });
  };

  searchData = (arr, term) => {
    if (term.length === 0) {
      return arr;
    }

    return arr.filter(
      (item) => item.title.toLowerCase().indexOf(term.toLowerCase()) > -1
    );
  };

  filterData = (arr, filter) => {
    switch (filter) {
      case "completed":
        return arr.filter((item) => item.active);
      case "big-size":
        return arr.filter((item) => item.size > 10);
      default:
        return arr;
    }
  };

  onUpdateSearch = (search) => {
    this.setState({ search });
  };

  onFilterSelect = (filter) => {
    this.setState({ filter });
  };

  render() {
    let { data, search, filter } = this.state;

    let allData = this.filterData(this.searchData(data, search), filter);

    return (
      <div className="app">
        <div className="wrapper">
          <div className="card">
            <Information length={data.length} />

            <SearchPanel onUpdateSearch={this.onUpdateSearch} />

            <ShoppingAddForm onAdd={this.onAdd} />

            <ShoppingList
              data={allData}
              onDelete={this.onDelete}
              onToggleActive={this.onToggleActive}
            />

            <Filter filter={filter} onFilterSelect={this.onFilterSelect} />
          </div>
          <img src="/earth.svg" />
        </div>
      </div>
    );
  }
}

export default App;
