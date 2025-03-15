import { useState } from "react";
import "../App.css";

const MultiStep = () => {
  const forms = [
    {
      id: "name",
      label: "Name",
      inputType: "text",
      buttonName: "Next",
      placeholder: "Your Name...",
    },
    {
      id: "email",
      label: "Email",
      inputType: "text",
      buttonName: "Next",
      placeholder: "Your Email...",
    },
    {
      id: "dob",
      label: "DOB",
      inputType: "date",
      buttonName: "Next",
      placeholder: "",
    },
    {
      id: "password",
      label: "Password",
      inputType: "password",
      buttonName: "Submit",
      placeholder: "",
    },
  ];

  const [index, setIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dob: "",
    password: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (index === forms.length - 1) {
      console.log("Form Submitted:", formData);
      setIsFormSubmitted(true);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleBack = () => {
    setIndex((prevIndex) => prevIndex - 1);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <div className="App">
      {!isFormSubmitted ? (
        <form className="Multicontainer" onSubmit={handleSubmit}>
          {index > 0 && (
            <button type="button" onClick={handleBack}>
              Back
            </button>
          )}
          <label>{forms[index].label}</label>
          <input
            required
            value={formData[forms[index].id]}
            id={forms[index].id}
            onChange={handleInputChange}
            type={forms[index].inputType}
            placeholder={forms[index].placeholder}
          />
          <button type="submit">{forms[index].buttonName}</button>
        </form>
      ) : (
        <div>
          <h1>Success!</h1>
          <hr />
          <span>Name: {formData.name}</span>
          <br />
          <span>Email: {formData.email}</span>
          <br />
          <span>DOB: {formData.dob}</span>
          <br />
          <span>Password: ****</span>
          <br />
        </div>
      )}
    </div>
  );
};

export default MultiStep;
