import React from 'react';


import { useState } from 'react';

const initialState = {
  url:  '', name: '', description: ''
};

const LinkForm = (props) =>  {
  const [values, setValues] = useState(initialState);


  const handleSubmit = e => {
    e.preventDefault();
    // console.log(values);
    props.addOrEditlink (values);
    setValues({...initialState});
  }

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setValues({...values, [name]: value})
  }

  return (
    <form className='card card-body' onSubmit={handleSubmit}>
      <div className="form-group input-group mb-3">
           <div className='input-group-text bg-light'>
               <i className="material-icons">insert_link</i>
            </div>
            <input type="text" className='form-control' name='url'  onChange={handleInputChange}  value={values.url} placeholder='insert url'/>
      </div>

      <div className="form-group input-group mb-3">
        <div className='input-group-text bg-light'>
        <i className="material-icons">create</i>
        </div>
        <input type="text" className='form-control' name='name' placeholder='web site name' onChange={handleInputChange} value={values.name} />
      </div>
      
      <div className="form-group">
        <textarea name="description"  rows="3" className='form-control' placeholder='Write a description' onChange={handleInputChange} value={values.description}></textarea>
      </div>

      <button className='btn btn-primary btn block' >
        Guardar
      </button>

      

    </form>
  )
}

export default LinkForm;