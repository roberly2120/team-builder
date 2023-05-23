import logo from './logo.svg';
import './App.css';
import react, { useState, useEffect } from 'react';
import TeamMember from './TeamMember';
import Form from './Form'

const initialTeam = [ 
  {
    name: "Eric Nobleman",
    email: "eric@ilovepuppies.com",
    role: "management",
    id: 0
  },
  {
    name: "Charlotte Engelbert",
    email: "charchar@bananagrams.com",
    role: "Web Designer",
    id: 1
  }
]

const initialFormValues = {
  name: "",
  email: "",
  role: ""
}

function App() {
  const [teamList, setTeamList] = useState(initialTeam);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [inputError, setInputError] = useState('');
  const [memberToEdit, setMemberToEdit] = useState(null)


  const submit = () => {
    
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
      id: teamList.length
    }
    if (!newMember.name || !newMember.email || !newMember.role) {
      setInputError("All fields are required");
    }
    setTeamList([...teamList, newMember])
    
    setFormValues(initialFormValues);
  }

  const updateForm= (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue})
  }

  
    // useEffect(() => {
    //   const editMember = () => {
    //     const member = teamList.find()
    //   }
    // }, [memberToEdit]) 

  
  return (
    <div className="App">
      <div className='form-container'>
        <Form 
        values={formValues}
        update={updateForm}
        submit={submit}
        />
      </div>
      {inputError && <h3 className='error'>{inputError}</h3>}
      <div className='teamMember-container'>
      <h2>Team Members</h2>
      {
        teamList.map((member, idx) => {
          return (
            <TeamMember key={idx} details={member} />
          )
        })
      }
      </div>
    </div>
  );
}

export default App;
