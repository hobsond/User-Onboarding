import React, {useState,useEffect} from 'react';
import * as yup from 'yup';
import styled from 'styled-components';


import axios from 'axios';
import './App.css';
import Form from './components/Form'
import Members from './components/Members'




function App() {

  const initialValues = {
    first_name: '',
    email:'',
    password:'',
    terms:false,
  
  }
  
  const onChangeHandle = evt=>{
   const name = evt.target.name;
   const value = evt.target.value
   yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {

       
        setFormErrors({
          ...formErrors,
          [name]: '',
        })

        
      })
      .catch(err => {
        // dangit, does not validate :(
        // SET THE ERROR IN THE RIGHT PLACE
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        })
      })
    setFormData({
      ...formData,
      [name]:value
    })
  
  }
  
  const onSubmitHandle = evt=>{
    evt.preventDefault()
    axios.post(url,formData)
    .then(res=>{
      setMembers([...members,res.data])
      setFormData(initialValues)
      
    })

    .catch(err=>{
      console.log(err + 'error')
    })
    
    getMembers()
    
    
  }

  const onChecked = evt=>{
    const name = evt.target.name;
    const value = evt.target.checked;
    setFormData({
      ...formData,
      [name]:value
    })
  }
  const getMembers = ()=>{
    axios.get(url)
    .then(res=>{
      setMembers(res.data.data)
    })
    .catch(err=>{
      console.log(err)
    })
  }
  useEffect(()=>{
    getMembers()
    
  },[])
  
  const url = 'https://reqres.in/api/users'
  
  const [formData,setFormData]=useState(initialValues)
  const [members,setMembers]=useState([])
  const [formErrors, setFormErrors] = useState({})
  const [valid,setValid] = useState(false)

  

  const formSchema = yup.object().shape({
    first_name: yup
      .string()
      .min(3, 'username must have at least 3 characters!')
      .required('username is required!'),
    email: yup
      .string()
      .email('a VALID email is required')
      .required('email is required'),
    password:yup
      .string()
      .min(5,'Minimum length 5 characters')
      
    
  })

  useEffect(() => {
    // 🔥 STEP 8 - IF THE FORM VALUES CHANGE, WE NEED TO RUN VALIDATION
    // and use them to enable/disable the submit button
    formSchema.isValid(formData)
      .then(valid => { // either true or false
        setValid(valid)
      })
  }, [formData])



  

  return (
    <div className="App">
     <Form 
     onSubmitHandle={onSubmitHandle}
     onChangeHandle={onChangeHandle}
     formData={formData}
     onChecked={onChecked}
     formErrors={formErrors}
     valid = {valid}
     
     />

     {members.map(member=>{
      return <Members key={member.id} member={member}/>
       
     })}
    </div>
  );
}

export default App;
