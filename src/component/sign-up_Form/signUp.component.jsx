import { useState } from "react";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

const fieldValues = {
  Name: "",
  Email: "",
  Passowrd: "",
  ConfirmPassword: "",
};

const SignupForm = () => {
  const [formFields, setformFields] = useState(fieldValues);
  const { Name, Email, Password, ConfirmPassword } = formFields;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (Password !== ConfirmPassword) {
      alert("password dont match");
      return;
    }

    try {
      const response = await createAuthUserWithEmailAndPassword(
        Email,
        Password
      );
      console.log(response);
    } catch (error) {
      console.log("error", error);
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;

    setformFields({ ...formFields, [name]: value });
  };
  return (
    <div>
      <h1>Sign up using email ans password</h1>
      <form onSubmit={handleSubmit}>
        <label> Name</label>
        <input
          type="text"
          required
          onChange={handleChange}
          name="Name"
          value={Name}
        />
        <label> Email</label>
        <input
          type="email"
          required
          onChange={handleChange}
          name="Email"
          value={Email}
        />
        <label> Password</label>
        <input
          type="Password"
          required
          onChange={handleChange}
          name="Password"
          value={Password}
        />
        <label> Confirm Password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="ConfirmPassword"
          value={ConfirmPassword}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default SignupForm;
