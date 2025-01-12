import { useState } from 'react';
import './App.css';

function App() {

  const data = [
    {
      id: "name",
      label: "Name",
      inputType: "text",
      buttonName: "Next",
      placeholder: "your Name..."
    },
    {
      id: "email",
      label: "Email",
      inputType: "email",
      buttonName: "Next",
      placeholder: "your Email..."
    },
    {
      id: "dob",
      label: "DOB",
      inputType: "date",
      buttonName: "Next",
      placeholder: ""
    }, {
      id: "password",
      label: "Password",
      inputType: "password",
      buttonName: "Submit",
      placeholder: ""
    }
  ]

  const [index, setIndex] = useState(0);
  const [isSubmitted, setisSubmitted] = useState(false);
  const [forms, setForms] = useState(data);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dob: '',
    password: ''
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    if (index === forms.length - 1) {
      console.log('Form submitted');
      setisSubmitted(true);
    } else {
      setIndex((idx) => idx + 1);
    }

  }

  const handleBack = (e) => {
    e.preventDefault();
    setIndex((idx) => idx - 1);
  }

  const handleInputChange = (e) => {
    const id = e.target.id;
    const val = e.target.value;
    const copyFormData={...formData};
    copyFormData[id]=val;
    setFormData(copyFormData);
    console.log(id, val);
  }

  return (
    <div className="App">

      {!isSubmitted ? 
      <form className='container' onSubmit={handleSubmit}>
        {index > 0 && <a href='/'
          onClick={handleBack}
        >
          Back
        </a>}

        <label>{forms[index].label}</label>
        <input
          required
          value={formData[forms[index].id]}
          id={forms[index].id}
          onChange={handleInputChange}
          type={forms[index].inputType}
          placeholder={forms[index].placeholder}
        />
        <button>{forms[index].buttonName}</button>
      </form>
      :
      <div>
      <h1>Success</h1>
      <hr/>
      <span>Name:{formData.name}</span>
      <br/>
      <span>Email:{formData.email}</span>
      <br/>
      <span>dob:{formData.dob}</span>
      <br/>
      <span>password:{formData.password}</span>
      <br/>
    </div>
      
    }
      
    </div>
  );
}

export default App;
