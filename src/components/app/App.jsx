import { Component } from "react";

/* import { v4 as uuidv4 } from "uuid"; */

import AppInfo from "../app-info/AppInfo";
import SearchPanel from "../search-panel/SearchPanel";
import AppFilter from "../app-filter/AppFilter";
import EmployeesList from "../employees-list/EmployeesList";
import EmployeesAddForm from "../employees-add-form/EmployeesAddForm";

import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: "John C.",
          salary: 800,
          increase: false,
          like: false,
          id: 1,
        },
        {
          name: "Nazar T.",
          salary: 10000,
          increase: false,
          like: false,
          id: 2,
        },
        {
          name: "Alex S.",
          salary: 4000,
          increase: false,
          like: false,
          id: 3,
        },
      ],
    };
    this.maxId = 4;
  }

  /* const data = [
    { name: "John C.", salary: 800, id: 1 },
    { name: "Nazar T.", salary: 10000, id: 2 },
    { name: "Alex S.", salary: 4000, id: 3 },
  ]; */

  deleteItem = (id) => {
    this.setState(({ data }) => {
      /* const index = data.findIndex((elem) => elem.id === id); */

      /* const before = data.slice(0, index);
      const after = data.slice(index + 1);

      const newArr = [...before, ...after]; */

      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      like: false,
      id: this.maxId++,
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];

      return {
        data: newArr,
      };
    });
  };

  onToggleProp = (id, prop) => {
    /*     this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id == id);

      const old = data[index];
      const newItem = { ...old, increase: !old.increase };

      const newArr = [
        ...data.slice(0, index),
        newItem,
        ...data.slice(index + 1),
      ];

      return {
        data: newArr,
      };
    }); */

    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            [prop]: !item[prop],
          };
        }

        return item;
      }),
    }));
  };

  render() {
    const employees = this.state.data.length;
    const increased = this.state.data.filter(
      (item) => item.increase === true
    ).length;
    const { data } = this.state;

    return (
      <div className="app">
        <AppInfo employees={employees} increased={increased} />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployeesList
          data={data}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
