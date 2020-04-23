import React from 'react'
import styled from 'styled-components'
export default function Form(props) {
    const {onChangeHandle,onSubmitHandle,formData,onChecked,formErrors,valid} = props;
    const Form = styled.form `
        
        position:relative;
        
        margin:0 auto;
        padding:15%;
        
        background:lightgray;
    `
    return (
        
        <div>
            <form>
                <label htmlFor='first_name'>Name</label>
                <input type='text' name='fname' value={formData.fname} onChange={onChangeHandle}/>
                
                <p name='fnamError'> {formErrors.first_name} </p>

                <label htmlFor='email'>Email</label>
                <input type='email' name='email' value={formData.email} onChange={onChangeHandle}/>
                <p> {formErrors.email} </p>
                
                <label htmlFor='password'>Password</label>
                <input type='password' name='password' value={formData.password} onChange={onChangeHandle}/>
                <p> {formErrors.password} </p>


                <label>Do You agree to Our terms</label>
                <input type='checkbox' name='terms' onChange={onChecked}  />

                {valid ? <button onClick={onSubmitHandle}>Submit</button> : null}
            </form>
        </div>
    )
}
