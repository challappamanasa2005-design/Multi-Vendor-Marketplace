import { useState } from "react";

function CustomerRegister() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({ name, email });
    alert("Customer Registered Successfully");
  };

  return (
    <div>
      <h1>Customer Registration</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Customer Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br /><br />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default CustomerRegister;