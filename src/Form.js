import React from 'react';

export default function Form (props) {
    const {values, update, submit} = props;

    const onSubmit = event => {
        event.preventDefault();
        submit();
    }

    const onChange = event => {
        const { name, value } = event.target;
        update(name, value)
    }
    

    return (

        <form className='form-container' onSubmit={onSubmit}>
            <h2>Enter Team Member Details</h2>
            <div className='input-container'>
                <label>Name&nbsp;
                    <input
                    type="text"
                    name="name"
                    placeholder='Enter Name'
                    value={values.name}
                    onChange={onChange}
                    />
                </label>
                <label>Email&nbsp;
                    <input
                    type='email'
                    name='email'
                    placeholder='Enter Email'
                    value={values.email}
                    onChange={onChange}
                    />
                </label>
                <label>Role&nbsp;
                    <select value={values.role} name='role' onChange={onChange}>
                        <option value=""> - Select Role - </option>
                        <option value="Management">Management</option>
                        <option value="Web-Designer">Web Designer</option>
                        <option value="Sales">Sales</option>
                        <option value="Backend-Development">Backend Development</option>
                    </select>
                </label>
                <div className='submit-button'>
                    <button>submit</button>
                </div>
            </div>
        </form>
    )
}