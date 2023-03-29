import { useParams } from "react-router-dom";
import { employees } from "./data";

function Detail() {

  let { id } = useParams();

  let employee = employees[id-1];

  return (
    <div>
      <h3>Employee {id}</h3>

      <p>ID: {employee.idd}</p>
      <p>Name: {employee.name}</p>
      <p>Age: {employee.age}</p>

    </div>
  );
}

export default Detail;
