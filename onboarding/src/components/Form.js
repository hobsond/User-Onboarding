import React from 'react'

export default function Form(props) {
    const {onChangeHandle,onSubmitHandle,formData,onChecked,formErrors,valid} = props
    console.log(formErrors)
    return (
        
        <div>
            <form>
                <label htmlFor='first_name'>Name</label>
                <input type='text' name='first_name' value={formData.name} onChange={onChangeHandle}/>
                
                <p> {formErrors.first_name} </p>

                <label htmlFor='email'>Email</label>
                <input type='email' name='email' value={formData.email} onChange={onChangeHandle}/>
                <p> {formErrors.email} </p>
                
                <label htmlFor='password'>Password</label>
                <input type='password' name='password' value={formData.password} onChange={onChangeHandle}/>
                <p> {formErrors.password} </p>


                <label>Do You agree to Our terms</label>
                <input type='checkbox' name='terms'onChange={onChecked}  />

                {valid ? <button onClick={onSubmitHandle}>Submit</button> : null}
            </form>
        </div>
    )
}
