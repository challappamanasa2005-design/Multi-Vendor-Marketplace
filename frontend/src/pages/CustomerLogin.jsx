import { useState } from "react";

function CustomerLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/api/customers/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
  email: email.trim(),
  password: password.trim(),
}),
        }
      );

      const data = await response.json();
      console.log(data.message);
      alert(data.message);

      if (data.message === "Login Successful") {
        localStorage.setItem("customerEmail", email);
         console.log(localStorage.getItem("customerEmail"));
        window.location.href = "/";
      }
    } catch (error) {
      console.log(error);
      alert("Login Failed");
    }
  };

  return (
   <div className="form-container">
      <h1>Customer Login</h1>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <br /><br />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <br /><br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default CustomerLogin;