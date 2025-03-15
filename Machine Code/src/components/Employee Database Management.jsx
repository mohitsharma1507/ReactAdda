import { useState } from "react";
import LeftPart from "./LeftPart";
import RightPart from "./RightPart";
import data from "../data/data.json";
import "../App.css";

const Employee = () => {
  const [employees, setEmployees] = useState(data);
  const [showForm, setShowForm] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const toggleForm = () => {
    setShowForm((prev) => !prev);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newEmployee = Object.fromEntries(formData.entries());

    // Ensure ID is unique
    newEmployee.id = employees.length + 1;

    setEmployees([...employees, newEmployee]);
    setShowForm(false);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="app">
          <header>
            <h1>Employee DataBase Management</h1>
            <button className="AddBtn" onClick={toggleForm}>
              {showForm ? "Close Form" : "Add Employee"}
            </button>
          </header>

          <div className="main" style={{ display: "flex" }}>
            <div className="leftcontainer col-6">
              <LeftPart
                data={employees}
                setData={setEmployees}
                setSelectedEmployee={setSelectedEmployee}
                selectedEmployee={selectedEmployee}
              />
            </div>
            <div className="rightcontainer col-6">
              <RightPart selectedEmployee={selectedEmployee} />
            </div>
          </div>
        </div>
      </div>

      {/* Show overlay and form when form is opened */}
      {showForm && (
        <>
          <div className="overlay" onClick={toggleForm}></div>
          <form className="addEmployee_create" onSubmit={handleFormSubmit}>
            <h3>Add a new Employee</h3>
            <div>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                required
              />
            </div>
            <input
              type="text"
              name="imageUrl"
              placeholder="Image URL (Optional)"
            />
            <input type="email" name="email" placeholder="Email" required />
            <input
              type="number"
              name="contactNumber"
              placeholder="Contact"
              required
            />
            <input type="number" name="salary" placeholder="Salary" required />
            <input type="text" name="address" placeholder="Address" required />
            <input
              type="date"
              name="dob"
              placeholder="Date of Birth"
              className="addEmployee_create--dob"
              required
            />
            <input
              type="submit"
              className="addEmployee_create--submit"
              value="Submit"
            />
            <button className="CloseBtn" onClick={toggleForm}>
              Close
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default Employee;
