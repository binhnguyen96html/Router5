import "./style.css";

import { useNavigate } from "react-router-dom";

const Employee = () => {
  let navigate = useNavigate();

  const selectEmployee = (e) =>{
    navigate(`/employee/detail/${e.target.value}`);
    //console.log(e.target.value)
  }



  return (
    <div>
      <h2>The List of Employees</h2>


      <table>
        <thead>
          <tr>
            <th>Employee</th>
            <th>Info</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Employee 1</td>
            <td>
              <button type="submit" value="1" onClick={(e) => selectEmployee(e)}>
                Detail
              </button>
            </td>
          </tr>

          <tr>
            <td>Employee 2</td>
            <td>
              <button type="submit" value="2" onClick={(e) => selectEmployee(e)}>
                Detail
              </button>
            </td>
          </tr>

          <tr>
            <td>Employee 3</td>
            <td>
              <button type="submit" value="3" onClick={(e) => selectEmployee(e)}>
                Detail
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Employee;
