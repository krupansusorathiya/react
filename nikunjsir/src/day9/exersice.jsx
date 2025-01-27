import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    email: "",
    matches: [],
    password: "",
    confirmPassword: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { value } = e.target;
    setFormData((prevState) => {
      const matches = prevState.matches.includes(value)
        ? prevState.matches.filter((match) => match !== value)
        : [...prevState.matches, value];
      return { ...prevState, matches: matches };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate password
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Display submitted data in table format
    setSubmittedData(formData);
  };

  return (
    <div>
      <h2>Register Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Cricketer Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            minLength={8}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label>Gender: </label>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={formData.gender === "Male"}
            onChange={handleInputChange}
          />
          Male
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={formData.gender === "Female"}
            onChange={handleInputChange}
          />
          Female
        </div>

        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label>Matches: </label>
          <input
            type="checkbox"
            value="ODI"
            checked={formData.matches.includes("ODI")}
            onChange={handleCheckboxChange}
          />
          ODI
          <input
            type="checkbox"
            value="Test"
            checked={formData.matches.includes("Test")}
            onChange={handleCheckboxChange}
          />
          Test
          <input
            type="checkbox"
            value="T20"
            checked={formData.matches.includes("T20")}
            onChange={handleCheckboxChange}
          />
          T20
          <input
            type="checkbox"
            value="Domestic"
            checked={formData.matches.includes("Domestic")}
            onChange={handleCheckboxChange}
          />
          Domestic
        </div>

        <div>
          <label>Password: </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label>Confirm Password: </label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <button type="submit">Save</button>
        </div>
      </form>

      {submittedData && (
        <div>
          <h3>Submitted Data:</h3>
          <table border="1">
            <thead>
              <tr>
                <th>Name</th>
                <th>Gender</th>
                <th>Email</th>
                <th>Matches</th>
                <th>Password</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{submittedData.name}</td>
                <td>{submittedData.gender}</td>
                <td>{submittedData.email}</td>
                <td>{submittedData.matches.join(", ")}</td>
                <td>{submittedData.password}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Register;