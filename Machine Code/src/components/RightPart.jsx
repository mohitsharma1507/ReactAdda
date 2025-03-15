function RightPart({ selectedEmployee }) {
  if (!selectedEmployee) {
    return (
      <div className="RightEmployeeDetail">
        <p
          style={{
            paddingBottom: "11px",
            marginBottom: "5px",
            textAlign: "center",
            borderBottom: "1px solid black",
          }}
        >
          Select an Employee to View Details
        </p>
      </div>
    );
  }
  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };
  return (
    <div className="RightEmployeeDetail">
      <p
        style={{
          paddingBottom: "11px",
          marginBottom: "5px",
          textAlign: "center",
          borderBottom: "1px solid black",
        }}
      >
        Employee Profile
      </p>
      <div className="profile-card">
        <img
          src={selectedEmployee.imageUrl}
          alt="Profile"
          style={{ width: "100px", borderRadius: "50%" }}
        />
        <h3>
          {selectedEmployee.firstName} {selectedEmployee.lastName}
        </h3>
        <p>
          <strong>email:</strong> {selectedEmployee.email}
        </p>
        <p>
          <strong>Contact:</strong> {selectedEmployee.contactNumber}
        </p>
        <p>
          <strong>Age:</strong> {calculateAge(selectedEmployee.age)}
        </p>
        <p>
          <strong>Date of Birth:</strong> {selectedEmployee.dob}
        </p>
        <p>
          <strong>Salary:</strong> {selectedEmployee.salary}
        </p>

        <p>
          <strong>Address:</strong> {selectedEmployee.address}
        </p>
      </div>
    </div>
  );
}

export default RightPart;
