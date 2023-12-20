import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputarr, setInputarr] = useState([])

  const [inputdata, SetInputData] = useState({ name: "", email: "" })

  function changehandle(e) {
    SetInputData({ ...inputdata, [e.target.name]: e.target.value })
   
  }

  let { name, email } = inputdata;

  function formSubmit(e) {
    e.preventDefault();
    
    // Email Validation
    if (!isValidEmail(inputdata.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    alert(`Name: ${inputdata.name}\nEmail: ${inputdata.email}`);
    setInputarr([...inputarr, { name, email }])
    SetInputData({ name: "", email: "" })
  };

  const isValidEmail = (email) => {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  return (
    <div className="App">
      <form onSubmit={formSubmit}>

      <input type="text" placeholder='Enter your name' name="name" autoComplete='off' value={inputdata.name} onChange={changehandle} /><br></br>
      <input type="email" placeholder='Enter your email' name="email" autoComplete='off' value={inputdata.email} onChange={changehandle} /><br></br>
      <button onClick={formSubmit}>Add It</button>
      </form>

      <table border={1} width="30%" cellPadding={10} >
        <tbody>
          <tr>
            <td>Name</td>
            <td>Email</td>
          </tr>
          {
            inputarr.map(
              (info, ind) => {
                return (
                  <tr>
                    <td>{info.name}</td>
                    <td>{info.email}</td>
                  </tr>
                )
              }
            )
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;