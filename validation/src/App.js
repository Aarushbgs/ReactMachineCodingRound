import './App.css';
import { useState } from 'react';

function App() {

  const dafaultValues = {

    firstName: {
      id: 'firstName',
      label: 'First Name',
      type: 'text',
      placeholder: 'First Name...',
      value: '',
      isError: false,
      errorMsg: "First Name can't be empty"
    },

    lastName: {
      id: 'lastName',
      label: 'Last Name',
      type: 'text',
      placeholder: 'Last Name...',
      value: '',
      isError: false,
      errorMsg: "Last Name can't be empty"
    },
    email: {
      id: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'Email...',
      value: '',
      isError: false,
      errorMsg: "Email can't be empty"
    },

    password: {
      id: 'password',
      label: 'password',
      type: 'password',
      placeholder: 'password...',
      value: '',
      isError: false,
      errorMsg: "password can't be empty"
    },

    Confirmpassword: {
      id: 'Confirmpassword',
      label: 'Confirmpassword',
      type: 'password',
      placeholder: 'Confirmpassword...',
      value: '',
      isError: false,
      errorMsg: "Confirmpassword can't be empty"
    },

  }
  const [formData, setFormData] = useState(dafaultValues);
  const [isPassMatch,setisPassMatch]=useState(true);

  const handleInput = (e) => {
    const key = e.target.id;
    const value = e.target.value;
    const copyFormData = { ...formData };
    copyFormData[key].value = value;
    setFormData(copyFormData);
    isValidForm()
  }


  const passwordMatch=()=>{
    const copyFormData={...formData};
    const pass=copyFormData['password'].value;
    const Cpass=copyFormData['Confirmpassword'].value;
    if(pass!=Cpass){
      setisPassMatch(false);
    }
  }

  console.log(formData);
  const isValidForm = () => {
    const copyFormData = {...formData};
    Object.keys(copyFormData).forEach(key=>{
      const obj=copyFormData[key];
      obj.isError=!obj.value?true:false;
      passwordMatch();
    });
    setFormData(copyFormData);

  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    isValidForm();
  }
  return (
    <div className="App">
      <div className='container'>
        <form onSubmit={handleFormSubmit}>
          {
            Object.keys(formData).map((key) => {

              const { id, label, type, placeholder, value, isError, errorMsg } = formData[key];

              return <div className='form-item'>
                <label>{label}</label>
                <input
                  onChange={handleInput}
                  id={id}
                  placeholder={placeholder}
                  type={type}
                  value={value}
                  className={
                    isError&&'error-border'
                  }
                />
                {
                  isError && <span className='error'>{errorMsg}</span>
                }
                {
              key==='Confirmpassword'&&!isPassMatch&&
              <span className='error'>
                Password does not match 
              </span>
             }
              </div>
            })
          }
          <div className='form-item'>
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
