import { Component } from "react";

import "./employees-add-form.css";

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      salary: "",
    };
  }

  onValueChange = (e) => {
    this.setState({
      // prop: e.target.value;
      [e.target.name]: e.target.value, // таким методом можна записати властивість в обєкт
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.name.length < 3) {
      alert("Name employee too short");
    } else if (this.state.salary === "" || this.state.salary < 200) {
      alert("Salary employee not specified or too small");
    } else {
      this.props.onAdd(this.state.name, this.state.salary);
      this.setState({
        name: "",
        salary: "",
      });
    }
  };

  render() {
    const { name, salary } = this.state;

    return (
      <div className="app-add-form">
        <h3>Add a new employee</h3>
        <form className="add-form d-flex" onSubmit={this.onSubmit}>
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="What is their name?"
            name="name"
            value={name}
            onChange={this.onValueChange}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="Salary in $?"
            name="salary"
            value={salary}
            onChange={this.onValueChange}
          />

          <button type="submit" className="btn btn-outline-light">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;
