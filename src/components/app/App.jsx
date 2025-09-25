import AppInfo from "../app-info/AppInfo";
import SearchPanel from "../search-panel/SearchPanel";
import AppFilter from "../app-filter/AppFilter";
import EmployeesList from "../employees-list/EmployeesList";
import EmployeesAddForm from "../employees-add-form/EmployeesAddForm";

import "./app.css";

function App() {
  const data = [
    { name: "John C.", salary: 800, increase: false, id: 1 },
    { name: "Nazar T.", salary: 10000, increase: true, id: 2 },
    { name: "Alex S.", salary: 4000, increase: false, id: 3 },
  ];

  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>

      <EmployeesList data={data} />
      <EmployeesAddForm />
    </div>
  );
}

export default App;
