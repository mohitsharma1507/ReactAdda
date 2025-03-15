import { useEffect, useState } from "react";

function CreateForm() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    event.preventDefault();
    console.log(user);

    setUser({ firstName: "", lastName: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <input
          type="text"
          name="firstName"
          placeholder="Enter  firstName"
          value={user.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Enter LastName"
          value={user.lastName}
          onChange={handleChange}
        />

        <button type="submit">SIGNUP </button>
      </div>
    </form>
  );
}

export default CreateForm;
