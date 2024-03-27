import React, { useState } from "react";
import Button from "./Button";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    sex: "",
    feedback: "",
    Severity: "",
    previousMedication: "No",
    medicationDetails: "",
    breathing: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("form submitted");

    console.log(formData);

    setFormData({
      name: "",
      phoneNumber: "",
      age: "",
      sex: "",
      feedback: "",
      Severity: "",
      previousMedication: "No",
      medicationDetails: "",
      breathing: "",
    });
  };

  return (
    <div>
      <div>
        <h1 className="font-bold text-primary ">COVID FEEDBACK FORM</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col font-serif py-2 px-3 border w-[33rem] max-sm:w-fit h-[30rem] text-primary ">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </label>
          <br />
          <label>
            Phone Number:
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              pattern="^[0-9]{10}$"
              required
            />
          </label>
          <br />
          <label>
            Age:
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              min="18"
              max="100"
              required
            />
          </label>
          <br />
          <label>
            Sex:
            <select
              name="sex"
              value={formData.sex}
              onChange={handleInputChange}
              required>
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </label>
          <br />
          <label>
            Feedback:
            <input
              type="textarea"
              name="feedback"
              value={formData.feedback}
              onChange={handleInputChange}
              required
            />
          </label>
          <br />
          <label>
            How was your conditon during the infection phase?
            <select
              name="Severity"
              value={formData.Severity}
              onChange={handleInputChange}
              required>
              <option value="">Select</option>
              <option value="Fatal">Fatal</option>
              <option value="Normal">Normal</option>
              <option value="Under Medication">Under Medication</option>
            </select>
          </label>
          <br />
          <label>
            Have you ever had previous medication?
            <select
              name="previousMedication"
              value={formData.previousMedication}
              onChange={handleInputChange}
              className="px-2"
              required>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </label>
          <br />
          {formData.previousMedication === "Yes" && (
            <label>
              Please mention details:
              <textarea
                name="medicationDetails"
                value={formData.medicationDetails}
                onChange={handleInputChange}
                rows={2}
                cols={50}
                required={formData.previousMedication === "Yes"}
              />
            </label>
          )}
          <label>
            {" "}
            Did you had difficulty in breathing?
            <select
              name="breathing"
              value={formData.breathing}
              onChange={handleInputChange}
              className="px-2"
              required>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </label>
          <br />

          <Button
            value="Submit"
            className=" bg-primary px-1 py-1 w-[5rem] text-secondary hover:text-one rounded-lg"></Button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
