import React, { useEffect, useState } from "react";
import axios from "axios";
const UpdateUser = () => {
  const [formdata, setFormdata] = useState({
    name: "",
    age: "",
    email: "",
    password: "",
  });
  const [user, SetUser] = useState([]);
  const [Editid, setEditId] = useState(null);

  const getUser = async () => {
    const res = await axios.get("http://localhost:3000/api/user");
    SetUser(res.data);
  };

  useEffect(() => {
    getUser();
  }, []);


  const handleContent = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };


  const handleUser = async (e) => {
    e.preventDefault();
    if (Editid) {
      await axios.put(`http://localhost:3000/api/user/${Editid}`,formdata);
      alert("User updated");
      window.location.reload();  
    }

    await axios.post("http://localhost:3000/api/user/", formdata);
    alert("user created");
    window.location.reload();

    getUser();
  };
//   const handleUser = async (e) => {
//   e.preventDefault();

//   try {
//     if (Editid) {
//       console.log("Updating ID:", Editid);
//       await axios.put(`http://localhost:3000/api/user/${Editid}`, formdata);
//       alert("User updated");
//       window.location.reload();  
//       return;  // IMPORTANT !!!
//     }

//     await axios.post("http://localhost:3000/api/user/", formdata);
//     alert("User created");
//     window.location.reload();
//     getUser();
//   } catch (err) {
//     console.log(err);
//     alert("Error occurred");
//   }
// };


  const edituser = (user) => {
    setFormdata(user);
    setEditId(user._id);
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
        {Editid ?  <button type="submit">Update</button> : <button type="submit">Add</button>}

        
      </form>

      <hr></hr>
      {user.map((user) => (
        <div key={user._id}>
          <p> <b>Name :</b> {user.name} </p>
          <p>  <b>Age :</b>  {user.age} </p>
          <p> <b>Email :</b> {user.email} </p>
          <p> <b>Password :</b> {user.password} </p>
          <button type="submit" onClick={() => { edituser(user) }}>Edit </button>
          
          <hr />
        </div>
      ))}
    </div>
  );
};

export default UpdateUser;
