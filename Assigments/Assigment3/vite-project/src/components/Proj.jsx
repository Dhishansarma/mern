import React, { useEffect, useState } from "react";
import axios from "axios";
const Proj = () => {
  const [formdata, setFormdata] = useState({
    name: "",
    age: "",
    email: "",
    password: "",
  });
  const [user, SetUser] = useState([]);
  const [Editid, setEditId] = useState(null);

 
  const handleContent = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleUser = async (e) => {
    e.preventDefault();
  

    await axios.post("http://localhost:3000/api/user/", formdata);
    alert("user created");
    window.location.reload();

    
  };
 

  return (
    <div style={{ width: "400px", margin: "30px auto" }}>
      <form action="" method="post" onSubmit={handleUser}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={formdata.name}
          onChange={handleContent}
        />
        <br />
        <label htmlFor="age">Age</label>
        <input
          type="number"
          name="age"
          value={formdata.age}
          onChange={handleContent}
        />
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={formdata.email}
          onChange={handleContent}
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={formdata.password}
          onChange={handleContent}
        />
        <br />
        <button type="submit">Add</button>

        
      </form>

      
      
    </div>
  );
};

export default Proj;
