function LeftPart({ data, setData, setSelectedEmployee, selectedEmployee }) {
  const handleDeleteChange = (id) => {
    const updatedEmployees = data.filter((employee) => employee.id !== id);
    setData(updatedEmployees); // Update employees in the parent

    // If the deleted employee is currently selected, reset selection
    if (selectedEmployee && selectedEmployee.id === id) {
      setSelectedEmployee(null);
    }
  };

  return (
    <div className="LeftEmployeeDetail">
      <p
        style={{
          paddingBottom: "10px",
          marginBottom: "5px",
          textAlign: "center",
          borderBottom: "1px solid black",
        }}
      >
        Employee List
      </p>
      <ul className="employee_list">
        {data.map((currData) => (
          <li
            key={currData.id}
            style={{
              cursor: "pointer",
              padding: "5px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "10px",
              borderBottom: "1px solid #ddd",
              paddingBottom: "5px",
            }}
          >
            <span onClick={() => setSelectedEmployee(currData)}>
              {currData.firstName} {currData.lastName}
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation(); // Prevents selection when clicking delete
                handleDeleteChange(currData.id);
              }}
              style={{
                padding: "2px 6px",
                background: "red",
                color: "white",
                border: "none",
                borderRadius: "3px",
                cursor: "pointer",
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LeftPart;
