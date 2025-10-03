import "./app-info.css";

const AppInfo = (props) => {
  const { employees, increased } = props;

  return (
    <div className="app-info">
      <h1>Employee management in company Nazarius</h1>
      <h2>Total number of employees: {employees}</h2>
      <h2>Bonus will be given to: {increased}</h2>
    </div>
  );
};

export default AppInfo;
